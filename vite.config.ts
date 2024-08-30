import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //自动引入
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts'
      // dts: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
