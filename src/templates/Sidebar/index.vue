<template>
  <v-navigation-drawer width="240">
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="ホーム"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-fire"
        title="トレンド"
        value="trend"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-youtube-subscription"
        title="登録チャンネル"
        value="subscription"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(true);
const items = [
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
];
</script>

<style lang="scss" scoped></style>
