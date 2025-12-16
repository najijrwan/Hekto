import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from '@svgr/rollup'
import path from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
          '@layout': path.resolve(__dirname, './src/components/layout'),
          '@footer': path.resolve(__dirname, './src/components/layout/footer'),
          '@sections': path.resolve(__dirname, './src/components/sections'),
          '@ui': path.resolve(__dirname, './src/components/ui'),
            '@cards': path.resolve(__dirname, './src/components/ui/cards'),
            '@product': path.resolve(__dirname, './src/components/ui/product'),
        '@data': path.resolve(__dirname, './src/data'),
        '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
})
