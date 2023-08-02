<template>
  <div id="app">
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
        Closed August 6-15 for summer holidays | Re-Opening August 16th @ 9am!
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
      const startDate = new Date('08/01/2023');
      const endDate = new Date('08/16/2023');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
