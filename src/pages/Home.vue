<script setup lang="ts">
import VideoCard from "@/components/VideoCard.vue";
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 5" :key="i" cols="3">
        <VideoCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>
