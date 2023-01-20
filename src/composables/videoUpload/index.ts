import { ref } from "vue"
import { storage } from "@/utils/Firebase/config"
import { ref as fileRef, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useInsertVideoMutation } from "@/utils/graphql/generated";
import { useAuth } from "@/stores/useAuth";
import { storeToRefs } from "pinia";

type UploadProps = {
  file: {
    thumbnail: File;
    video: File;
  };
  title: string;
  description?: string;
  ownerId: string;
};
export const useVideoUpload = () => {
  const loading = ref<boolean>(false)
  const error = ref<Error>()
  const auth = useAuth()
  
  // Firebase Storageにファイルをアップロードする処理
  const uploadStorage = (id: string, file: File, path: string) => {
    // ファイルから拡張子を抜き出す
    const exe = file.name.split(".").pop()

    // `ref`でファイルのパスを指定する。
    // → PCのディレクトリと同じ考え方。ref('videos/video.mp4')とすれば、videosという階層にvideo.mp4を作成する
    //
    // putでファイルのアップロードを実際に行う
    // `ref`で指定したパスに対して、ファイルの実態をアップロードする
    const storageRef = fileRef(storage, `${path}/${id}.${exe}`)
    return uploadBytes(storageRef, file).then((snapshot) => {
      return snapshot
    });
  }

  const upload = async ({ file, title, description, ownerId }: UploadProps) => {
    if(!auth.user?.id) {
      return
    } 
    // 処理が始まったら、ローディング中にする
    loading.value = true

    // 動画とサムネイルのそれぞれのuuidを生成する
    const videoName = uuidv4();
    const thumbName = uuidv4();

    // 動画のIDを生成する
    const videoId = uuidv4();

    // try-catch構文でPromise(アップロード処理)のエラーをキャッチする
    try {
      // 動画のアップロード処理
      // 動画は全て`videos`と言う階層に保存される
      const videoUploadTask = await uploadStorage(
        videoName,
        file.video,
        "videos"
      );

      // 画像サムネイルのアップロード処理
      // 画像サムネイルは全て`thumbnails`に保存される
      const thumbnailUploadTask = await uploadStorage(
        thumbName,
        file.thumbnail,
        "thumbnails"
      );
      // 動画のメタデータを保存する
      const { mutate, error: apolloError } = useInsertVideoMutation({
        variables: {
          id: videoId,
          title,
          description,
          video_url: videoUploadTask.ref.fullPath,
          thumbnail_url: thumbnailUploadTask.ref.fullPath,
          owner_id: ownerId,
        },
      })

      if(apolloError.value) {
        console.error(apolloError);
        error.value = new Error("エラーが発生しました。最初からやり直してください。");
      }

      const res = await mutate()

      return res?.data?.insert_videos_one

    } catch (e) {
      // アップロードの途中でエラーが発生したら、処理を中断して、ここに記述される処理が行われる
      console.error(e);
      error.value = new Error("エラーが発生しました。最初からやり直してください。")
    } finally {
      // 全ての処理が完了したら、ローディングをfalseにする
      loading.value = false
    }
  };

  return {
    upload,
    loading,
    error,
  };
}