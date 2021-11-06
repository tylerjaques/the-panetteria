<template>
  <div>
    <div v-if="products">
      <div v-for="category in products.categories">
        <h3 class="text-4xl my-4 libre-baskerville tracking-widest">{{ category.category }}</h3>
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
    <modal v-if="isModalVisible" :url="modalPhoto" :caption="modalCaption" @close="closeModal()"/>
  </div>
</template>

<script>

import Modal from '@/components/modal';

export default {
  name: 'ProductList',
  components: { Modal },
  props: {
    products: Object
  },
  data() {
    return {
      isModalVisible: true,
      modalPhoto: '',
      modalCaption: '',
    }
  },
  methods: {
    openModal(photo, name) {
      this.isModalVisible = true;
      this.modalPhoto = photo;
      this.modalCaption = name;
    },
    closeModal() {
      this.isModalVisible = false;
      this.modalPhoto = '';
      this.modalCaption = '';
    }
  }
};
</script>

<style scoped>
  img:hover {
    cursor: pointer;
    opacity: 50%;
  }
</style>

