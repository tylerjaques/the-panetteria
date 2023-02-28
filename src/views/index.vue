<template>
  <div>
    <div class="bg">
      <div class="absolute table">
        <alttop/>
        <div class="middle text-white">
          <div class="container cell"></div>
        </div>
        <bottom/>
      </div>
    </div>
  </div>
</template>

<script>
import alttop from '../components/alttop.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'Home',
  components: {alttop, bottom},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (max-width: 800px) {
  .bg {
    background-image: url('../../public/images/front1.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-size: cover;
  }
}

@media (min-width: 801px) {
  .bg {
    background-image: url('../../public/images/front2.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    overflow-y: scroll;
  }
}
</style>
