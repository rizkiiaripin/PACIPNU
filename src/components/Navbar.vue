<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scroll = ref(false);

const handleScroll = () => {
  scroll.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'w-full   transition-all duration-500 top-0  z-99',
      scroll
        ? 'fixed backdrop-blur-md  shadow-lg bg-green-800/82'
        : 'fixed top-0 transparent ',
    ]"
  >
    <div
      class="container mx-auto flex items-center justify-between py-5 text-slate-100"
    >
      <div>PACIPNU</div>
      <div>
        <ul class="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="flex gap-2">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-tiktok"></i>
      </div>
    </div>
  </nav>

  <div class="h-screen overflow-hidden mb-1000 grid items-center mx-auto">
    <div class="flex justify-center h-full w-full bg-gray-100 relative">
      <img
        src="/images/heroes/hero.webp"
        alt="hero"
        class="object-cover brightness-50 w-full"
      />
    </div>
    <div class="absolute flex flex-col items-center justify-center w-full h-full gap-10">
      <h1 class="text-4xl md:text-6xl font-bold text-center text-slate-100">
        Ber-IPNU Tumbuhkan Semangat Belajar , Berjuang , & Bertaqwa
      </h1>
      <button
        type="button"
        class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50  hover:text-slate-100 before:-z-10 hover:bg-green-800 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full hover:scale-102 hover:border-slate-200  transition-all  ease-linear duration-300 group"
      >
        Tentang kami
        <svg
          class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45 "
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            class="fill-gray-800 group-hover:fill-gray-800"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
