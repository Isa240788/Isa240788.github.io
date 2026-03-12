import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from 'eslint-config-prettier'
import globals from 'globals'

export default [
  // 1. Archivos a vigilar y carpetas a ignorar
  {
    files: ['**/*.{js,vue}'],
    ignores: ['**/dist/**', '**/node_modules/**', '**/public/**'],
  },
  
  // 2. Configuración de lenguaje (Browser + ES2021)
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 3. Reglas recomendadas de JS y Vue
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // 4. Tus reglas personalizadas (¡La que el profe desactivó!)
  {
    rules: {
      'vue/multi-word-component-names': 'off', // Permite nombres como Hero.vue o Navbar.vue
      'no-unused-vars': 'warn', // Te avisa si creas una variable y no la usas
      'no-console': 'off', // Te deja usar console.log en desarrollo
    },
  },

  // 5. Ignorar conflictos con Prettier
  skipFormatting,
]
