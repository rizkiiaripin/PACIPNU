<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <Navbar />
  <div>
    <div
      class="h-[30vh] w-full relative shadow-md flex items-center justify-center"
    >
      <div>
        <div>
          <div class="absolute inset-0 bg-gray-900" />
          <img
            src="/images/logos/IPNU.webp"
            alt=""
            class="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          >
            <h1
              class="text-white text-4xl mt-5 font-semibold z-10 text-center"
              data-aos="fade-right"
            >
              Mars
            </h1>
            <div class="flex gap-2 items-center justify-center z-10">
              <a href="/" class="text-blue-400">Beranda</a>
              <span class="text-white text-lg">></span>
              <a class="text-white">Mars</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-4xl mx-auto mt-4 p-4 bg-white">
    <div class="h-20 bg-slate-100 flex items-center mx-auto mt-4 gap-4 mb-2">
      <div class="w-3 bg-yellow-500 h-full"></div>
      <h1 class="text-xl font-semibold text-slate-900">Mars IPNU</h1>
    </div>
    <h5 class="text-sm">Cipt. Drs. Moh. Shomuri WS.</h5>
    <div class="text-lg flex flex-col gap-3 mt-4">
      <p>
        Wahai pelajar Indonesia <br />
        Siapkanlah barisanmu <br />
        Bertekat bulat bersatu <br />
        Di bawah kibaran panji IPNU <br />
      </p>
      <p>
        Wahai pelajar Islam yang setia <br />
        Kembangkanlah agamamu <br />
        Dalam Negara Indonesia <br />
        Tanah air yang ku cinta <br />
      </p>
      <p>
        Dengan berpedoman kita belajar <br />
        Berjuang serta bertakwa <br />
        Kita bina watak nusa dan bangsa <br />
        Tuk kejayaan masa depan <br />
      </p>
      <p>
        Bersatu wahai pelajar Islam jaya <br />
        Tunaikanlah k’wajiban yang mulya <br />
        Ayo maju pantang mundur <br />
        Dengan rahmat Tuhan kita perjuangkan<br />
        Ayo maju pantang mundur <br />
        Pasti tercapai adil makmur <br />
      </p>
    </div>
  </div>
  <div class="max-w-4xl mx-auto mt-4 p-4 bg-white">
    <div class="h-20 bg-slate-100 flex items-center mx-auto mt-4 gap-4 mb-2">
      <div class="w-3 bg-yellow-500 h-full"></div>
      <h1 class="text-xl font-semibold text-slate-900">Mars IPPNU</h1>
    </div>
    <h5 class="text-sm">Cipt. Drs. H. Mahbub Junaidi</h5>
    <div class="text-lg flex flex-col gap-3 mt-4">
      <p>
        Sirnalah gelap terbitlah terang <br />
        Mentari timur sudah bercahya <br />
        Ayunkan langkah pukul genderang <br />
        Siapkanlah barisanmu <br />
      </p>
      <p>
        Tiada laut sedalam iman <br />
        Tiada lautan seluas kasih <br />
        Tiada gunung setinggi cita <br />
        Sujud kepala kepada tuhan <br />
        Tegak kepala lawan derita <br />
      </p>
      <p>
        Di malam yang sepi di pagi yang terang <br />
        Hatiku teguh bagimu ikatan <br />
        Di malam yang hening di hati membakar <br />
        Hatiku penuh bagimu pertiwi <br />

        Mekar seribu bunga ditaman <br />
        Mekar cintaku pada ikatan <br />
        Ilmu kucari amal kuberi <br />
        Untuk agama bangsa dan negeri <br />
      </p>
    </div>
  </div>
  <Footer />
</template>
