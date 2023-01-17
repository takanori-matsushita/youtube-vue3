import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { DefaultApolloClient, apolloClient } from '@/plugins/apolloClient'
import { createPinia } from 'pinia'
import { createPersistedState } from "pinia-plugin-persistedstate"
loadFonts()

const pinia = createPinia()
pinia.use(createPersistedState())

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app')
