<template>
  <v-form @submit.prevent="onSubmit" class="search">
    <v-text-field
      :loading="loading"
      density="compact"
      variant="solo"
      placeholder="検索"
      append-inner-icon="mdi-magnify"
      hide-details
      full-width
    ></v-text-field>
  </v-form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);
const onSubmit = () => {
  alert("submit!");
};
</script>

<style scoped>
.search {
  width: 100%;
  max-width: 700px;
}
</style>
