import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/feedback/',
  envPrefix: 'APP_',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { allowedHosts: true },
  // NOTE: This silences bootstrap deprecation warnings
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'color-functions', 'global-builtin', 'if-function'],
      },
    },
  },
})
