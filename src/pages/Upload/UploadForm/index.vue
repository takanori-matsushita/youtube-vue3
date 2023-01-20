<script setup lang="ts">
import { ref, reactive, watchEffect } from 'vue'
import { useAuth } from '@/stores/useAuth';
import { useRouter } from 'vue-router';
import { useVideoUpload } from '@/composables/videoUpload';

// UploadFormコンポーネントのプロップスとして、引数を型定義する
export type UploadFormProps = {
  videoFile: File | undefined;
  thumbFile: File | undefined;
};

const props = defineProps<UploadFormProps>()

const auth = useAuth()
const router = useRouter()

type State = {
  title: string
  description: string
}

const state: State = reactive({
  title: "",
  description: "",
})

const errorMessage = ref<Error>()

const { upload, loading, error: uploadError } = useVideoUpload();

const submit = () => {
  errorMessage.value = undefined

  if(!auth.user.id) {
    return errorMessage.value = new Error("ログインされていません。")
  }

  if(!props.videoFile || !props.thumbFile) {
    return errorMessage.value = new Error("ファイルを選択してください。")
  }

  if(!state.title) {
    return errorMessage.value = new Error("タイトルをしてください。")
  }

  upload({
    file: {
      video: props.videoFile,
      thumbnail: props.thumbFile,
    },
    title: state.title,
    description: state.description,
    ownerId: auth.user.id,
  }).then((data) => {
    // 動画のアップロードが成功すれば、`home`URLにリダイレクト
    if (data?.id) {
      router.push("/");
    }
  });
}

watchEffect(() => {
  errorMessage.value = uploadError.value
})
</script>

<template>
  <v-text-field label="タイトル" v-model="state.title"></v-text-field>
  <v-textarea label="説明" v-model="state.description"></v-textarea>
  <label v-if="errorMessage" class="d-block pb-10">
    <p class="text-red text-center">{{ errorMessage.message }}</p>
  </label>
  <div class="text-center">
    <v-btn @click="submit" :disabled="loading" color="primary">
      {{ loading ? 'アップロード中' : '動画をアップロード' }}
    </v-btn>
  </div>
</template>

<style scoped></style>
