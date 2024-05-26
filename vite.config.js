import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  appType: 'mpa', // disable history fallback
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        lost: resolve(__dirname, 'lost/index.html')
        },
    },
  },
})