<template>
  <div>
    <header></header>
    <div class="mx-32 mb-32">
      <div class="flex justify-center py-16">
        <h2 class="text-5xl">THE BAKE CLUB</h2>
      </div>
      <div class="mb-8 inline-block flex justify-center">
        <p>Join our bakers in an intimate hands-on setting to learn skills & techniques to make you a successful baker at home!</p>
      </div>
      <div class="mb-8 inline-block flex justify-center">
        <p>Small-size classes allow for one-on-one instruction. Plus, you get to take home what you bake! </p>
      </div>
      <h3 class="text-3xl flex justify-center">COMING SOON!</h3>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Header from '../components/top.vue';

export default {
  name: 'BakeClub',
  components: { Header },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
