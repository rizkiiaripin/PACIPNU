<script>
import { onMounted } from "vue";
onMounted(() => {
  AOS.init({
    once: true, // opsional: hanya animasi sekali
  });
  AOS.refresh();
});
</script>
<template>
  <section class="h-screen overflow-hidden mb-4 grid items-center mx-auto" >
    <div class="flex justify-center h-full w-full bg-gray-100 relative">
      <img
        src="/images/heroes/hero.jpg"
        alt="hero"
        class="object-cover brightness-50 w-full object-center "
      />
    </div>
    <div
      class="absolute flex flex-col items-center justify-center w-full h-full gap-10" 
      
    >
      <h1 class="text-4xl mx-3  md:text-6xl font-bold text-center text-slate-100" data-aos="fade-down" data-aos-duration="900"  >
        Ber-IPNU Tumbuhkan Semangat Belajar , Berjuang , & Bertaqwa
      </h1>
      <a href="/tentang" data-aos="fade-up" data-aos-duration="1300" 
        class="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 hover:text-slate-100 active:text-slate-100 hover:bg-green-800 active:bg-green-800 relative  px-4 py-2 overflow-hidden border-2 rounded-full hover:scale-102 active:scale-102  hover:border-slate-200 transition-all ease-linear duration-300 font-semibold text-slate-800 group"
      >
        Pelajari lebih lanjut
        <svg
          class="w-8 h-8 justify-end group-hover:rotate-90 group-active:rotate-90 group-hover:bg-gray-50 text-white ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none group-active:border-none p-2 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            class="fill-gray-800 group-hover:fill-gray-800"
          ></path>
        </svg>
      </a>
    </div>
  </section>
</template>
