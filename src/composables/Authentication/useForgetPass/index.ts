import { ref } from "vue"
import { SetErrorFn, useAuthHelper } from "@/composables/Authentication/useAuthHelper"
import { forgetPass } from "@/utils/Firebase/forgetPass"

export type FireForgetPassType = {
  email: string
}

export const useForgetPass = (props: FireForgetPassType) => {
  const sendSuccess = ref<boolean>(false)

  const formValidation = (setError: SetErrorFn) => {
    // Emailフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!props.email) {
      setError("email", "メールアドレスを入力してください。");
      return true;
    }

    // バリデーションが有効か無効化を返す
    return false;
  };

  const sendEmail = async () => {
    sendSuccess.value = false
    await forgetPass(props.email || "")
    sendSuccess.value = true
  }

  const { authExecute, error, loading } = useAuthHelper(
    sendEmail,
    formValidation,
  )

  return {
    loading,
    error,
    sendEmail: authExecute,
    sendSuccess
  }
}