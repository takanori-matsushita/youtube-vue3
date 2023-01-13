<template>
  <v-app-bar :elevation="0" class="between">
    <div class="flex between w-100 items-center px-1">
      <div class="flex">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <div class="logo">
          <router-link to="/">
            <Logo />
          </router-link>
        </div>
      </div>
      <SearchBar />
      <div class="flex">
        <template v-if="user.id">
        <v-btn icon>
          <v-icon icon="mdi-video-plus"></v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon icon="mdi-account-circle" color="" size="x-large"></v-icon>
        </v-btn>
        </template>
        <v-btn v-else color="primary" variant="outlined" tag="router-link" to="/login">ログイン</v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import SearchBar from "@/templates/DashboardHeader/SearchBar/index.vue";
import { useAuth } from "@/stores/useAuth";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useAuth())
</script>

<style scoped>
.logo {
  width: 100px;
}
.w-100 {
  width: 100%;
}
.between {
  justify-content: space-between;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.logo {
  width: 100px;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.profile-icon {
  padding: 0;
  width: 44px;
  height: 44px;
  margin-left: 10px;
}
</style>
