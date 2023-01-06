<script setup lang="ts">
import VideoHorizontalCard from "@/components/VideoHorizontalCard.vue";
import VideoPlayerCard from "@/pages/Watch/VideoPlayerCard/index.vue";
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <VideoPlayerCard />
      </v-col>
      <v-col cols="4">
        <div class="mb-3">
          <VideoHorizontalCard />
        </div>
        <div class="mb-3">
          <VideoHorizontalCard />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
