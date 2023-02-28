<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell w-11/12">
        <h2 class="page-header libre-baskerville tracking-widest">ABOUT US</h2>
        <div class="flex flex-wrap">
          <div class="mb-8 text-lg md:text-xl">
            <p>Located in the heart of downtown historic Amherstburg,
              The Panetteria is an artisan bakery specializing in
              bread and sweet & savoury pastries. Focusing on quality,
              small-scale production is at the heart of what we do. We make
              our breads and pastries by hand daily.  We pride ourselves on using
              excellent ingredients to give you variety, flavour and quality.</p>
          </div>
          <div class="flex justify-center mb-8">
            <img class="lg:w-3/4" alt="Photo of desserts, salts, jams and coffee" src="images/inside1.jpg" />
          </div>
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'About',
  components: { top, bottom },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .bg-image {
    background-image: url('../../public/images/head-about.png');
  }
</style>
