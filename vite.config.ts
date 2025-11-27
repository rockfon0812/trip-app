import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 設定 base 為 './' 讓資源路徑變為相對路徑，解決 GitHub Pages 子目錄問題
  base: './',
})