<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import Blog from "../components/Blog.vue";
</script>
<template>
  <Navbar />
  <Breadcrumb
    image="/images/logos/IPPNU.webp"
    title="Blog"
    currentLink="blog"
  />
  <Blog />
    
  <Footer />
</template>
