<script setup>
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import About from "../components/About.vue";
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <Navbar />
  <Hero />
  <About />
  <Footer />
</template>

<style scoped></style>
