<script setup>
import Navbar from "../components/Navbar.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <Navbar />
  <div>
    <div
      class="h-[30vh] w-full relative shadow-md flex items-center justify-center"
    >
      <div>
        <div>
          
          <div class="absolute inset-0 bg-gray-900" />
          <img
            src="/images/logos/IPNU.webp"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          >
            <h1
              class="text-white text-4xl font-semibold z-10 text-center"
              data-aos="fade-right"
            >
              Tentang
            </h1>
            <div class="flex gap-2 items-center  justify-center z-10">
              <a href="/" class="text-blue-400">Beranda</a>
              <span class="text-white text-lg">></span>
              <a  class="text-white">Tentang</a>
            </div>
            <!-- <h4
              class="text-white text-base sm:text-lg font-semibold z-10 opacity-0 translate-x-full animate-[slideInRight_0.5s_ease-out_0.2s_forwards] text-center"
            >
            </h4> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <About />
  <Footer />
</template>

<style scoped></style>
