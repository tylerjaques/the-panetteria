<template>
  <div class="top row text-2xl bg-black bg-opacity-50 text-white tracking-widest">
    <div class="cell grid grid-rows-2 my-4 lg:my-0 mx-4 md:mx-16">
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
};
</script>

<style scoped>
</style>
