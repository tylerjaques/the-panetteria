<template>
  <div>
    <top background-image="url('https://i.imgur.com/3IZXG4X.jpg')"/>
    <div class="body">
      <div class="flex justify-center">
        <h2 class="text-5xl mt-4 mb-8">ABOUT US</h2>
      </div>
      <div class="mb-8 inline-block flex justify-center">
        <p>Born and raised in Scotland, Simon Briggs graduated from the Stratford Chefs School in 2011 and has worked in various establishments in Stratford, Guelph, Kitchener, and London. His style of food is steeped in traditional French technique. Simon was previously an instructor with the Stratford Chefs School for 7 years teaching both pastry and cookery, as well as at the London Training Centre for 2 years as a chef instructor. In his free time, Simon is an avid gardener.</p>
      </div>
      <div class="mb-8 inline-block flex justify-center">
        <p>Anna Marano was born and raised in Amherstburg, Ontario. Also a graduate of the Stratford Chefs School in 2017, she has worked in fine dining and upscale bistros in Stratford. She has also spent time working as a teaching assistant and chef-instructor to a variety of age groups. Anna is inspired by classical French and rustic Italian cuisines. After spending some time away, she is thrilled to be back in her hometown sharing what she loves with her community.</p>
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

</style>
