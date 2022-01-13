import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/books/v1/volumes': {
        target: 'https://www.googleapis.com',
        changeOrigin: true
      }
    }
  }
})
