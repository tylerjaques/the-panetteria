<template>
  <div>
    <div v-if="menu" class="grid grid-cols-1 md:grid-cols-3">
      <div v-for="section in menu.sections">
          <h3 class="text-4xl my-4 libre-baskerville tracking-widest">{{ section.name }}</h3>
          <div v-for="item in section.items">
            <p>{{ item }}</p>
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

