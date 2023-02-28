<template>
  <div>
    <div v-if="menu">
      <div v-for="section in menu.section">
        <h3 class="text-4xl my-4 libre-baskerville tracking-widest">{{ section. }}</h3>
        <div v-for="sub in category.subcategories">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div v-for="product in sub.products">
              <img v-if="product.photo" :src="product.photo" :alt="product.name" @click="openModal(product.photo, product.name)"/>
              <p v-else>{{ product.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductMenu',
  props: {
    menu: Object
  },
};
</script>

