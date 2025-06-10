<script setup>
import Navbar from "../components/Navbar.vue";
import About from "../components/About.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Footer from "../components/Footer.vue";
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <Navbar />
  <Breadcrumb
    image="/images/logos/IPPNU.webp"
    title="Tentang"
    currentLink="tentang"
  />
  <About />
  <Footer />
</template>

<style scoped></style>
