
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
		tsconfigPaths()
	],
	resolve: {
			alias: {
				'@/': `${__dirname}/src/`,
				'~/': `${__dirname}/public/`
			},
		},
})
