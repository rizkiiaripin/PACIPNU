<script setup>
import { blogs } from "../database/blogs.js";
console.log(blogs);
</script>

<template>
  <section data-aos="fade-up">
    <div class="text-center my-6 mt-10">
      <h1 class="text-3xl text-center font-bold text-slate-700 mb-2">Blog</h1>
      <p class="text-slate-600">blog terbaru dari IPNU IPPNU Bungursari</p>
    </div>

    <div
      class="grid justify-center mx-auto max-w-6xl grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="blog in blogs"
        class="flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
      >
        <div
          class="relative mx-4 -mt-3 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"
        >
          <img
            :src="blog.image"
            alt="makestar"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <div class="p-6 pb-3">
          <h5
            class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
          >
            {{ blog.title }}
          </h5>
          <p
            class="block font-sans text-sm font-light leading-relaxed text-inherit antialiased"
          >
            {{ blog.description.slice(0, 100) + "..." }}
          </p>
          <p class="text-xs text-slate-400 mt-5">{{ blog.date }}</p>
        </div>
        <div class="p-6 pt-0 ">
          <a
            :href="'/blog/' + blog.id"
            class="select-none rounded-lg bg-green-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
          
          >
            Read More
          </a>
        </div>
      </div>
    </div>
    <slot></slot>
  </section>
</template>
