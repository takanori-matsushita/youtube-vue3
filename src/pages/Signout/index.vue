<script setup lang="ts">
import { useSignout } from '@/composables/Authentication/useSignout'

const { signout } = useSignout()
signout()
</script>

<template>
  <v-card elevation="0" class="text-center">
    <v-progress-circular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
      class="mb-10"
    ></v-progress-circular>
    <p class="text-h6">ログアウト中</p>
  </v-card>
</template>

<style scoped>

</style>