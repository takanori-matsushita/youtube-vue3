import { storage } from "./config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
/**
 * 必要最低限のアップロード用関数
 * @param path : アップロードするファイルの参照を指定する。例：'videos/example.mp4'
 * @param file : アップロードするファイルそのもの
 * @returns firebase.storage.UploadTask を返す
 */
export const uploader = (path: string, file: File) => {
  const storageRef = ref(storage, path)
  return uploadBytes(storageRef, file)
}

/**
 * 必要最低限のダウンロード用関数
 * downloader()で取得したURLは、<video src={url}>とすることで、ファイルを直接ダウンロードすることなく、メディアを表示できる。
 * @param path : ダウンロードするファイルの参照を指定する。例：'videos/example.mp4'
 * @returns string  ファイルをダウンロードするためのURLを返す。
 */
export const downloader = (path: string) => {
  const storageRef = ref(storage, path)
  return getDownloadURL(storageRef)
}
