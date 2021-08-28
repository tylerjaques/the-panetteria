<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell w-11/12">
        <div class="flex">
          <h2 class="page-header baskerville">CONTACT US</h2>
        </div>
        <div class="flex">
          <div>
            <h2 class="text-3xl mb-4">Questions or Comments?</h2>
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

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';

export default {
  name: 'Contact',
  components: { top, bottom },
  props: {
    msg: String,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }
  },
  methods: {
    sendEmail() {
      let subject = `Contact Us: ${this.fullName}`;
      let body = `Full name: ${this.fullName}%0D%0AEmail: ${this.email}%0D%0APhone: ${this.phone}%0D%0AMessage: ${this.message}`;
      window.open(`mailto:info@thepaneterria.com?subject=${subject}&body=${body}`);
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bg-image {
  background-image: url('/images/head-contact.png');
}
</style>
