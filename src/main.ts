import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import {  ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
// import { createApolloProvider } from '@vue/apollo-option'
import { DefaultApolloClient } from "@vue/apollo-composable"
import { setContext } from "@apollo/client/link/context"

// GraphQl APIのエンドポイントを指定する
const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_END_POINT_ORIGIN,
  // headers: {
  //   // 本来であれば、シークレットキーを直接Request Headersに乗せてリクエストを行うことはご法度です。
  //   // 今回は例外的に手っ取り早くApolloを使うために直接指定しています。
  //   "x-hasura-admin-secret": import.meta.env.VITE_HASURA_SECRET_KEY,
  // }
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

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  // link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app')
