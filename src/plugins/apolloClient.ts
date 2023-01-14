import {  ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from "@apollo/client/link/context"
import { fireAuth } from '@/utils/Firebase/config'

// GraphQl APIのエンドポイントを指定する
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_END_POINT_ORIGIN,
});

const authLink = setContext(async () => {
  const token = await fireAuth.currentUser?.getIdToken(true);
  // Bearerトークンでトークンを送信する
  // headersのプロパティは`Authorization`
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return { headers };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

export { DefaultApolloClient } from "@vue/apollo-composable"
export { provideApolloClient } from "@vue/apollo-composable"
