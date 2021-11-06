<template>
  <div v-if="products">
    <div v-for="category in products.categories">
      <h3 class="text-4xl my-4 baskerville">{{ category.category }}</h3>
      <div v-for="sub in category.subcategories">
        <div class="text-3xl my-4">{{ sub.category }}</div>
        <div class="grid grid-cols-2 md:grid-cols-3">
          <div class="w-5/6 mb-4" v-for="product in sub.products">
            <img :src="product.photo" :alt="product.name" />
            <p>{{ product.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  props: {
    products: Array
  }
};
</script>

<style scoped>
</style>
