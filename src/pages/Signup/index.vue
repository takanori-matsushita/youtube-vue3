<script setup lang="ts">
import { reactive } from "vue";
import Logo from "@/components/Logo.vue";
import { useSignup, SignupPropsType } from "@/composables/Authentication/useSignup";

const signupProps = reactive<SignupPropsType>({
  name: "",
  email: "",
  password: "",
})

const { error, loading, signup } = useSignup(signupProps);
</script>

<template>
  <div class="root">
    <v-card elevation="3" class="padding">
      <div class="logo">
        <Logo />
      </div>
      <v-card-title tag="h1" class="margin">新規アカウント登録</v-card-title>
      <v-card-text>
        <p v-if="error.has('main')" class="margin text-red">{{ error.get("main") }}</p>
        <v-form @submit.prevent="signup">
          <v-text-field
            variant="underlined"
            label="名前"
            class="margin"
            v-model="signupProps.name"
            :error="error.has('name')"
            :errorMessages="error.has('name') ? error.get('name') : ''"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            label="メールアドレス"
            class="margin"
            v-model="signupProps.email"
            :error="error.has('email')"
            :errorMessages="error.has('email') ? error.get('email') : ''"
          ></v-text-field>
          <v-text-field
            variant="underlined"
            label="パスワード"
            type="password"
            class="margin"
            v-model="signupProps.password"
            :error="error.has('password')"
            :errorMessages="error.has('password') ? error.get('password') : ''"
          ></v-text-field>
          <div class="margin">
            <v-btn color="primary" type="submit" :disabled="loading">
              {{ loading ? "アカウント作成中" : "新規作成" }}
            </v-btn>
          </div>
          <div>
            <v-btn
              tag="router-link"
              :to="{name: 'login'}"
              variant="text" 
              color="primary"
            >
              ログインはこちら
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
