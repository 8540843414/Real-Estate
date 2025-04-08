import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  

export default defineConfig({
  base: '/Real-Estate/', // 👈 Add this line
  plugins: [
    tailwindcss(),
    react()
  ],
})
