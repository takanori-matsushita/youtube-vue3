import { watch } from "vue"
import { useRouter } from "vue-router"
import { FireSignupType, signup as fireSignup } from "@/utils/Firebase/signup"
import { useInsertUserMutation } from "@/utils/graphql/generated"
import { SetErrorFn, useAuthHelper } from "@/composables/Authentication/useAuthHelper"
import { provideApolloClient, apolloClient } from "@/plugins/apolloClient"
import { useAuth } from '@/stores/useAuth'
import { checkAuthToken } from "./checkAuthToken"

provideApolloClient(apolloClient)

export type SignupPropsType = {
  name: string
} & FireSignupType

export const useSignup = (props: SignupPropsType) => {

  const router = useRouter()
  const { setUserState } = useAuth()

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false;

    // Nameフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!props.name) {
      setError("name", "名前が入力されていません。");
      invalidValidation = true;
    }

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
  const signup = async () => {
    // Firebaseのサインアップ処理を実行
    const { user } = await fireSignup({
      email: props.email || "",
      password: props.password || "",
    });

    if (!user?.uid) {
      throw new Error("ユーザーの登録に失敗しました。");
    }

    // アカウントにトークンが設定されるまで待機
    await checkAuthToken(user.uid);

    // Hasuraにuserを作成する
    const { mutate, error: apolloError } = useInsertUserMutation({
      variables: {
        id: user.uid,
        name: props.name,
        email: props.email,
      }
    })

    const apolloResponse = await mutate()

    if (apolloResponse?.data?.insert_users_one?.id) {
      // GraphQLでデータが作成された後に確実にデータを格納する
      setUserState(apolloResponse.data?.insert_users_one)
    }

    if (!apolloError.value) {
      // `/`へリダイレクト
      router.push("/")
    } else {
      throw new Error("ユーザーの登録に失敗しました。");
    }

    watch(apolloError, () => {
      setErrorHandler("main", apolloError.value)
    })
  };

  const { authExecute, error, setErrorHandler, loading } = useAuthHelper(
    signup,
    formValidation
  );

  return {
    signup: authExecute,
    error,
    loading,
  };
}