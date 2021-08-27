<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell w-11/12">
        <div class="flex">
          <h2 class="page-header libre-baskerville">THE BAKE CLUB</h2>
        </div>
        <div class="flex mb-8">
          <p>Join our bakers in an intimate hands-on setting to learn skills & techniques to make you a successful baker at home!</p>
        </div>
        <div class="flex inline-block mb-8">
          <p>Small-size classes allow for one-on-one instruction. Plus, you get to take home what you bake! </p>
        </div>
        <h3 class="text-3xl flex">COMING SOON!</h3>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'BakeClub',
  components: { top, bottom },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-image {
  background-image: url('/images/AlmondCroissant.png');
}
</style>
