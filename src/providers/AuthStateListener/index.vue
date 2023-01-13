<script setup lang="ts">
import { fireAuth } from "@/utils/Firebase/config"
import { useAuth } from "@/stores/useAuth"
import { onUnmounted } from "vue";

const auth = useAuth()

const subscribe = () => {
  const unsubscriber = fireAuth.onAuthStateChanged(async (credential) => {
    auth.credential = credential?.uid || undefined
    auth.authCredentialLoaded = true
  });
  return unsubscriber;
}

const unsubscribe = subscribe()

onUnmounted(() => {
  unsubscribe()
})
</script>

<template>
  <slot></slot>
</template>

<style scoped></style>
