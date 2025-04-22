<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Contact from "../components/Contact.vue";
</script>
<template>
  <Navbar />
  <Breadcrumb
    image="/images/logos/IPPNU.webp"
    title="Kontak"
    currentLink="kontak"
  />
  <Contact />

  <Footer />
</template>
