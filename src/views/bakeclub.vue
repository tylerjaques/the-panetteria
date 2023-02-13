<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell w-11/12">
        <h2 class="page-header libre-baskerville tracking-widest">THE BAKE CLUB</h2>
        <div class="flex mb-8">
          <p>Join our bakers in an intimate hands-on setting to learn skills & techniques to make
            you a successful baker at home!</p>
        </div>
        <div class="flex inline-block mb-8">
          <p>Small-size classes allow for one-on-one instruction. Plus, you get to take home what
            you bake! </p>
        </div>
        <div class="flex inline-block mb-8">
          <p>All ages and skill levels are welcome. Please allow for 2 hours (except bread class
            which may take up to 3 hours) and note that seating is not available during the classes.
            Cleasses are posted on social media and are first come first serve by email only.</p>
        </div>
        <div class="flex inline-block mb-8">
          <p>Classes that are currently offered include:</p>
          <ul>
            <li>French Tarts</li>
            <li>Introduction to Bread</li>
            <li>Thin-Crust Pizza</li>
            <li>Classic Pies</li>
            <li>Scones & Muffins</li>
          </ul>
        </div>
        <div class="flex inline-block mb-8">
          <p>For more information use the <router-link class="page" to="/contact">contact us page</router-link> or send us an email with your specific questions to <a href="mailto: thepanetteria@gmail.com">thepanetteria@gmail.com</a>!</p>
        </div>
      </div>
    </div>
    <bottom/>
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'BakeClub',
  components: {top, bottom},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-image {
  background-image: url('../../public/images/head-bakeclub.png');
}
</style>
