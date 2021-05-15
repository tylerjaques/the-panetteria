<template>
  <div class="header sticky w-full bg-black text-white tracking-widest md:text-2xl" :style="style">
    <div id="links" class="md:ml-4">
          <router-link class="title" to="/">THE PANETTERIA</router-link>
          <router-link to="/products">PRODUCTS</router-link>
          <router-link to="/about">ABOUT US</router-link>
          <router-link to="/contact">CONTACT US</router-link>
          <router-link to="/bake-club">THE BAKE CLUB</router-link>
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
  }

  #links {
    @apply flex flex-wrap content-end pb-2;

    /* Mobile */
    @apply
    h-32;

    /* Full screen */
    @apply
    md:h-72

  }

  .title {
     @apply mr-auto;
  }



</style>
