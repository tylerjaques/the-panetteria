<template>
  <div class="top row text-2xl bg-black text-white tracking-widest" :style="style">
    <div class="cell grid grid-rows-2 mx-4 md:mx-16">
      <div class="mb-8">
          <router-link class="title" to="/">THE PANETTERIA</router-link>
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
    style() {
        return 'background-image: ' + this.backgroundImage;
    }
  }
};
</script>

<style scoped>
</style>
