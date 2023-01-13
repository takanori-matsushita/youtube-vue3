import { ref, reactive, watch, computed } from "vue"
import { defineStore } from 'pinia'
import { Users } from "@/utils/graphql/generated"
import { useUserByIdLazyQuery } from '@/utils/graphql/generated'

type UserType =
| Pick<
  Users,
  | "id"
  | "name"
  | "email"
  | "profile_photo_url"
  | "created_at"
  | "updated_at"
  >

export type AuthCredentialType = string | undefined
export type AuthCredentialLoadedType = boolean;
export type AccountLoadedType = boolean;

export const useAuth = defineStore("auth", () => {
  const user = reactive<UserType>(initUserState())

  const credential = ref<AuthCredentialType>()
  const authCredentialLoaded = ref<AuthCredentialLoadedType>(false)
  const accountLoaded = ref<AccountLoadedType>(false)

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

  function initUserState() {
    return {
      id: "",
      name: "",
      email: "",
      profile_photo_url: "",
      created_at: "",
      updated_at: "",
    }
  }

  function setUserState(arg?: UserType) {
      user.id = arg?.id ? arg.id : ""
      user.name = arg?.name ? arg.name : ""
      user.email = arg?.email ? arg.email : ""
      user.profile_photo_url = arg?.profile_photo_url ? arg.profile_photo_url : ""
      user.created_at = arg?.created_at ? arg.created_at : ""
      user.updated_at = arg?.updated_at ? arg.updated_at : ""
  }

  watch([credential, authCredentialLoaded] ,async () => {
    // Authenticationのローディング終わっており
    if(authCredentialLoaded.value) {
      // credentialにIDが格納されており
      if(credential.value) {
        // Apollo Clientがローディング中で、ユーザー情報を未取得であれば
        if(!user.id) {
          accountLoaded.value = false
          load()
        }
      } else {
        if(user.id) {
          setUserState()
          accountLoaded.value = false
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
        setUserState(apolloResult.value.users_by_pk)
        accountLoaded.value = true
      } else {
        if(user.id) {
          setUserState()
          accountLoaded.value = false
        }
      }
    }
  })

  watch(apolloError, () => {
    // GraphQLからのエラーがあった場合は、
    // Recoilをudefinedで更新し、
    // ユーザーにログアウトさせる。
    if(apolloError.value?.message) {
      console.error(apolloError.value.message)
      setUserState()
    }
  })

  return { user, credential, authCredentialLoaded, accountLoaded, setUserState }
})