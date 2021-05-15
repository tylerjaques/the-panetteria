<template>
  <div>
    <top background-image="url('https://i.imgur.com/Q19KiR1.jpg')"/>
    <div class="body">
      <div class="flex justify-center">
        <h2 class="text-5xl mt-4 mb-8">PRODUCTS</h2>
      </div>
      <div class="products">
        <h3 class="text-4xl mb-8">BREADS</h3>
        <div class="grid grid-cols-2">
          <div>Sourdoughs</div>
          <div>
            <ul>Aburg Sourdough</ul>
            <ul>Olive</ul>
            <ul>Multi-Grain</ul>
            <ul>Whole Wheat</ul>
          </div>
          <div>White</div>
          <div>
            <ul>Baguette</ul>
            <ul>White Country Loaf</ul>
            <ul>Focaccia</ul>
          </div>
        </div>
        <h3 class="text-4xl mb-8">PASTRY</h3>
        <div class="grid grid-cols-2">
          <div>Sweet</div>
          <div>
            <ul>Almond Croissant</ul>
            <ul>Chocolate Croissant</ul>
            <ul>Danish</ul>
            <ul>Tart</ul>
            <ul>Scones</ul>
          </div>
          <div>Savoury</div>
          <div>
            <ul>Individual Pies</ul>
            <ul>Sandwiches</ul>
            <ul>Scones</ul>
          </div>
        </div>
        <h3 class="text-4xl mb-8">GELATO/SORBET</h3>
        <div class="grid grid-cols-2">
          <div>Gelatos</div>
          <div>
            <ul>Assorted Flavours (see in-store for availability)</ul>
          </div>
          <div>Sorbets</div>
          <div>
            <ul>Assorted Flavours (see in-store for availability)</ul>
          </div>
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'Products',
  components: { top, bottom },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
