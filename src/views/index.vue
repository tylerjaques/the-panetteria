<template>
  <div class="bg-image bg-no-repeat bg-center bg-cover bg-fixed table">
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
  .bg-image {
    background-image: url('../../public/images/bg-index.png');
  }
</style>
