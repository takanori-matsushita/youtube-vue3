<script setup lang="ts">
import { reactive } from "vue";
import Logo from "@/components/Logo.vue";
import { FireForgetPassType, useForgetPass } from "@/composables/Authentication/useForgetPass";

const forgetPassProps = reactive<FireForgetPassType>({
  email: ""
})

const { error, loading, sendEmail, sendSuccess } = useForgetPass(forgetPassProps)
</script>

<template>
  <div class="root">
    <v-card elevation="3" class="padding">
      <v-card-title tag="h1" class="margin">パスワードの再発行</v-card-title>
      <v-card-text>
        <p v-if="error.has('main')" class="margin text-red">{{ error.get("main") }}</p>
        <v-form @submit.prevent="sendEmail">
          <v-text-field
            variant="underlined"
            label="メールアドレス"
            class="margin"
            v-model="forgetPassProps.email"
            :error="error.has('email')"
            :errorMessages="error.has('email') ? error.get('email') : ''"
          ></v-text-field>
          <p v-if="sendSuccess" class="margin text-green">
            ✔︎メールの送信が完了しました。
          </p>
          <div class="margin">
            <v-btn color="primary" type="submit" :disabled="loading">
              {{ loading ? "メールを送信中" : "再発行メールを送信" }}
            </v-btn>
          </div>
          <div>
            <v-btn
              variant="text"
              color="primary"
              tag="router-link"
              :to="{name: 'login'}"
            >ログインはこちら</v-btn>
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
