<template>
  <div v-if="products">
    <div v-for="category in products.categories">
      <h3 class="text-4xl my-4 baskerville">{{ category.category }}</h3>
      <div v-for="sub in category.subcategories">
        <div class="grid grid-cols-2 lg:grid-cols-4">
          <div class="w-5/6 mb-4" v-for="product in sub.products">
            <img v-if="product.photo" :src="product.photo" :alt="product.name" />
            <p v-else>{{ product.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Top',
  props: {
    products: Object
  }
};
</script>

<style scoped>
</style>
