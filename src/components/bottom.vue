<template>
  <div class="bottom row flex flex-wrap justify-start">
      <div class="mt-8">
        <h2 class="text-2xl">Bakery Hours</h2>
        <div class="flex flex-wrap md:grid md:grid-cols-2">
          <label class="justify-self-start">Tuesday - Sunday:</label><p>9am - 4pm</p>
          <label class="justify-self-start">Monday</label><p>CLOSED</p>
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-2xl">Information</h2>
        <div class="flex flex-wrap md:grid md:grid-cols-2">
          <label>Email:</label><a href="mailto:thepanetteria@gmail.com">thepanetteria@gmail.com</a>
          <label>Phone:</label><a href="tel:519-730-1801">519-730-1801</a>
          <label>Socials:</label><p><a href="https://www.facebook.com/The.Panetteria/"><font-awesome-icon :icon="['fab', 'facebook']" /></a> <a href="https://www.instagram.com/the.panetteria"><font-awesome-icon :icon="['fab', 'instagram']" /></a></p>
        </div>
      </div>
      <div class="my-8">
        <h2 class="text-2xl">Location</h2>
        <p>248 Ramsay St</p>
        <p>Amherstburg, ON, Canada</p>
        <p>N9V 1Y2</p>
        <div class="mt-4 map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.237069628985!2d-83.1139347845518!3d42.10239327920499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3c84c9d7c001%3A0x1e02cf6f022618b!2s248%20Ramsay%20St%2C%20Amherstburg%2C%20ON%20N9V%201Y2!5e0!3m2!1sen!2sca!4v1618187247268!5m2!1sen!2sca" style="border:0;" allowfullscreen></iframe>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
</style>
