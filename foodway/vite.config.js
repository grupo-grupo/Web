import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://10.0.0.243:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/nifi': {
        target: 'http://54.90.124.165:80',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nifi/, ''),
      },
    },
  },
  plugins: [react()],
  cors: true,
})
