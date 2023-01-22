<script setup lang="ts">
import { watchEffect } from "vue";
import VideoCard from "@/components/VideoCard.vue";
import { useVideosQuery } from "@/utils/graphql/generated";
import { downloader } from "@/utils/Firebase/storage";

const { result, error } = useVideosQuery()

watchEffect(() => {
  if(error.value) {
    console.error(error.value);
  }
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="video in result?.videos" :key="video.id" cols="3">
        <router-link :to="{ name: 'watch.show', params: { id: video.id } }">
          <VideoCard
          :title="video.title"
          :owner="video.owner"
          :views="video.views"
          :created="new Date(video.created_at)"
          :fetcher="() => downloader(video.thumbnail_url)"
        />
      </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
