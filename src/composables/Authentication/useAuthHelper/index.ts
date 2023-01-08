import { ref } from "vue"

export type ErrorState = "main" | "name" | "email" | "password";

export type SetErrorFn = (name: ErrorState, message: string) => void;

/**
 * useAuthHelper()をするときに、呼び出し元からそれぞれの処理の実態を注入する
 *
 * @param executeProcess 実際に認証処理の実態を外部から追加する
 * @param formValidation バリデーションチェックの実態を外部から追加する
 * @returns
 */
export const useAuthHelper = (
  executeProcess: () => Promise<void>,
  formValidation: (setError: SetErrorFn) => boolean
) => {
  // 複数のエラーを同時に管理できるようにするためのstate
  // Mapは { key : value }の形でオブジェクトを管理できるJavascriptのデータ構造
  // ただのObjectと違い、便利なメソッドが用意されている。
  const error = ref<Map<ErrorState, string>>(new Map())

  // ローディング処理も合わせて共通化
  const loading = ref<boolean>(false)

  const setErrorHandler: SetErrorFn = (name, message) => {
    error.value = error.value.set(name, message)
  };

  const authExecute = async () => {
    // 認証を実行したら、一度エラー文をリセットする
    // これをしないと不要なエラーメッセージが画面に表示されたままになってしまう。
    error.value = new Map()

    // バリデーションの確認を行う
    const invalidValidation = formValidation(setErrorHandler);

    // バリデーションが問題あれば処理を中断
    if (invalidValidation) return;

    // 処理が開始したらローディング中
    loading.value = true

    try {
      // 認証ロジックを実行
      // 成功すれば、リダイレクト処理（この処理はここでは書いてありません。）
      await executeProcess();
    } catch (error : any) {
      // エラーがあれば、エラーをセットして処理を中断
      let message = ""
      switch (error.code) {
        case "auth/invalid-email":
          message = "メールアドレスの形式が正しくありません。"
          break;
        case "auth/user-disabled":
          message = "無効なユーザーです。"
          break;
        case "auth/user-not-found":
        case "auth/wrong-password":
          message = "メールアドレスもしくはパスワードが一致しません。"
          break;
        case "auth/too-many-requests":
          message = "規定の認証上限の回数をオーバーしました。"
          break;
        case "auth/weak-password":
          message = "パスワードは6文字以上に設定してください。"
          break;
        default:
          console.error(error.code)
          message = "サーバーエラーが発生しました。時間をおいて再度お試しください。"
          break;
      }
      setErrorHandler("main", message);
    } finally {
      // 処理が終了したら、ローディングはfalse
      loading.value = false
    }
  };

  return {
    authExecute,
    loading,
    error,
    setErrorHandler
  };
};