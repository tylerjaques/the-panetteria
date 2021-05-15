<template>
  <div class="header sticky w-full bg-black text-white tracking-widest sm:text-lg md:text-2xl" >
    <div class="md:ml-4 md:mr-16 md:flex md:justify-between md:items-center">
      <div class="logo border-2 my-4 whitespace-nowrap">
        <div class="inner border-4 my-6 mx-6 px-6 py-6">
          <router-link to="/">THE PANETTERIA</router-link>
        </div>
      </div>
      <div class="space-x-4">
        <router-link to="/products">PRODUCTS</router-link>
        <router-link to="/about">ABOUT US</router-link>
        <router-link to="/contact">CONTACT US</router-link>
        <router-link to="/bake-club">THE BAKE CLUB</router-link>
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
  .header {
    font-family: "Libre Baskerville",serif;
  }
</style>
