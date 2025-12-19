<template>
  <div id="app">
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
          We’ll be closed for our holiday break from January 1st to January 21st. We'll be back open on January 22nd!
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
      const startDate = new Date('12/26/2025');
      const endDate = new Date('01/21/2026');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
