<template>
  <div class="main table">
    <alttop />
    <div class="middle text-white">
      <div class="container cell"></div>
    </div>
    <bottom />
  </div>
</template>

<script>
import alttop from '../components/alttop.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'Home',
  components: { alttop, bottom },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main {
    background-image: url('../../public/images/Sourdough.png');

    font-family: "Libre Baskerville", serif;

    @apply bg-center
  }

</style>
