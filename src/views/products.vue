<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell">
        <div class="flex">
          <h2 class="page-header baskerville">PRODUCTS</h2>
        </div>
        <div class="mb-8">
          <p class="mb-4 w-11/12">The following is a sample of The Panetteria’s staples.</p>
          <p class="w-11/12">However, we encourage you to follow us on Instagram and Facebook for more up-to-date information regarding changing flavours and new products!</p>
        </div>
        <div>
        <product-list :products="products" />
        </div>
        <div class="mt-8">
          <p class="mb-16 w-11/12">Please note:  All efforts are made to accommodate allergies.
            However, given the size of our facility, we cannot guarantee
            that anything is 100% free of flour particles. For more information
            please contact us directly with your specific inquiries.</p>
        </div>
      </div>
      <button id="scrollToTop" @click="scrollToTop" :class="scrollToTopStyle" title="Go to top">Top</button>
    </div>
    <bottom />
  </div>
</template>

<script>
import top from '../components/top.vue';
import bottom from '../components/bottom.vue';
import productList from '../components/productList.vue'
import products from '../assets/data/products.json';

export default {
  name: 'Products',
  components: { top, bottom, productList },
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
    // window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    handleScroll() {
      console.log(document.body.scrollTop);
      console.log(document.documentElement.scrollTop);
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

  .bg-image {
    background-image: url('../../public/images/head-products.png');
  }
</style>
