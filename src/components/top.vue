<template>
  <div class="header sticky w-full md:text-2xl bg-black text-white tracking-widest" :style="style">
    <div class="grid grid-rows-2 my-8 md:my-0 mx-8 md:mx-32">
      <div class="mb-8">
          <router-link class="link title" to="/">THE PANETTERIA</router-link>
      </div>
      <div class="flex flex-wrap grid md:grid-cols-8 ">
        <router-link class="page" to="/products">PRODUCTS</router-link><span class="divider">|</span>
        <router-link class="page" to="/about">ABOUT US</router-link><span class="divider">|</span>
        <router-link class="page" to="/contact">CONTACT US</router-link><span class="divider">|</span>
        <router-link class="page" to="/bake-club">THE BAKE CLUB</router-link>
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
    font-family: "Libre Baskerville",serif;
    background-size: cover;

    @apply flex flex-wrap justify-between md:content-end;

    /* Mobile */
    @apply h-auto;

    /* Full screen */
    @apply md:h-72
  }

  .title {
     @apply mr-auto;
  }

  .page {
    @apply whitespace-nowrap md:col-span-1 md:pr-4 mr-4;
  }

  .divider {
    @apply justify-self-center hidden md:inline;
  }

</style>
