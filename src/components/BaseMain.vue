<script>
import Category from './Category.vue';
import Food from './Food.vue';
import NewArrivals from './NewArrivals.vue';
import AllTimeBestSeller from './AllTimeBestSeller.vue';
import TestimonialsNewsletter from './Testimonials-Newsletter.vue';
import TipsTricks from './Tips&Tricks.vue';




export default {
  name: 'BaseMain',
  components: {
    Category,
    Food,
    NewArrivals,
    AllTimeBestSeller,
    TestimonialsNewsletter,
    TipsTricks,
  }
}
</script>

<template>

<main>

<div class="container">
  <!-- BROWSE BY CATEGORY -->
  <Category/>
  <!-- FOOD -->
  <Food/>
  <!-- NEW ARRIVALS -->
  <NewArrivals/>
  <!-- BEST SELLER -->
  <AllTimeBestSeller/>
</div>
<div class="container-fluid my_bg">
  <!-- TestimonialsNewsletter -->
  <TestimonialsNewsletter/>
</div>
<div class="my_h500"></div>
<div class="container">
  <!-- TipsTricks -->
  <TipsTricks/>
</div>


</main>

</template>

<style lang="scss" scoped>
.my_bg{
  background-image: url("/img/bg-transparent-3.png");
  background-color: #1e3120;
}
.my_h500{
  height: 500px;
}
</style>
