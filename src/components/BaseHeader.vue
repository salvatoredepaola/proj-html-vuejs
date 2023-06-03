<script>
import Dropdowns from './Dropdowns.vue';

export default {
  name: 'BaseHeader',
  components: {
    Dropdowns,
  },
}
</script>

<template>


<header>
  <div class="container-fluid border-bottom p-3">
    <div class="container">
      <div class="row">
        <!-- MERCH -->
        <div class="col d-flex justify-content-between align-items-center my_fs-12">
          <img class="my_w235" src="/img/dark-pet-logo.png" alt="">
        
          <!-- SEARCH -->
   
          <div class="input-group flex-nowrap my_w370 rounded-circle">
            <span class="my_fs-12 my_bg-white input-group-text my_border-start" id="addon-wrapping">@</span>
            <input type="text" class="my_fs-12 border-start-0 my_bg-white form-control my_border-end" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping">
          </div>

        <!-- QUESTIONS -->
          
          <p class="mb-0"><span class="fw-bold">Questions?</span> Call us : 1.800.123.4567</p>
        
        <!-- ICONE -->
          
          @
          @
        </div>


      </div>
    </div>
  </div>
  <!-- DROP DOWNS E LINKS -->
  <Dropdowns/>
  <div class="container-fluid my_bg-darkgreen my_bg-paw px-0">
    <div class="container">
      <div class="row text-light text-center my_fs-12">
        <div class="col">
          <p class="py-3"><span class="fw-bold">Internationals</span> Shipping Services</p>
        </div>
        <div class="col">
          <p class="py-3">See our <span class="fw-bold">store hours</span> and Services</p>
        </div>
        <div class="col">
          <p class="py-3">We price match to give you the <span class="fw-bold">best deals</span></p>
        </div>
      </div>
    </div>
    <!-- JUMBOTRON -->
    <div class="container-fluid my_bg-dog">
      <div class="container">
        <div class="row">
          <div class="col-5 text-light py-5 my-5">
            <div class="row py-5 my-5">
              <div class="col py-5 my-3">
                <p class="my_fs-10 fw-bold">FIND THE BEST ANIMAL SUPPLIES</p >
                <h1 class="py-5">We know animals are a part of your family, let us help take care of them</h1>
                <button class="my_btn-white">Learn more about us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col d-flex text-white justify-content-center align-items-center">
          <img class="mt-4" src="/img/food-transparent-5-200x112.png" alt="">
          <p class="mx-4 ">Get $25 OFF your first purchase of our homemade pet food!</p>  
          <a href="" class="my_grey">Visit the shop</a>
        </div>
      </div>
    </div>
  </div>
  
  
</header>

</template>

<style lang="scss" scoped>

p{
  margin: 0;
}
.my_border-end{
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 0;
}
.my_border-start{
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border: 0;
}
.my_w235{
  width: 235px;
}
.my_w370{
  width: 370px;
}
.my_140{
  height: 140px;
}

.my_bg-white{
  background-color: #f2f3f2;
}


.my_bg-dog{
  background-image: url("/img/banner-5-2x-scaled.jpg");
  background-position: center;
  background-size: cover;
}




</style>
