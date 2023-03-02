<template>
  <div id="products" v-if="products">
      <div v-for="product in products" class="my-4 mx-2">
        <img :src="'images/' + product" :alt="product" @click="openModal('images/' + product)"/>
      </div>
    <modal v-if="isModalVisible" :url="modalPhoto" @close="closeModal()"/>
  </div>
</template>

<script>

import Modal from "@/components/modal.vue";

export default {
  name: 'ProductPhotos',
  components: { Modal },
  props: {
    products: Array
  },
  data() {
    return {
      isModalVisible: false,
      modalPhoto: '',
    }
  },
  methods: {
    openModal(photo, name) {
      this.isModalVisible = true;
      this.modalPhoto = photo;
    },
    closeModal() {
      this.isModalVisible = false;
      this.modalPhoto = '';
    }
  }
};
</script>

<style>
#products {
  /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap:   0px;
  -moz-column-count:    5;
  -moz-column-gap:      0px;
  column-count:         3;
  column-gap:           0px;
}

#products img {
  /* Just in case there are inline attributes */
  width: 100% !important;
  height: auto !important;
  cursor: pointer;
}

@media (max-width: 1200px) {
  #products {
    -moz-column-count:    4;
    -webkit-column-count: 4;
    column-count:         4;
  }
}
@media (max-width: 1000px) {
  #products {
    -moz-column-count:    3;
    -webkit-column-count: 3;
    column-count:         3;
  }
}
@media (max-width: 800px) {
  #products {
    -moz-column-count:    2;
    -webkit-column-count: 2;
    column-count:         2;
  }
}
@media (max-width: 400px) {
  #products {
    -moz-column-count:    1;
    -webkit-column-count: 1;
    column-count:         1;
  }
}

</style>

