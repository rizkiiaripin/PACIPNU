<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
</script>
<template>
  <Navbar />
  <Breadcrumb
    image="/images/logos/IPPNU.webp"
    title="Detail Blog"
    currentLink="detail-blog"
  />
  <div
    class="w-2/3 mx-auto px-4 py-8 flex flex-col items-center justify-center"
  >
    
    <div class=" h-100 mb-4 overflow-hidden flex justify-center items-center"> 
      <img src="/images/heroes/hero.jpg" alt="gambar-detail" class="object-cover object-center " />
    </div>
    <h1 class="text-3xl font-bold mb-4 self-start">Detail Blog</h1>
    <p class="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <Footer />
</template>
