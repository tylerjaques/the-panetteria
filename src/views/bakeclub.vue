<template>
  <div>
    <top background-image="url('https://i.imgur.com/GROUCq0.jpg')"/>
    <div class="body">
      <div class="flex justify-center">
        <h2 class="text-5xl mt-4 mb-8">THE BAKE CLUB</h2>
      </div>
      <div class="mb-8 inline-block flex justify-center">
        <p>Join our bakers in an intimate hands-on setting to learn skills & techniques to make you a successful baker at home!</p>
      </div>
      <div class="mb-8 inline-block flex justify-center">
        <p>Small-size classes allow for one-on-one instruction. Plus, you get to take home what you bake! </p>
      </div>
      <h3 class="text-3xl flex justify-center">COMING SOON!</h3>
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

</style>
