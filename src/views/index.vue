<template>
  <div class="page">
    <picture class="bg">
      <source
        media="(max-width: 800px)"
        srcset="/images/front-portrait-800.webp 800w, /images/front-portrait-1200.webp 1200w"
        sizes="100vw"
      >
      <img
        src="/images/front-1920.webp"
        srcset="/images/front-1280.webp 1280w, /images/front-1920.webp 1920w, /images/front-2560.webp 2560w"
        sizes="100vw"
        alt=""
        fetchpriority="high"
      >
    </picture>
    <top overlay />
    <main id="main" tabindex="-1" class="middle justify-end text-white">
      <div class="max-w-2xl my-8 md:my-16 p-6 md:p-8 bg-black/75">
        <h1 class="text-2xl md:text-4xl libre-baskerville tracking-wide mb-4">
          Artisan bakery in historic downtown Amherstburg
        </h1>
        <p class="mb-4">Sourdough, pastries and lunch, made by hand every day.</p>
        <p class="mb-6 font-semibold">
          <template v-if="holidayActive">Holiday hours are in effect; see below.</template>
          <template v-else-if="todayOpen">Open today {{ formatHours(todayEntry) }}</template>
          <template v-else>Closed today</template>
        </p>
        <div class="flex flex-wrap gap-4">
          <router-link to="/menu" class="button button-light">See the menu</router-link>
          <a :href="business.directionsUrl" class="button button-outline">Get directions</a>
        </div>
      </div>
    </main>
    <bottom />
  </div>
</template>

<script setup>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import config from '../assets/data/config.json';
import { formatHours, isActive, todaysHours } from '@/hours.js';

const { business, hours, holidayHours } = config;
const holidayActive = isActive(holidayHours);
const todayEntry = todaysHours(hours);
const todayOpen = Boolean(todayEntry?.opens);
</script>

<style scoped>
  .bg {
    position: fixed;
    inset: 0;
    z-index: -1;
  }

  .bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
