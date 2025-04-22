<script setup >
const props = defineProps(['title','image' , 'currentLink'])

</script>
<template>
  <div>
    <div
      class="h-[30vh] w-full relative shadow-md flex items-center justify-center"
    >
      <div>
        <div>
          <div class="absolute inset-0 bg-gray-900" />
          <img
            :src="props.image"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          >
            <h1
              class="text-white text-4xl mt-5 font-semibold z-10 text-center whitespace-nowrap" 
              data-aos="fade-right"
            >
              {{ props.title }}
            </h1>
            <div class="flex gap-2 items-center justify-center z-10">
              <a href="/" class="text-blue-400">Beranda</a>
              <span class="text-white text-lg">></span>
              <a class="text-white whitespace-nowrap">{{ props.currentLink }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
