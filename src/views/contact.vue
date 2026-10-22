<template>
  <div class="page">
    <top class="bg-image"/>
    <main id="main" tabindex="-1" class="middle">
      <h1 class="page-header">Contact us</h1>
      <form class="contact-form max-w-xl mb-8" @submit.prevent="sendEmail">
        <h2 class="text-xl md:text-2xl mb-2">Questions or Comments?</h2>
        <p class="mb-6 text-base">Sending opens your email app with your message filled in.
          Fields marked * are required.</p>
        <div class="grid gap-4 sm:grid-cols-2">
          <div>
            <label for="first_name">First name *</label>
            <input v-model.trim="firstName" id="first_name" name="first_name" autocomplete="given-name" required>
          </div>
          <div>
            <label for="last_name">Last name</label>
            <input v-model.trim="lastName" id="last_name" name="last_name" autocomplete="family-name">
          </div>
          <div>
            <label for="email_address">Email address *</label>
            <input v-model.trim="email" type="email" id="email_address" name="email_address" autocomplete="email" required>
          </div>
          <div>
            <label for="phone_number">Phone</label>
            <input v-model.trim="phone" type="tel" id="phone_number" name="phone_number" autocomplete="tel">
          </div>
          <div class="sm:col-span-2">
            <label for="message">Message *</label>
            <textarea v-model.trim="message" id="message" name="message" rows="5" required></textarea>
          </div>
        </div>
        <button type="submit" class="button mt-6">Send</button>
        <p class="mt-4 text-base" role="status">
          <template v-if="sent">
            Your email app should now be open with your message. If it didn’t open,
            email us at <a :href="`mailto:${business.email}`">{{ business.email }}</a>.
          </template>
        </p>
      </form>
    </main>
    <bottom />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import config from '../assets/data/config.json';

const { business } = config;

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const sent = ref(false);

const fullName = computed(() => `${firstName.value} ${lastName.value}`.trim());

// The form has no backend: it hands the message to the visitor's email app.
// We can't tell whether that worked, so the fields keep their text.
function sendEmail() {
  const subject = `Contact Us: ${fullName.value}`;
  const body = `Full name: ${fullName.value}
Email: ${email.value}
Phone: ${phone.value}
Message: ${message.value}`;
  window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  sent.value = true;
}
</script>

<style scoped>
.bg-image {
  background-image: url('/images/head-contact-1000.webp');
}

@media (min-width: 1000px), (min-resolution: 2dppx) {
  .bg-image {
    background-image: url('/images/head-contact-2000.webp');
  }
}
</style>
