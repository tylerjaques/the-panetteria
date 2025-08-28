<template>
  <div id="app">
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
          We’ll be closed for our annual semi-annual vacation from September 7th to September 17th. We'll be open September 18th!
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
      const startDate = new Date('09/07/2025');
      const endDate = new Date('09/17/2025');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
