<template>
  <div id="app">
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
          We’ll be closed for our annual winter break from January 1st to January 22nd and will be reopening on January 23rd.
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
      const startDate = new Date('12/29/2024');
      const endDate = new Date('01/23/2025');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
