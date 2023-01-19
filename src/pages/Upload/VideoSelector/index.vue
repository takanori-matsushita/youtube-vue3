<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";

interface Props {
  videoFile: File | null
  thumbFile: File | null
}

const props = defineProps<Props>()

interface Emits {
  (e: "update:videoFile", value: File): void
  (e: "update:thumbFile", value: File): void
}

const emits = defineEmits<Emits>()

const inputRef = ref<HTMLInputElement>();
const handleClick = () => {
  if (!inputRef.value) return;
  inputRef.value.click();
};

const file = ref<File>();
const selectedFile = (event: Event) => {
  if (!(event.currentTarget instanceof HTMLInputElement)) return;
  if (event.currentTarget.files?.length) {
    emits("update:videoFile", event.currentTarget.files[0])
  }
};

const videoURL = ref<string>();
watchEffect(() => {
  if (props.videoFile) {
    const videoUrl = URL.createObjectURL(props.videoFile);
    videoURL.value = videoUrl;
    createThumbnail(videoUrl);
  }
});

const thumbnailURLs = ref<string[]>([]);
const selectThumbURL = ref<string>("");

// サムネイルを生成する関数
const createThumbnail = (videoRefURL: string) => {
  // サムネイル生成のための準備
  // canvasタグを使って、<video>のビューを転写する
  const video = document.createElement("video");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  // <video>の動画の読み込みが終わったら、<canvas>に<video>と同じサイズにリサイズ
  video.onloadeddata = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    video.currentTime = 0;
  };
  // video.currentTime が変更されるたびに呼び出される関数(onseeked)を指定する
  // video.currentTimeの時のvideoのビュー表示を<canvas>に転写して画像を生成
  // video.currentTime が動画の最後になるまで繰り返す
  video.onseeked = () => {
    if (video.currentTime >= video.duration || !context) return;
    //  <video>のビューを<canvas>に転写
    context.drawImage(video, 0, 0);
    // 配列のstateを更新する
    // イメージとしては、array.append(value)
    // 詳しくは：https://zenn.dev/gunners6518/articles/4c06488cfa402e
    if (thumbnailURLs.value.length) {
      thumbnailURLs.value = [
        ...thumbnailURLs.value,
        canvas.toDataURL("image/jpeg"),
      ];
    } else {
      thumbnailURLs.value = [canvas.toDataURL("image/jpeg")];
    }
    video.currentTime += Math.ceil(video.duration / 3);
  };

  // 動画の読み込み
  video.src = videoRefURL;
  video.load();
};

// 追加
  // サムネイルを選択して、
  // 1. 参照URLを`selectThumbURL`に格納
  // 2. 参照URLから画像ファイルを生成し、`setThumbFile`でファイルを親コンポーネントに渡す
  const selectedThumb = (url: string) => {
    //  参照URLを`selectThumbURL`に格納
    selectThumbURL.value = url
  // 参照URLから画像ファイルを生成し、`setThumbFile`でファイルを親コンポーネントに渡す
    fetch(url)
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const thumb = new File([blob], "thumb.jpeg");
        emits("update:thumbFile", thumb)
      });
  };

  watch(thumbnailURLs, () => {
    if (thumbnailURLs.value.length && thumbnailURLs.value[0] !== selectThumbURL.value) {
      selectedThumb(thumbnailURLs.value[0]);
    }
  })
</script>

<template>
  <div class="root">
    <div v-if="videoURL" class="full">
      <video class="video" controls :src="videoURL"></video>
      <h2 class="text-padding">サムネイル</h2>
      <v-row class="thumbnail-content">
        <v-col v-for="url in thumbnailURLs">
          <img :src="url" @click="selectedThumb(url)" :class="[{ 'selected-thumb': url === selectThumbURL }, 'thumbnail']" />
        </v-col>
      </v-row>
    </div>

    <input type="file" hidden ref="inputRef" @change="selectedFile" />
    <v-btn v-if="!videoURL" @click="handleClick" color="primary" variant="flat"
      >ファイルを選択</v-btn
    >
  </div>
</template>

<style lang="scss" scoped>
.video {
  width: 100%;
  aspect-ratio: 16 / 9;
}
.root {
  display: flex;
  min-height: 300px;
  justify-content: center;
  align-items: center;
}
.text-padding {
  padding-top: 20px;
  padding-bottom: 10px;
}
.thumbnail-content {
  padding-bottom: 30px;
}
.full {
  width: 100%;
}
.thumbnail {
  cursor: pointer;
}
.selected-thumb {
  border: 2px solid red;
}
</style>
