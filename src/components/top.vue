<template>
  <div class="top row text-lg md:text-2xl text-white " :style="bg">
      <div class="cell flex flex-wrap mt-4 md:mt-8 xl:mb-0">
        <div class="mx-4 md:mx-16 mb-4 md:mb-8 w-full">
            <router-link class="title" to="/"><img src="images/Logo.jpg" alt="The Panetteria"></router-link>
        </div>
        <div class="flex flex-wrap px-4 md:px-16 pb-2 bg-black bg-opacity-75 w-full tracking-widest">
          <router-link class="page" to="/menu">MENU</router-link>
          <router-link class="page" to="/about">ABOUT US</router-link>
          <router-link class="page" to="/contact">CONTACT US</router-link>
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
