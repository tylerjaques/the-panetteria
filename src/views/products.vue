<template>
  <div>
    <top background-image="url('https://i.imgur.com/Q19KiR1.jpg')"/>
    <div class="body">
      <div class="flex">
        <h2 class="text-5xl mt-4 mb-8">PRODUCTS</h2>
      </div>
      <p class="mb-4">The following is a sample of The Panetteria’s staples. However, we encourage you to follow us on Instagram and Facebook for more up-to-date information regarding changing flavours and new products!</p>
      <div v-for="category in products.categories">
        <h3 class="text-4xl my-4">{{ category.category }}</h3>
        <div v-for="sub in category.subcategories">
          <div class="text-3xl my-4 ">{{ sub.category }}</div>
          <div class="grid grid-cols-2 md:grid-cols-3">
            <div class="w-5/6 mb-4" v-for="product in sub.products">
              <img :src="product.photo" :alt="product.name" />
              <p>{{ product.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <p>Please note:  All efforts are made to accommodate allergies.
          However, given the size of our facility, we cannot guarantee
          that anything is 100% free of flour particles. For more information
          please contact us directly with your specific inquiries.</p>
      </div>
    </div>
    <button id="scrollToTop" @click="scrollToTop" :class="scrollToTopStyle" title="Go to top">Top</button>
    <bottom />
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import products from '../assets/data/products.json';

export default {
  name: 'Products',
  components: { top, bottom },
  props: {
    msg: String,
  },
  data(){
    return {
      products: products,
      scrollToTopStyle: 'hidden'
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    handleScroll() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.scrollToTopStyle = "block";
      } else {
        this.scrollToTopStyle = "hidden";
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #scrollToTop {
    position: fixed; /* Fixed/sticky position */
    bottom: 20px; /* Place the button at the bottom of the page */
    right: 30px; /* Place the button 30px from the right */
    z-index: 99; /* Make sure it does not overlap */
    border: none; /* Remove borders */
    outline: none; /* Remove outline */
    background-color: black; /* Set a background color */
    color: white; /* Text color */
    cursor: pointer; /* Add a mouse pointer on hover */
    padding: 15px; /* Some padding */
    font-size: 1rem; /* Increase font size */
  }
</style>
