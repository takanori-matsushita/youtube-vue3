<script setup lang="ts">
import { ref, reactive } from "vue";
import VideoSelector from "./VideoSelector/index.vue";
import UploadForm from "./UploadForm/index.vue";

const dialog = ref(true);

interface State  {
  videoFile: File | null
  thumbFile: File | null
}

const state: State = reactive({
  videoFile: null,
  thumbFile: null,
})
</script>

<template>
  <v-btn color="primary" dark @click="dialog = true"> Open Dialog </v-btn>
  <v-dialog v-model="dialog" persistent max-width="1200" width="100%">
    <v-card>
      <div class="position-sticky top-0 white">
        <div class="d-flex justify-space-between align-center">
          <v-card-title> 動画のアップロード </v-card-title>
          <div class="px-3" @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </div>
        </div>
        <v-divider></v-divider>
      </div>
      <v-card-text>
        <v-row>
          <v-col>
            <VideoSelector v-model:video-file="state.videoFile" v-model:thumb-file="state.thumbFile" />
          </v-col>
          <v-divider vertical></v-divider>
          <v-col>
            <UploadForm v-model:video-file="state.videoFile" v-model:thumb-file="state.thumbFile" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.top-0 {
  top: 0;
}
.white {
  background-color: #fff;
}
</style>
