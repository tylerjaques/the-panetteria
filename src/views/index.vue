<template>
  <div>
    <div class="absolute bg-image bg-no-repeat bg-center bg-cover table">
      <alttop />
      <div class="middle text-white">
        <div class="container cell"></div>
      </div>
      <bottom />
    </div>
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
    @media (max-width: 800px) {
      .bg-image {
        background-image: url('../../public/images/front1.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
      }
    }

    @media (min-width: 801px) {
      .bg-image {
        background-image: url('../../public/images/front2.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
      }
    }
</style>
