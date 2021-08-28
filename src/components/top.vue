<template>
  <!--        Black Menu-->
  <div class="top row text-lg md:text-2xl text-white tracking-wide" :style="bg">
      <div class="cell flex flex-wrap mt-4 md:mt-8 xl:mb-0">
        <div class="mx-4 md:mx-16 mb-4 md:mb-8 w-full">
            <router-link class="title" to="/"><img src="images/Logo.jpg" alt="The Panetteria"></router-link>
        </div>
        <div class="flex flex-wrap px-4 md:px-16 pb-2 bg-black bg-opacity-75 w-full">
          <router-link class="page" to="/products">PRODUCTS</router-link>
          <router-link class="page" to="/about">ABOUT US</router-link>
          <router-link class="page" to="/contact">CONTACT US</router-link>
          <router-link class="page" to="/bake-club">THE BAKE CLUB</router-link>
        </div>
      </div>
  </div>
<!--  Border Menu-->
<!--  <div class="top row text-lg md:text-2xl bg-black text-white tracking-widest" :style="bg">-->
<!--    <div class="cell flex flex-wrap mx-4 md:mx-16 mt-4 md:mt-8 mb-4 xl:mb-0">-->
<!--      <div class="mb-4 w-full">-->
<!--        <router-link class="title" to="/"><img class="lg:w-1/3 xl:w-1/4" src="images/Logo.jpg" alt="The Panetteria"></router-link>-->
<!--      </div>-->
<!--      <div class="flex flex-wrap">-->
<!--        <router-link class="page" to="/products">PRODUCTS</router-link>-->
<!--        <router-link class="page" to="/about">ABOUT US</router-link>-->
<!--        <router-link class="page" to="/contact">CONTACT US</router-link>-->
<!--        <router-link class="page" to="/bake-club">THE BAKE CLUB</router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
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
