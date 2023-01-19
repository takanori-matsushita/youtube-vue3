<script setup lang="ts">
interface Props {
  videoFile: File | null
  thumbFile: File | null
}

const props = defineProps<Props>()

interface Emits {
  (e: "update:videoFile", value: File): void
  (e: "update:thumbFile", value: File): void
}
</script>

<template>
  <v-text-field label="タイトル"></v-text-field>
  <v-textarea label="説明"></v-textarea>
  <div class="text-center">
    <v-btn color="primary">動画をアップロード</v-btn>
  </div>
</template>

<style scoped></style>
