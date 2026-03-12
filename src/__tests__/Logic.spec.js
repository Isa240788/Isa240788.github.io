import { describe, it, expect } from 'vitest'

describe('Pruebas de Lógica del Sistema 🧠', () => {
  it('Verifica que el stack tecnológico esté completo', () => {
    const stack = ['Vue 3', 'Tailwind 4', 'Vitest', 'Cypress']
    
    expect(stack).toContain('Vue 3')
    expect(stack).toHaveLength(4)
  })

  it('El email de contacto es el correcto', () => {
    const email = 'isabel.guajardo2407@gmail.com'
    expect(email).toMatch(/@gmail.com$/)
  })
})