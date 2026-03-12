// ✅ TU ARCHIVO DEBE EMPEZAR ASÍ (Limpio de imports):
describe('Prueba del Robot 🤖', () => {
  it('Debería ver el nombre ISABEL', () => {
    cy.visit('/')
    cy.contains('ISABEL').should('be.visible')
  })
})
  
it('Paso 4: El Robot envía un mensaje de prueba 💌', () => {
    cy.visit('/')
    
    // 1. Navega hasta el formulario (el id del footer que pusimos)
    cy.get('a[href="#contacto"]').click()
    
    // 2. Rellena los campos usando los v-model que conectamos
    // (Asegúrate de que tus inputs tengan placeholder o usa clases)
    cy.get('input[placeholder="Tu Nombre"]').type('Robot de Cypress 🤖')
    cy.get('input[placeholder="Tu Email"]').type('robot@test.com')
    cy.get('textarea[placeholder="¿En qué puedo ayudarte?"]').type('Hola Isabel, tu portafolio es de otro planeta. ¡Aprobada con 7.0! 🚀')

    // 3. ¡Haz clic en el botón de enviar!
    cy.get('button').contains('Enviar Propuesta').click()

    // 4. Buscamos el elemento por su clase de DaisyUI 'alert' 
    // en lugar de solo por el texto, ¡esto es mucho más seguro!
    cy.get('.alert', { timeout: 15000 }) // Le damos 15 segundos por si acaso
      .should('be.visible')
      .and('contain', 'Enviado') // Buscamos solo una palabra clave sin signos

    // 5. Opcional: Verifica que el botón se bloquee mientras envía
    cy.get('button').should('be.disabled')
  })
