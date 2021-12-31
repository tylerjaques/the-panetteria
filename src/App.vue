<template>
  <div id="app">
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
        We will be on vacation until Wednesday Jan 19 at 9am!
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
      const startDate = new Date('01/01/2022');
      const endDate = new Date('01/19/2022');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
