<template>
  <aside
    class="flex items-start justify-between gap-4 p-4 bg-primary text-black montserrat"
    aria-label="Announcement"
  >
    <p class="text-lg font-semibold">
      <slot></slot>
    </p>
    <button type="button" class="shrink-0 px-2 text-2xl leading-none cursor-pointer" aria-label="Dismiss" @click="$emit('close')">
      <span aria-hidden="true">&times;</span>
    </button>
  </aside>
</template>

<script setup>
defineEmits(['close']);
</script>
