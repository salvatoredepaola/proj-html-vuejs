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
          <a href=""><img class="my_w235" src="/img/dark-pet-logo.png" alt=""></a>
        
          <!-- SEARCH -->
   
          <div class="input-group flex-nowrap my_w370 rounded-circle">
            <span class="ff-sans my_fs-12 my_bg-white input-group-text my_border-start" id="addon-wrapping">@</span>
            <input type="text" class="ff-sans my_fs-12 border-start-0 my_bg-white form-control my_border-end" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping">
          </div>

        <!-- QUESTIONS -->
          
          <p class="mb-0 ff-sans"><span class="fw-bold">Questions?</span> Call us : 1.800.123.4567</p>
        
        <!-- ICONE -->
          <div>
            <font-awesome-icon icon="fa-solid fa-bag-shopping" class="mx-3"/>
            <font-awesome-icon icon="fa-regular fa-user" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- DROP DOWNS E LINKS -->
  <Dropdowns/>
  <div class="container-fluid my_bg-darkgreen my_bg-paw px-0 position-relative">
    <div class="position-absolute my_top-10 my_end-10 my_box rounded-2 text-center pt-2 ff-sans">
      <font-awesome-icon icon="fa-regular fa-folder-open" class="fs-4"/>
      <p>Demos</p>
    </div>
    <div class="position-absolute my_top-85 my_end-10 my_box rounded-2 text-center pt-2 ff-sans">
      <span class="my_text-light-green align-top">$</span>
      <span class="my_text-light-green my_fs-22">39</span>
      <p>On Sale</p> 
    </div>
    <div class="container">
      <div class="row text-light text-center my_fs-12">
        <div class="col">
          <p class="py-3 ff-sans"><span class="fw-bold"><font-awesome-icon icon="map"/> Internationals</span> Shipping Services</p>
        </div>
        <div class="col">
          <p class="py-3 ff-sans"><font-awesome-icon icon="clock" /> See our <span class="fw-bold">store hours</span> and Services</p>
        </div>
        <div class="col">
          <p class="py-3 ff-sans"><font-awesome-icon icon="check" /> We price match to give you the <span class="fw-bold">best deals</span></p>
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
                <p class="my_fs-10 fw-bold ff-sans">FIND THE BEST ANIMAL SUPPLIES</p >
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
          <p class="mx-4 ff-sans">Get $25 OFF your first purchase of our homemade pet food!</p>  
          <a href="" class="my_grey ff-sans">Visit the shop</a>
        </div>
      </div>
    </div>
  </div>
  
  
</header>

</template>

<style lang="scss" scoped>

.my_fs-22{
  font-size: 22px;
}

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

.my_box{
  width: 66px;
  height: 66px;
  background-color: white;
}
.my_end-10{
  right: 10px;
}
.my_top-10{
  top: 10px;
}
.my_top-85{
  top: 85px;
}

.my_text-light-green{
  color: #65bc7b;
}


</style>
