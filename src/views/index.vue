<template>
  <div class="main">
    <alttop />
    <div class="body text-white">
    </div>
    <altbottom />
  </div>
</template>

<script>
import alttop from '../components/alttop.vue';
import altbottom from '../components/altbottom.vue';

export default {
  name: 'Home',
  components: { alttop, altbottom },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .main {
    background-image: url('https://i.imgur.com/g5b2CbD.jpg');

    font-family: "Libre Baskerville", serif;
  }
</style>
