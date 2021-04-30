<template>
  <div>
    <header></header>
    <div class="mx-32 mb-32">
      <div class="flex justify-center py-16">
        <h2 class="text-5xl">CONTACT US</h2>
      </div>
      <div class="flex justify-around">

        <div class="mb-8">
          <h2 class="text-2xl">Bakery Hours</h2>
          <div class="mb-8 grid grid-cols-2">
            <label class="whitespace-nowrap">Tuesday - Saturday:</label><p>8am - 6pm</p>
            <label>Sunday:</label><p>9am - 3pm</p>
            <label>Monday:</label><p>CLOSED</p>
          </div>
          <h2 class="text-2xl">Information</h2>
          <div class="mb-8 grid grid-cols-2">
            <label>Email:</label><a href="mailto:info@thepanetteria.com">info@thepanetteria.com</a>
            <label>Phone:</label><a href="tel:555-555-5555">555-555-5555</a>
            <label>Socials:</label><div><a href="#"><i class="fab fa-instagram-square"></i></a> <a href="#"><i class="fab fa-facebook-square"></i></a></div>
          </div>
          <h2 class="text-2xl">Location</h2>
          <p>248 Ramsay St</p>
          <p>Amherstburg, ON, Canada</p>
          <p>N9V 1Y2</p>
          <div class="mt-8 map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.237069628985!2d-83.1139347845518!3d42.10239327920499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b3c84c9d7c001%3A0x1e02cf6f022618b!2s248%20Ramsay%20St%2C%20Amherstburg%2C%20ON%20N9V%201Y2!5e0!3m2!1sen!2sca!4v1618187247268!5m2!1sen!2sca" style="border:0;" allowfullscreen></iframe>
          </div>
        </div>

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
      <div>

      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import Header from '../components/top.vue';

export default {
  name: 'Contact',
  components: { Header },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
