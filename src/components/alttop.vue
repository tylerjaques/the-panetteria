<template>
  <div class="top row text-lg md:text-2xl bg-black bg-opacity-50 text-white tracking-wide">
      <div class="flex flex-wrap px-4 md:px-16 pb-2 bg-black bg-opacity-75 w-full">
        <router-link class="page" to="/products">PRODUCTS</router-link>
        <router-link class="page" to="/about">ABOUT US</router-link>
        <router-link class="page" to="/contact">CONTACT US</router-link>
        <router-link class="page" to="/bake-club">THE BAKE CLUB</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Top',
};
</script>

<style scoped>
</style>
