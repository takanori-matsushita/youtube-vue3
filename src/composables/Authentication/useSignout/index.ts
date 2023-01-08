import { useRouter } from "vue-router"
import { signout as fireSignout } from "@/utils/Firebase/logout"

export const useSignout = () => {
  const router = useRouter()

  const signout = async () => {
    await fireSignout()
    router.push("/")
  }

  return {
    signout
  }
}