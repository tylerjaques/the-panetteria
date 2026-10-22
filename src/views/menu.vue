<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell pr-8">
        <h2 class="page-header libre-baskerville tracking-widest">{{ menu.title }}</h2>
        <div class="mb-8">
          <p class="mb-4 w-11/12">The following is a sample of The Panetteria’s staples.</p>
          <p class="w-11/12">However, we encourage you to follow us on <a class="font-extrabold"
            href="https://www.instagram.com/the.panetteria">Instagram</a> and <a class="font-extrabold"
            href="https://www.facebook.com/The.Panetteria/">Facebook</a> for more up-to-date
            information regarding changing flavours and new products!</p>
        </div>
        <div>
          <product-menu :menu="menu"></product-menu>
          <product-photos :products="products"/>
        </div>
        <div class="mt-8">
          <p class="mb-16 w-11/12">Please note: All efforts are made to accommodate allergies.
            However, given the size of our facility, we cannot guarantee
            that anything is 100% free of flour particles. For more information
            please contact us directly with your specific inquiries.</p>
        </div>
      </div>
    </div>
    <bottom/>
  </div>
</template>

<script setup>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import productMenu from '@/components/productMenu.vue';
import productPhotos from '@/components/productPhotos.vue';
import config from '../assets/data/config.json';

const { products, menu } = config;
</script>

<style scoped lang="scss">
.bg-image {
  background-image: url('/images/head-products.png');
}
</style>
