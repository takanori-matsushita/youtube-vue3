import { useRouter } from "vue-router"
import { FireSignupType } from "@/utils/Firebase/signup"
import { login as fireLogin } from "@/utils/Firebase/login"
import { SetErrorFn, useAuthHelper } from "@/composables/Authentication/useAuthHelper"

export const useLogin = (props: FireSignupType) => {

  const router = useRouter()

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;

    // Emailフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!props.email) {
      setError("email", "メールアドレスを入力してください。");
      invalidValidation = true;
    }

    // Passwordフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!props.password) {
      setError("password", "パスワードを入力してください。");
      invalidValidation = true;
    }

    // バリデーションが有効か無効化を返す
    return invalidValidation;
  };

  // 実際のサインアップのロジック
  const login = async () => {
    // Firebaseのサインアップ処理を実行
    const { user } = await fireLogin({
      email: props.email || "",
      password: props.password || "",
    });

    if (!user?.uid) {
      throw new Error("ログインに失敗しました。");
    }

    router.push("/")
  };

  const { authExecute, error, loading } = useAuthHelper(
    login,
    formValidation,
  );

  return {
    login: authExecute,
    error,
    loading,
  };
}