import {  ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from "@apollo/client/link/context"

// GraphQl APIのエンドポイントを指定する
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_END_POINT_ORIGIN,
});

const authLink = setContext(async () => {
  return {
    headers: {
      // 本来であれば、シークレットキーを直接Request Headersに乗せてリクエストを行うことはご法度です。
      // 今回は例外的に手っ取り早くApolloを使うために直接指定しています。
      "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET_KEY,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export { DefaultApolloClient } from "@vue/apollo-composable"