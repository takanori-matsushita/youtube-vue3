import { firestore as db, fireAuth } from "@/utils/Firebase/config";
import { collection, doc, onSnapshot } from "firebase/firestore"

export const checkAuthToken = (userId: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // `userId`のドキュメントをリッスンします。
    // onSnapshotでリッスンすると、返り値としてリッスンをリセットする関数が返される。
    // unsubscribeを実行することで、ドキュメントのリッスンを取りやめます。
    // onSnapshotでドキュメントの変更をリッスンします。
    const unsubscribe = onSnapshot(
      doc(db, "users", userId),
      // データの中身が変更されたことを検出するためには、`includeMetadataChanges`オプションを有効にします。
      { includeMetadataChanges: true },
      async (doc) => {
      if(!doc.exists) return
      // トークンを取得
      const idToken = await fireAuth.currentUser?.getIdTokenResult(true)
      // トークンがあり、Hasuraカスタムクレームが追加されているか
      if(idToken?.token && idToken?.claims["https://hasura.io/jwt/claims"]) {
        // 追加されていれば、リッスンをしセットし、トークンを返します。
        unsubscribe()
        resolve(idToken?.token)
      } else {
        reject
      }
    })
  })
}