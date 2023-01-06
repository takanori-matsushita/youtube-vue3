import { fireAuth } from "./config";
import { createUserWithEmailAndPassword } from "firebase/auth";
// サインアップに必要な引数の型を定義しています。
// signup()関数では、引数にFireSignupTypeの型、つまり文字型の`email`と`password`が必要になります。
export type FireSignupType = {
  email: string;
  password: string;
};

/**
 * サインアップ処理の実態です。
 * firebaseのサインアップ処理をラップしているだけです。
 * @param {email, password} ログインに必要な値
 * @returns Promise<firebase.auth.UserCredential>
 */
export const signup = ({ email, password }: FireSignupType) =>
  createUserWithEmailAndPassword(fireAuth, email, password);