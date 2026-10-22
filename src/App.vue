<template>
  <a href="#main" class="skip-link" @click.prevent="skipToContent">Skip to content</a>
  <banner v-if="showBanner && bannerActive" @close="showBanner = false">
    {{ banner.message }}
  </banner>
  <router-view/>
</template>

<script setup>
import { ref } from 'vue';
import Banner from '@/components/banner.vue';
import config from '@/assets/data/config.json';
import { isActive } from '@/hours.js';

const { banner } = config;
const showBanner = ref(true);
const bannerActive = isActive(banner);

function skipToContent() {
  const main = document.getElementById('main');
  main?.focus();
  main?.scrollIntoView();
}
</script>
