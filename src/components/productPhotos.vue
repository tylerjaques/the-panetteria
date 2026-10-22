<template>
  <div v-if="products">
    <ul class="columns-1 min-[400px]:columns-2 md:columns-3 lg:columns-4 gap-0" aria-label="Product photos">
      <li v-for="product in products" :key="product.file" class="break-inside-avoid p-2">
        <button type="button" class="block w-full cursor-pointer" @click="openModal(product)">
          <img
            :src="'/images/' + product.file"
            :alt="product.alt"
            :width="product.width"
            :height="product.height"
            loading="lazy"
            decoding="async"
            class="block w-full h-auto"
          >
        </button>
      </li>
    </ul>
    <modal :url="modalPhoto?.url" :caption="modalPhoto?.alt" @close="modalPhoto = null"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/modal.vue';

defineProps({
  products: Array,
});

const modalPhoto = ref(null);

function openModal(product) {
  modalPhoto.value = { url: '/images/' + product.file, alt: product.alt };
}
</script>
