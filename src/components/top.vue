<template>
  <div class="top row text-lg md:text-2xl bg-black text-white tracking-widest" :style="bg">
    <div class="cell flex flex-wrap mx-4 md:mx-16 mt-8 mb-4 xl:mb-0">
      <div class="mb-4 w-full">
          <router-link class="title" to="/"><img class="lg:w-1/3 xl:w-1/4" src="images/Logo.jpg" alt="The Panetteria"></router-link>
      </div>
      <div class="flex flex-wrap">
        <router-link class="page" to="/products">PRODUCTS</router-link>
        <router-link class="page" to="/about">ABOUT US</router-link>
        <router-link class="page" to="/contact">CONTACT US</router-link>
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
    bg() {
        return 'background-image: ' + this.backgroundImage;
    }
  }
};
</script>

<style scoped>
</style>
