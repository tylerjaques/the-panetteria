<template>
  <div>
    <top background-image="url('https://i.imgur.com/OpCVDF5.jpg')"/>
    <div class="body">
      <div class="flex justify-center">
        <h2 class="text-5xl mt-4 mb-8">CONTACT US</h2>
      </div>
      <div class="flex justify-around">
        <div class="mb-4">
          <h2 class="text-2xl">Questions or Comments?</h2>
          <form action="#" method="POST">
            <div class="col-span-6 sm:col-span-3">
              <label for="first_name" class="block">First name</label>
              <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-3">
              <label for="last_name" class="block">Last name</label>
              <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-4">
              <label for="email_address" class="block">Email address</label>
              <input type="email" name="email_address" id="email_address" autocomplete="email" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-2 col-span-6 sm:col-span-4">
              <label for="phone_number" class="block">Phone</label>
              <input type="tel" name="phone_number" id="phone_number" autocomplete="tel" class="mt-1 p-1 block w-full border border-black">
            </div>
            <div class="mb-4 col-span-6 sm:col-span-4">
              <label for="message" class="block">Message</label>
              <textarea name="message" id="message" class="mt-1 h-24 p-1 block w-full border border-black"></textarea>
            </div>
            <input class="p-1 border border-black" type="submit" value="Send">
          </form>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
