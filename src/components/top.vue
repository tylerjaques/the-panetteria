<template>
  <div class="header sticky w-full text-2xl bg-black text-white tracking-widest" :style="style">
    <div class="grid grid-rows-2 my-8 md:my-0 mx-4 md:mx-16">
      <div class="mb-8">
          <router-link class="link title" to="/">THE PANETTERIA</router-link>
      </div>
      <div class="grid grid-cols-6 md:flex md:flex-wrap">
        <router-link class="page" to="/products">PRODUCTS</router-link>
        <router-link class="page" to="/about">ABOUT US</router-link>
        <router-link class="page" to="/contact">CONTACT US</router-link>
        <router-link class="page col-span-2" to="/bake-club">THE BAKE CLUB</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: [
    'backgroundImage'
  ],
  computed: {
    style() {
        return 'background-image: ' + this.backgroundImage;
    }
  }
};
</script>

<style scoped>
  .header {
    font-family: "Libre Baskerville", serif;
    background-size: cover;

    @apply flex flex-wrap justify-between md:content-end;

    /* Mobile */
    @apply h-auto;

    /* Full screen */
    @apply md:h-72
  }

  .title {
     @apply text-4xl md:text-5xl mr-auto;
  }

  .page {
    @apply whitespace-nowrap col-span-6 md:col-span-1 md:pr-4 mr-4;
  }

  .divider {
    @apply justify-self-center hidden md:inline;
  }

</style>
