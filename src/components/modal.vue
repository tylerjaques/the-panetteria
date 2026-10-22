<template>
  <!-- Native <dialog> opened with showModal(): it traps focus, makes the page
       behind it inert, closes on Escape, and returns focus to the opener. -->
  <dialog ref="dialog" class="modal" :aria-label="caption" @close="$emit('close')" @click="closeOnBackdrop">
    <button type="button" class="close" aria-label="Close" @click="dialog.close()">
      <span aria-hidden="true">&times;</span>
    </button>
    <figure v-if="url">
      <img :src="url" :alt="caption" class="modal-content">
      <figcaption class="caption">{{ caption }}</figcaption>
    </figure>
  </dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  url: String,
  caption: String,
});
defineEmits(['close']);

const dialog = ref(null);

// Open whenever a photo is set, close when it's cleared.
watch(() => props.url, (url) => {
  if (url && !dialog.value.open) dialog.value.showModal();
  else if (!url && dialog.value.open) dialog.value.close();
});

// A click straight on the <dialog> element (not its contents) is the backdrop.
function closeOnBackdrop(event) {
  if (event.target === dialog.value) dialog.value.close();
}
</script>

<style scoped>
  .modal {
    width: min(100%, 760px);
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    padding: 3.5rem 1.5rem 1rem;
    background: transparent;
    overflow: visible;
  }

  .modal::backdrop {
    background: rgb(0 0 0 / 0.9);
  }

  .modal-content {
    display: block;
    width: 100%;
    max-height: 75vh;
    object-fit: contain;
  }

  .caption {
    padding: 0.75rem 0;
    color: #ccc;
    text-align: center;
    font-family: 'Montserrat', sans-serif;
  }

  .close {
    position: absolute;
    top: 0;
    right: 1rem;
    padding: 0 0.5rem;
    color: #f1f1f1;
    font-size: 2.5rem;
    line-height: 1;
    cursor: pointer;
    transition: color 0.3s;
  }

  .close:hover {
    color: #bbb;
  }
</style>
