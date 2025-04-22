<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scroll = ref(false);

const handleScroll = () => {
  scroll.value = window.scrollY > 10;
};
const isMobileMenuOpen = ref(false);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="md:hidden w-full transition-all duration-200 md:py-auto flex flex-col">
    <div
      :class="[
        'container mx-auto flex items-center backdrop-blur-md bg-green-800/50 justify-between px-5 py-4 z-5 text-slate-100',
        scroll
          ? 'fixed    '
          : 'fixed top-0',
      ]"
    >
    <div class="flex items-center justify-start gap-2 scale-75">
        <img src="/images/logos/IPNU.webp" alt="" class="w-7 h-7" />
        <img src="/images/logos/IPPNU.webp" alt="" class="w-7 h-7" />
        <div class="text-sm text-slate-200">
          <h1 class="font-bold">Pimpinan Anak Cabang</h1>
          <p>IPNU IPPNU Bungursari</p>
        </div>
      </div>
      <!-- Hamburger Menu for Mobile -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden text-2xl"
      >
        <i
          :class="isMobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
        ></i>
      </button>
    </div>

    <div class="w-full bg-green-800/50 backdrop-blur-md fixed z-4 top-15.5" v-if="isMobileMenuOpen">
      <ul
        class="my-2 flex flex-col md:flex-row gap-3 justify-center items-center text-slate-100 text-sm font-semibold"
      >
        <li><a href="/">Beranda</a></li>
        <li><a href="/tentang">Tentang</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/struktur-organisasi">Struktur Organisasi</a></li>
        <li><a href="/mars">Mars</a></li>
        <li><a href="/kontak">Kontak</a></li>
      </ul>
    </div>
  </header>
  <nav
    :class="[
      'w-full hidden md:block  transition-all duration-500 top-0  z-99',
      scroll
        ? 'fixed backdrop-blur-md  shadow-lg bg-green-800/82'
        : 'fixed top-0 transparent ',
    ]"
  >
    <div
      class="container mx-auto grid grid-cols-3 items-center justify-center py-4 text-slate-100"
    >
      <div class="flex items-center justify-start gap-2 scale-75">
        <img src="/images/logos/IPNU.webp" alt="" class="w-7 h-7" />
        <img src="/images/logos/IPPNU.webp" alt="" class="w-7 h-7" />
        <div class="text-sm text-slate-200">
          <h1 class="font-bold">Pimpinan Anak Cabang</h1>
          <p>IPNU IPPNU Bungursari</p>
        </div>
      </div>
      <div>
        <ul
          class="flex flex-col md:flex-row space-x-4 justify-center items-center text-sm font-semibold"
        >
        <li><a href="/">Beranda</a></li>
        <li><a href="/tentang">Tentang</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/struktur-organisasi">Struktur Organisasi</a></li>
        <li><a href="/mars">Mars</a></li>
        <li><a href="/kontak">Kontak</a></li>
        </ul>
      </div>
      <div class="flex gap-2 justify-end items-center text-slate-100">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-tiktok"></i>
      </div>
    </div>
  </nav>
</template>
