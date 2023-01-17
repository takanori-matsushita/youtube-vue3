import { ref, reactive } from "vue"
import { defineStore } from 'pinia'
import { Users } from "@/utils/graphql/generated"

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

  return { user, credential, authCredentialLoaded, accountLoaded, setUserState }
},
{
  persist: true,
}
)