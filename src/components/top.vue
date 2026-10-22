<template>
  <header class="top text-lg md:text-2xl text-white tracking-widest" :class="{ 'bg-black/50': overlay }">
    <div class="mx-4 md:mx-16 mt-4 md:mt-8 mb-4 md:mb-8">
      <router-link class="title inline-block" to="/">
        <img src="/images/Logo.jpg" alt="The Panetteria home" width="612" height="205">
      </router-link>
    </div>
    <nav aria-label="Main" class="nav">
      <router-link class="nav-link" to="/menu">Menu</router-link>
      <router-link class="nav-link" to="/about">About us</router-link>
      <router-link class="nav-link" to="/contact">Contact us</router-link>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  // Darken the header so it reads over the full-page photo on the home page.
  overlay: Boolean,
});
</script>
