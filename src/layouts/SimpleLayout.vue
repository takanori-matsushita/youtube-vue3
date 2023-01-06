<template>
  <div class="root">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
}
</style>
