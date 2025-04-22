<script setup>
import StructurOrganization from "../components/StructurOrganization.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
</script>
<template>
  <Navbar />
  <Breadcrumb
    image="/images/logos/IPPNU.webp"
    title="Struktur Organisasi"
    currentLink="struktur-organisasi"
  />
  <StructurOrganization />
  <Footer />
</template>
