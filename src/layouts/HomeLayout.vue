<template>
  <DashboardHeader />
  <div class="root">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from "@/templates/DashboardHeader/index.vue";
import Sidebar from "@/templates/Sidebar/index.vue";
</script>

<style scoped lang="scss">
$SIDEBAR_WIDTH: 240px;
$APP_BAR: 64px;

.root {
  display: flex;
  min-height: 100%;
}

.sidebar {
  padding-top: $APP_BAR;
  width: 100%;
  max-width: $SIDEBAR_WIDTH;
}
.main {
  padding-top: $APP_BAR + 30px;
  flex-grow: 1;
}
</style>
