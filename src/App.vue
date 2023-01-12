<template>
  <AuthStateListener>
    <Layout />
  </AuthStateListener>
</template>

<script setup lang="ts">
import AuthStateListener from "@/providers/AuthStateListener/index.vue"
import Layout from "@/layouts/Layout.vue"
</script>

<style>
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}
#root {
  width: 100%;
  height: 100%;
}
img {
  display: block;
  max-width: 100%;
}
</style>
