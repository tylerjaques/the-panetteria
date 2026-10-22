<template>
  <div class="page">
    <top class="bg-image"/>
    <main id="main" tabindex="-1" class="middle">
      <h1 class="page-header">About us</h1>
      <p class="mb-8 max-w-4xl">Located in the heart of downtown historic Amherstburg,
        The Panetteria is an artisan bakery specializing in
        bread and sweet & savoury pastries. Focusing on quality,
        small-scale production is at the heart of what we do. We make
        our breads and pastries by hand daily. We pride ourselves on using
        excellent ingredients to give you variety, flavour and quality.</p>
      <div class="flex justify-center mb-8">
        <img
          class="lg:w-3/4 h-auto"
          alt="Inside the bakery: desserts, salts, jams and coffee on display"
          src="/images/inside1-1024.webp"
          srcset="/images/inside1-1024.webp 1024w, /images/inside1-2048.webp 2048w"
          sizes="(min-width: 1024px) 75vw, 100vw"
          width="2048"
          height="1536"
          loading="lazy"
          decoding="async"
        >
      </div>
    </main>
    <bottom />
  </div>
</template>

<script setup>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
</script>

<style scoped>
  .bg-image {
    background-image: url('/images/head-about-1000.webp');
  }

  @media (min-width: 1000px), (min-resolution: 2dppx) {
    .bg-image {
      background-image: url('/images/head-about-2000.webp');
    }
  }
</style>
