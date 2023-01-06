<script setup lang="ts">
import Logo from "@/components/Logo.vue";
</script>

<template>
  <div class="root">
    <v-card elevation="3" class="padding">
      <div class="logo">
        <Logo />
      </div>
      <v-card-title tag="h1" class="margin">ログイン</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="メールアドレス" class="margin"></v-text-field>
          <v-text-field
            label="パスワード"
            type="password"
            class="margin"
          ></v-text-field>
          <div class="margin">
            <v-btn color="primary">ログイン</v-btn>
          </div>
          <div>
            <v-btn variant="text" color="primary">
              アカウント作成はこちら
            </v-btn>
          </div>
          <div>
            <v-btn variant="text" color="primary">
              パスワードを忘れた場合はこちら
            </v-btn>
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
.logo {
  width: 80px;
  margin: 40px 16px;
}
</style>
