<script setup lang="ts">
import Logo from "@/components/Logo.vue";
</script>

<template>
  <div class="root">
    <v-card elevation="3" class="padding">
      <v-card-title tag="h1" class="margin">パスワードの再発行</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="メールアドレス" class="margin"></v-text-field>
          <div class="margin">
            <v-btn color="primary">再発行</v-btn>
          </div>
          <div>
            <v-btn variant="text" color="primary"> ログインはこちら </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.root {
  width: 95%;
  max-width: 550px;
}
.margin {
  margin-bottom: 40px;
}
.padding {
  padding: 50px 70px;
}
</style>
