import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    // 🎯 ESTA LÍNEA ES LA CLAVE: Dile que ignore los node_modules
    excludeSpecPattern: ['**/node_modules/**', '**/dist/**'], 
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
