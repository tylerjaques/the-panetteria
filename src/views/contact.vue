<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell w-11/12">
        <h2 class="page-header libre-baskerville tracking-widest">CONTACT US</h2>
        <div class="flex">
          <div>
            <h2 class="text-xl md:text-2xl mb-4">Questions or Comments?</h2>
            <div class="col-span-6 sm:col-span-3">
              <label for="first_name" class="block">First name</label>
              <input v-model="firstName" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-3">
              <label for="last_name" class="block">Last name</label>
              <input v-model="lastName" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-4">
              <label for="email_address" class="block">Email address</label>
              <input v-model="email" name="email_address" id="email_address" autocomplete="email" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-4">
              <label for="phone_number" class="block">Phone</label>
              <input v-model="phone" name="phone_number" id="phone_number" autocomplete="tel" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-4 col-span-6 sm:col-span-4">
              <label for="message" class="block">Message</label>
              <textarea v-model="message" name="message" id="message" class="mt-1 h-24 p-1 block w-full border border-black"></textarea>
            </div>
            <button @click="sendEmail" class="p-1 border border-black mb-8">Send</button>
          </div>
        </div>
      </div>
    </div>
    <bottom />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');

const fullName = computed(() => `${firstName.value} ${lastName.value}`.trim());

function sendEmail() {
  const subject = `Contact Us: ${fullName.value}`;
  const body = `Full name: ${fullName.value}
Email: ${email.value}
Phone: ${phone.value}
Message: ${message.value}`;
  window.location.href = `mailto:thepanetteria@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  firstName.value = '';
  lastName.value = '';
  email.value = '';
  phone.value = '';
  message.value = '';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-image {
  background-image: url('/images/head-contact.png');
}
</style>
