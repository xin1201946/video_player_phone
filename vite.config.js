import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({

  base:'./',
  server:{
    open:true,
    host:"0.0.0.0",
  },
  plugins: [
      react(),
    createHtmlPlugin({
      minify: false, // 是否压缩index.html文件，这里选择不压缩
      pages: [
        {
          template: 'index.html',
          filename: 'index.html',
          injectOptions: {
            data: {
              buildTime: new Date().toLocaleString() // 这里就是记录的当前打包的时间。前面的键位名称‘buildTime’需要个index.html文件中的相对应
            }
          }
        }
      ]
    })
  ],
})
