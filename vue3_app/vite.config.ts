import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import px2rem from "postcss-px2rem"
const postcss = px2rem({
  remUnit: 16
})
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build' // 打包后⽂件包名称
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // 别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";' // 添加公共样式
      }
    },
    postcss: {
      plugins: [postcss]
    }
  },
  plugins: [vue()],
})
