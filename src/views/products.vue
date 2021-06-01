<template>
  <div>
    <top background-image="url('https://i.imgur.com/Q19KiR1.jpg')"/>
    <div class="body">
      <div class="flex">
        <h2 class="text-5xl mt-4 mb-8">PRODUCTS</h2>
      </div>
      <div v-for="category in products.categories">
        <h3 class="text-4xl my-4">{{ category.category }}</h3>
        <div v-for="sub in category.subcategories">
          <div class="text-2xl my-4 ">{{ sub.category }}</div>
          <div class="flex flex-wrap grid grid-cols-2">
            <div class="w-3/4 mb-4" v-for="product in sub.products">
              <img class="md:mr-4" :src="product.photo" :alt="product.name" />
              <p class="italic">{{ product.name }}</p>
            </div>
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
import products from '../assets/data/products.json';

export default {
  name: 'Products',
  components: { top, bottom },
  props: {
    msg: String,
  },
  data(){
    return {
      'products': products
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
