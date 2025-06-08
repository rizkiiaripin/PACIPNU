<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import { blogs } from "../database/blogs.js";
import { useRoute } from 'vue-router'

const route = useRoute()
const blogId = parseInt(route.params.id)

if (isNaN(blogId)) {
  throw new Error("Invalid blog ID");
}

const blog = blogs.find(b => b.id === blogId)
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
      <img :src="blog.image" alt="gambar-detail" class="object-cover object-center " />
    </div>
    <h1 class="text-3xl font-bold mb-4 self-start">{{ blog?.title }}</h1>
    <p class="text-gray-700 mb-4">
        {{ blog?.description }}
    </p>
  </div>
  <Footer />
</template>
