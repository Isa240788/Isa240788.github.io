<!-- En tu Hero.vue -->
<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-[#0a0f1d]" id="inicio">
    
    <!-- 🌌 AURORA DE FONDO -->
    <div class="absolute inset-0 z-0">
      <Aurora 
        :colorStops="['#f43f5e', '#8b5cf6', '#f43f5e']" 
        :amplitude="1.0"
        :speed="0.5"
        :intensity="0.9"
      />
    </div>

    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 relative z-10 w-full pt-32 lg:pt-0">
      
      <!-- 📝 COLUMNA IZQUIERDA: TEXTO -->
      <div data-aos="fade-right" class="order-2 lg:order-1 flex flex-col justify-center">
        <h2 class="text-white font-black text-2xl md:text-4xl tracking-tighter uppercase italic opacity-90">
            HOLA, SOY
        </h2>
        <h1 class="font-black text-6xl md:text-8xl lg:text-9xl leading-none tracking-tighter uppercase italic drop-shadow-[0_0_15px_rgba(244,63,94,0.4)]">
          <span class="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-rose-500 to-pink-300 not-italic animate-pulse">
              ISABEL
          </span>
        </h1>

        <p class="text-white text-xl font-medium italic opacity-60 mt-6 max-w-md leading-relaxed">
          "Desarrolladora Front-End en formación, especializada en interfaces modernas y optimizadas."
        </p>
        
        <!-- 🔘 BOTONES -->
        <div class="flex flex-wrap items-center gap-4 mt-12">
            <a href="#contacto" class="btn btn-primary btn-md md:btn-lg rounded-3xl px-8 font-black uppercase text-[10px] tracking-[0.2em] border-none shadow-lg hover:scale-105 transition-all">
                Contáctame 📧
            </a>

            <a 
                href="/cv-isabel-guajardo-frontend.pdf" 
                download="/cv-isabel-guajardo-frontend.pdf" 
                class="btn btn-outline btn-md rounded-3xl px-6 font-black uppercase text-[10px] tracking-[0.2em] border-pink-500/50 text-pink-400 hover:bg-pink-500 hover:text-white transition-all group"
            >
                <ArrowDownTrayIcon class="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Descargar CV
            </a>

            <a href="#proyectos" class="text-white/40 hover:text-white text-[9px] font-black uppercase tracking-[0.3em] ml-2 transition-all">
                Proyectos <span class="ml-2">➜</span>
            </a>
        </div>
      </div>

      <!-- 👤 COLUMNA DERECHA: FOTO -->
      <div class="flex justify-center lg:justify-end items-center order-1 lg:order-2" data-aos="zoom-in">
        <div class="relative group">
            <!-- Brillo de fondo -->
            <div class="absolute -inset-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <div class="avatar">
                <div class="w-64 md:w-80 rounded-full ring ring-pink-500 ring-offset-base-100 ring-offset-4 shadow-2xl overflow-hidden">
                    <img 
                      src="../assets/isa.jpg" 
                      alt="Isabel Guajardo" 
                      class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                    />
                </div>
            </div>
            
            <div class="absolute bottom-6 right-6 badge badge-primary p-3 border-none shadow-lg animate-pulse">
                <span class="text-[8px] font-black uppercase tracking-widest text-white">Online</span>
            </div>
        </div>
      </div>

    </div>
  </section>
</template>



<script setup>
import Aurora from './Aurora.vue'; // ✅ Asegúrate que la ruta sea correcta

// Usamos los iconos de 24/solid para que se vean más potentes
import { ArrowDownTrayIcon } from '@heroicons/vue/24/solid';
</script>
