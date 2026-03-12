import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Hero from '../components/Hero.vue'

describe('Componente Hero.vue 👑', () => {
  it('Debería renderizar el nombre ISABEL correctamente', () => {
    // Usamos "global.stubs" para ignorar el componente Aurora que usa WebGL
    const wrapper = mount(Hero, {
      global: {
        stubs: {
          Aurora: true // Esto reemplaza el fondo 3D por un div vacío en la prueba
        }
      }
    })
    
    expect(wrapper.text()).toContain('ISABEL')
  })

  it('Debería tener el botón de Descargar CV', () => {
    const wrapper = mount(Hero, {
      global: {
        stubs: {
          Aurora: true
        }
      }
    })
    const downloadBtn = wrapper.find('a[download]')
    
    expect(downloadBtn.exists()).toBe(true)
  })
})
