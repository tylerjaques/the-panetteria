<template>
  <div id="app">
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
        We'll be <strong>shut down</strong> for what we're calling our <strong>"Baker's Wedding Break"</strong> <br> <strong>Monday April 25th returning Wednesday May 18th</strong>!
      </banner>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  #wrapper {
    height: 100%;
    position:fixed;
    top:0; bottom:0; left:0; right:0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
<script>

import Banner from '@/components/banner';
export default {
  components: { Banner },
  data() {
    return {
      showBanner: true
    }
  },
  computed: {
    bannerActive() {
      const startDate = new Date('04/25/2022');
      const endDate = new Date('05/17/2022');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
