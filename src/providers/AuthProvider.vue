<script setup lang="ts">
import { watch, computed } from "vue"
import { useAuth } from '@/stores/useAuth'
import { useUserByIdLazyQuery } from '@/utils/graphql/generated'
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"

const auth = useAuth()
const { credential, authCredentialLoaded, user, accountLoaded } = storeToRefs(auth)

const variables = computed(() => {
    return {
      id: credential.value ?? ""
    }
  })

const {
    result: apolloResult,
    error: apolloError,
    loading: apolloLoading,
    load,
  } = useUserByIdLazyQuery(variables as unknown as { id: string })

watch([credential, authCredentialLoaded] ,async () => {
    // Authenticationのローディング終わっており
    if(authCredentialLoaded.value) {
      // credentialにIDが格納されており
      if(credential.value) {
        // Apollo Clientがローディング中で、ユーザー情報を未取得であれば
        if(!user.value.id) {
          accountLoaded.value = false
          load()
        }
      } else {
        if(user.value.id) {
          auth.setUserState()
          accountLoaded.value = true
        }
      }
    }
  })

  watch([authCredentialLoaded, apolloResult], () => {
    // onAuthStateChangedのロードが終了したタイミングで、
    // ユーザー情報が取れていれば、Recoilを更新し、
    // 取れていなければ、Recoilをundefinedにする
    if(authCredentialLoaded.value && !apolloLoading.value) {
      if(apolloResult?.value?.users_by_pk?.id) {
        auth.setUserState(apolloResult.value.users_by_pk)
      } else {
        if(user.value.id) {
          auth.setUserState()
        }
      }
      accountLoaded.value = true

    }
  })

  watch(apolloError, () => {
    // GraphQLからのエラーがあった場合は、
    // Recoilをudefinedで更新し、
    // ユーザーにログアウトさせる。
    if(apolloError.value?.message) {
      console.error(apolloError.value.message)
      auth.setUserState()
    }
  })

  const router = useRouter()

  router.beforeEach((to, from, next) => {
  const toMeta = to.meta

  if (!toMeta.requiredAuth) {
    next()
    return
  }

  if(accountLoaded.value) {
    if(!user.value.id) {
      next({ name: "login" })
    }
  }
  next()
})
</script>

<template>
  <slot></slot>  
</template>

<style scoped>

</style>