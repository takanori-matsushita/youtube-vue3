<template>
  <v-navigation-drawer width="240" floating>
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="ホーム"
        value="home"
        tag="router-link"
        to="/"
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

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
