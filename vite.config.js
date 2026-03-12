import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools' // <--- Agregado

export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(), 
    vueDevTools() // <--- Agregado
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/Portafolio/', 
  
  build: {
    minify: 'terser', // <--- Ahora sí podemos usar Terser
    terserOptions: {
      compress: {
        drop_console: true, // Esto limpia tus console.log automáticamente al subirlo
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/three') || id.includes('node_modules/ogl')) {
            return 'vendor-graphics'
          }
          if (id.includes('fortawesome')) {
            return 'vendor-icons'
          }
          if (id.includes('node_modules/vue')) {
            return 'vendor-vue'
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
