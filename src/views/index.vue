<template>
  <div>
    <top background-image="url('https://i.imgur.com/g5b2CbD.jpg')" />
    <div class="body">
      <div class="inline-block flex justify-center">
        <p>Located in the heart of downtown historic <strong>Amherstburg
        </strong>, The Panetteria is an artisan bakery specializing in <strong>
          bread</strong> and <strong>sweet & savoury pastries</strong>. Focus on quality,
          small-scale production is at the heart of what we do. We make
          our breads and pastries by hand daily.  We focus on using
          <strong>excellent ingredients</strong> with a seasonal approach
          to provide variety, flavour and quality.</p>
      </div>
      <div class="text-gray-600 mt-8">
        <p>Please note:  All efforts are made to accommodate allergies.
          However, given the size of our facility, we cannot guarantee
          that anything is 100% free of flour particles. For more information
          please contact us directly with your specific inquiries.</p>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'Home',
  components: { top, bottom },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
