<template>
  <footer class="relative bg-[#0a0f1d] pt-32 pb-12 px-6 border-t border-white/5" id="contacto">
    <!-- 🌌 LUZ NEÓN DE FONDO -->
    <div class="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-pink-500/10 to-transparent z-0"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <div class="grid lg:grid-cols-2 gap-20 mb-24">
        
        <!-- 📧 FORMULARIO DE CONTACTO (DaisyUI Style) -->
        <div data-aos="fade-right">
          <h3 class="text-4xl font-black italic tracking-tighter text-white uppercase mb-8 leading-none">
            ENVIAME UN <br /> <span class="text-pink-500 not-italic">MENSAJE</span>
          </h3>
          
          <form @submit.prevent="handleSend" class="space-y-4">
            <div class="grid md:grid-cols-2 gap-4">
              <!-- AGREGADO v-model y required -->
              <input 
                v-model="formData.user_name" 
                type="text" required placeholder="Tu Nombre" 
                class="input input-bordered w-full rounded-2xl bg-gray-900 border-white/10 focus:border-pink-500 text-white font-medium" 
              />
              <input 
                v-model="formData.user_email" 
                type="email" required placeholder="Tu Email" 
                class="input input-bordered w-full rounded-2xl bg-gray-900 border-white/10 focus:border-pink-500 text-white font-medium" 
              />
            </div>
            <textarea 
              v-model="formData.message" 
              required placeholder="¿En qué puedo ayudarte?" 
              class="textarea textarea-bordered w-full rounded-2xl bg-gray-900 border-white/10 focus:border-pink-500 text-white font-medium h-32"
            ></textarea>
            
            <!-- BOTÓN CON ESTADO DE CARGA -->
            <button 
              :disabled="isSending"
              class="btn bg-pink-600 hover:bg-pink-500 border-none text-white w-full rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-pink-500/20 disabled:bg-gray-800"
            >
              <span v-if="isSending" class="loading loading-spinner loading-xs"></span>
              {{ isSending ? 'Enviando...' : 'Enviar Propuesta ➜' }}
            </button>
          </form>

        </div>

        <!-- 🔗 REDES Y CANAL FORMAL -->
        <div class="flex flex-col justify-center items-center lg:items-end space-y-12" data-aos="fade-left">
          
          <!-- BOTÓN DE COPIADO DE CORREO -->
          <div class="flex flex-col items-center lg:items-end gap-3">
            <span class="text-[10px] font-black uppercase opacity-30 tracking-[0.4em] text-white">Canal Formal</span>
            <div 
              @click="copyEmail" 
              class="group flex items-center gap-4 bg-gray-900 border border-white/10 p-2 pl-6 rounded-2xl hover:border-pink-500/50 transition-all cursor-pointer relative overflow-hidden"
            >
              <span class="text-sm font-bold text-white group-hover:text-pink-400 transition-colors">
                isabel.guajardo2407@gmail.com
              </span>
              <div class="bg-pink-600 p-3 rounded-xl text-white group-hover:scale-110 transition-transform">
                <DocumentDuplicateIcon v-if="!copied" class="w-4 h-4" />
                <CheckIcon v-else class="w-4 h-4" />
              </div>
            </div>
          </div>

          <!-- ICONOS DE REDES SOCIALES -->
          <div class="flex flex-col items-center lg:items-end gap-3">
            <span class="text-[10px] font-black uppercase opacity-30 tracking-[0.4em] text-white">Social Connect</span>
            <div class="flex gap-6">
              <a href="https://www.linkedin.com/in/isabel-guajardo-g/" target="_blank" class="text-white hover:text-pink-500 transition-all hover:-translate-y-1">
                <FontAwesomeIcon :icon="['fab', 'linkedin']" class="text-3xl" />
              </a>
              <a href="https://github.com/Isa240788" target="_blank" class="text-white hover:text-pink-500 transition-all hover:-translate-y-1">
                <FontAwesomeIcon :icon="['fab', 'github']" class="text-3xl" />
              </a>
              <a href="https://www.youtube.com/@IsabelGuajardo-f1e" target="_blank" class="text-white hover:text-pink-500 transition-all hover:-translate-y-1">
                <FontAwesomeIcon :icon="['fab', 'youtube']" class="text-3xl" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- COPYRIGHT FINAL -->
      <div class="pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-[9px] font-black uppercase tracking-[0.5em] text-white/20">
          © 2026 Isabel Guajardo | Educator & Developer
        </p>
        <p class="text-[9px] font-black uppercase tracking-[0.2em] text-pink-500/40 italic">
          Built with Vue 3 & DaisyUI
        </p>
      </div>

      <!-- 🍞 TOAST DE ÉXITO (DaisyUI) Movido a la Derecha -->
      <div class="toast toast-top toast-end z-100 mt-24 mr-6 transition-all duration-500">
        <transition name="fade">
          <div v-if="showSuccess" class="alert bg-pink-600 border-none shadow-2xl rounded-3xl flex-row gap-4 px-8 py-5 min-w-[320px]">
            <div class="flex items-center justify-center bg-white/20 p-2 rounded-full h-10 w-10 shrink-0">
              <span class="text-xl">💖</span>
            </div>
            <div class="flex flex-col text-left">
                <span class="text-[10px] font-black uppercase text-white/60 tracking-widest leading-none mb-1">
                  ¡Mensaje Recibido!
                </span>
                <span class="text-sm font-bold text-white leading-tight">
                  Pronto nos pondremos en contacto. ✨
                </span>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { DocumentDuplicateIcon, CheckIcon } from '@heroicons/vue/24/solid'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser';

library.add(faLinkedin, faGithub, faYoutube)

// --- ESTADOS ---
const copied = ref(false)
const showSuccess = ref(false)
const isSending = ref(false) // Para deshabilitar el botón mientras envía
const email = 'isabel.guajardo2407@gmail.com'

// --- DATOS DEL FORMULARIO ---
const formData = ref({
  user_name: '',
  user_email: '',
  message: ''
})

// --- FUNCIONES ---
const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

const handleSend = async () => {
  isSending.value = true
  
  try {
    // Usamos las variables del .env que creamos
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formData.value,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // Si sale bien, mostramos el Toast
    showSuccess.value = true
    
    // Limpiamos los campos
    formData.value = { user_name: '', user_email: '', message: '' };
    
    setTimeout(() => {
      showSuccess.value = false
    }, 4000)

  } catch (error) {
    console.error('Error de EmailJS:', error);
    alert('¡Rayos! No se pudo enviar. Revisa la consola para ver qué pasó.');
  } finally {
    isSending.value = false
  }
}
</script>
