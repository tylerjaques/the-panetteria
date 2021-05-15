<template>
  <div id="app">
    <div class="flex-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  .body {
    font-family: "Open Sans", sans-serif;
    flex-grow: 1;

    @apply text-lg
  }

  .flex-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: stretch;
  }
</style>
