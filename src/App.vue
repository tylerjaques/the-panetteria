<template>
  <div id="app">
    <div class="flex-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
  .body {
    display: flex;

    min-height: 302px;
    flex-direction: column;

    font-family: "Libre Baskerville", sans-serif;
    color: #252525;

    @apply text-lg md:text-2xl mx-4 my-8 md:mx-16 md:my-8;
  }
</style>
