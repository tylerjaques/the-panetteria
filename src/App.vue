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

    font-family: "Open Sans", sans-serif;
    color: #252525;

    @apply text-lg mx-8 my-8 md:mx-32 md:my-8
  }
</style>
