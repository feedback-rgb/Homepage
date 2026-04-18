import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // app-ads.txt, robots.txt, etc. live in public/ and are served at / during dev
  // and copied to dist root on build (Vite default: https://vitejs.dev/guide/assets.html#the-public-directory)
  publicDir: 'public',
})
