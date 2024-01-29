<template>
  <div id="app">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-2VG4NGLB92"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-2VG4NGLB92');
    </script>
    <div id="wrapper">
      <banner v-if="showBanner && bannerActive" @close="showBanner = false">
        We will be closed from January 1st to January 23rd and re-opening on January 24th, for our annual winter break.
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
      const startDate = new Date('12/29/2023');
      const endDate = new Date('01/23/2024');

      return (Date.now() >= startDate && Date.now() <= endDate);
    }
  }
};
</script>
