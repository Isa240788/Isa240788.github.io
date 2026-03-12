import { defineConfig } from 'vitest/config'
// @ts-ignore
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
  plugins: [vue()],
  test: {
    // 🌐 Simula un navegador
    environment: 'jsdom',
    
    // ✅ Permite usar 'describe', 'it' y 'expect' globalmente
    globals: true,
    
    // 🚫 Carpetas que Vitest debe ignorar
    exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**'],
    
    // 📍 Define la raíz del proyecto usando path
    root: path.resolve(__dirname, './'),
  },
  resolve: {
    alias: {
      // 📂 Alias @ usando path.resolve (Más seguro y sin errores)
      '@': path.resolve(__dirname, './src'),
    },
  },
})
