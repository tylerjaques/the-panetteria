<template>
  <div>
    <div
      class="text-center flex flex-col p-4 md:text-left md:flex-row md:items-center md:justify-between md:p-4 bg-primary cursor-pointer"
      id="messageModal"
      @click="$emit('close')"
    >
      <div class="text-xl font-semibold">
          <slot></slot>
      </div>

      <div class="mt-3 md:mt-0 md:ml-2">
        <button class="text-lg font-semibold">
          <span>x</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    url: String,
    caption: String
  }
};
</script>

<style scoped>
</style>
