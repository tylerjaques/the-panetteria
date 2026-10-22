<template>
  <div class="page">
    <top class="bg-image"/>
    <main id="main" tabindex="-1" class="middle">
      <h1 class="page-header">{{ menu.title }}</h1>
      <div class="mb-8 max-w-4xl">
        <p class="mb-4">The following is a sample of The Panetteria’s staples.</p>
        <p>However, we encourage you to follow us on
          <a :href="instagram.url">Instagram</a> and <a :href="facebook.url">Facebook</a>
          for more up-to-date information regarding changing flavours and new products!</p>
      </div>
      <product-menu :menu="menu"></product-menu>
      <product-photos :products="products"/>
      <p class="mt-8 mb-16 max-w-4xl">Please note: All efforts are made to accommodate allergies.
        However, given the size of our facility, we cannot guarantee
        that anything is 100% free of flour particles. For more information
        please contact us directly with your specific inquiries.</p>
    </main>
    <bottom/>
  </div>
</template>

<script setup>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import productMenu from '@/components/productMenu.vue';
import productPhotos from '@/components/productPhotos.vue';
import config from '../assets/data/config.json';

const { products, menu, business } = config;
const [facebook, instagram] = business.socials;
</script>

<style scoped>
.bg-image {
  background-image: url('/images/head-products-1000.webp');
}

@media (min-width: 1000px), (min-resolution: 2dppx) {
  .bg-image {
    background-image: url('/images/head-products-1686.webp');
  }
}
</style>
