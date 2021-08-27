<template>
  <div class="table">
    <top class="bg-image bg-no-repeat bg-top"/>
    <div class="middle row">
      <div class="container cell w-11/12">
        <div class="flex">
          <h2 class="page-header baskerville">ABOUT US</h2>
        </div>
        <div class="flex flex-wrap">
        <div class="mb-8 text-base md:text-2xl">
          <p>Located in the heart of downtown historic Amherstburg,
            The Panetteria is an artisan bakery specializing in
            bread and sweet & savoury pastries. Focus on quality,
            small-scale production is at the heart of what we do. We make
            our breads and pastries by hand daily.  We focus on using
            excellent ingredients with a seasonal approach
            to provide variety, flavour and quality.</p>
        </div>
        <div class="mb-8 text-base md:text-2xl">
          <img alt="Photo of Simon" class="photo" src="images/simon.jpg" />
          <p>Born and raised in Scotland, Simon Briggs graduated from the Stratford Chefs
            School in 2011 and has worked in various establishments in Stratford, Kitchener,
            and London. His style of food is steeped in traditional French technique.
            Simon was previously an instructor with the Stratford Chefs School for 7
            years teaching both pastry and cookery, as well as at the London Training
            Centre for 2 years as a chef-instructor. In his free time, Simon is an avid gardener.</p>
        </div>
        <div class="mb-8 text-base md:text-2xl">
          <img alt="Photo of Anna" class="photo" src="images/anna.jpg" />
          <p>Anna Marano was born and raised in Amherstburg, Ontario. Also a graduate of the
            Stratford Chefs School in 2017, she has worked in fine dining and upscale bistros
            in Stratford. She has also spent time working as a teaching assistant and
            chef-instructor to a variety of age groups. Anna is inspired by classical
            French and rustic Italian cuisines. After spending some time away, she is
            thrilled to be back in her hometown sharing what she loves with her community.</p>
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
  name: 'About',
  components: { top, bottom },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .photo {
    @apply float-left w-1/3 md:w-1/12 mr-4
  }

  .bg-image {
    background-image: url('/images/AlmondCroissant.png');
  }
</style>
