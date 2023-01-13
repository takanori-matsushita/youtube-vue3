<script setup lang="ts">
import DashboardHeader from "@/templates/DashboardHeader/index.vue";
</script>

<template>
  <div class="root">
    <DashboardHeader />
  </div>
  <div class="main">
    <slot />
  </div>
</template>

<style scoped lang="scss">
$APP_BAR: 64px;
.main {
  padding-top: $APP_BAR;
}
</style>
