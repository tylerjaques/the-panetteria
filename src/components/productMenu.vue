<template>
  <div v-if="menu" class="grid grid-cols-1 md:grid-cols-3 gap-x-8 mb-8">
    <section v-for="section in menu.sections" :key="section.name">
      <h2 class="text-4xl my-4 libre-baskerville tracking-widest">{{ section.name }}</h2>
      <ul>
        <li v-for="item in section.items" :key="item.name" class="mb-1">
          {{ item.name }}
          <span v-if="item.price" class="text-base text-gray-700">· {{ item.price }}</span>
          <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
          <p v-if="item.description" class="text-base text-gray-700">{{ item.description }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
// Each menu item is { name, price?, description?, tags? } from config.json.
defineProps({
  menu: Object,
});
</script>
