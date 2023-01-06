import { fireAuth } from "./config";
import { sendPasswordResetEmail } from "firebase/auth";
/**
 * パスワードリセット用のメールを送信する関数
 * @param email メールアドレス
 * @returns
 */
export const forgetPass = (email: string) =>
  sendPasswordResetEmail(fireAuth, email);