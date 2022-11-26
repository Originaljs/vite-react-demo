import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { resolve } from 'node:path/posix'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base:'./',
  server:{
       //服务器主机名
       host: "localhost",
       //端口号
       port: 3000,
       cors: true, // 默认启用并允许任何源
       open: true, // 在服务器启动时自动在浏览器中打开应用程序
       proxy: {
         '/api': {
           target: 'http://192.168.99.223:3000',   //代理接口
           changeOrigin: true,
           rewrite: (path) => path.replace(/^\/api/, '')
         }
       }
  }
})
