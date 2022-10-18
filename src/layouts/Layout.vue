<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script setup lang="ts">
import { ref, markRaw, watch } from "vue";
import { useRoute } from "vue-router";
import SimpleLayout from "@/layouts/SimpleLayout.vue";

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component =
        metaLayout && (await import(/* @vite-ignore */ `./${metaLayout}.vue`));
      layout.value = markRaw(component?.default || SimpleLayout);
    } catch (e) {
      layout.value = markRaw(SimpleLayout);
    }
  },
  { immediate: true }
);
</script>
