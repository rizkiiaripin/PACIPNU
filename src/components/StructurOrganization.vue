<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
<template>
  <section data-aos="fade-up">
    <div class="text-center my-6 mx-3 mt-10">
      <h1 class="text-3xl text-center font-bold text-slate-700 mb-2">
        Struktur Organisasi
      </h1>
      <p class="text-slate-600">
        Berikut adalah struktur organisasi dari PAC IPNU IPPNU
      </p>
    </div>

    <div
      class="grid relative justify-center my-5 mx-auto max-w-6xl grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        class="flex relative w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div class="absolute top-3 right-3 z-10 flex flex-col items-end">
          <!-- Trigger share menu -->
          <button
            @click="isOpen = !isOpen"
            class="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white shadow hover:bg-green-800 transition"
            title="Share"
          >
            <i class="fas fa-share-alt"></i>
          </button>

          <!-- Social Icons, muncul saat open -->
          <transition v-if="isOpen" name="fade-scale">
            <div class="mt-2 flex flex-col space-y-2">
              <a
                target="_blank"
                class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-800 shadow hover:shadow-md transition"
                title="Facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                target="_blank"
                class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-800 shadow hover:shadow-md transition"
                title="Twitter"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                target="_blank"
                class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-800 shadow hover:shadow-md transition"
                title="LinkedIn"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </transition>
        </div>

        <div
          class="h-100 overflow-hidden rounded-sm bg-blue-gray-500 bg-clip-border text-white"
        >
          <img
            src="/images/struktur-organisasi/ketua.webp"
            alt="makestar"
            class="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
        </div>

        <div
          class="absolute -bottom-1 p-3 flex flex-col justify-center items-center bg-white w-80 shadow-md"
        >
          <h5 class="font-semibold text-slate-800 text-lg">Aab Abdul manan</h5>
          <p class="text-md font-semibold text-slate-500 mb-1">Ketua IPNU</p>
          <p class="text-xs text-slate-400">Masa Khidmat : 2024 - 2025</p>
        </div>
      </div>
    </div>
  </section>
</template>
