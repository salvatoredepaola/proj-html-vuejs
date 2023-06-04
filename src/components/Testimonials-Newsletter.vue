<script>
export default {
    name: 'Testimonials-Newsletter'
}
</script>

<template>
  <div class="container position-relative pb-5 ">
    <div class="row">
      <div class="col text-white text-center my_m130">
        <h2 class="mb-5">Users testimonials</h2>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4 mt-4 pb-5">
      <!-- LISA -->
      <div class="col">
        <div class="card my_bg-paw border-0 rounded-0 my_bg-none">
          <img src="/img/avatar-3.jpg" class="card-img-top rounded-circle" alt="...">
          <div class="card-body text-center text-white p-4">
            <p class="ff-sans my_fs-12 mx-5">Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla
              quis nunc, tincidunt eu. Eu.</p>
            <p class="ff-sans my_fs-12 my_color-grey">Lisa Smith, ThemeFusion</p>
          </div>
        </div>
      </div>
      <!-- MELISSA -->
      <div class="col">
        <div class="card my_bg-paw border-0 rounded-0 my_bg-none">
          <img src="/img/avatar-1.jpg" class="card-img-top rounded-circle" alt="...">
          <div class="card-body text-center text-white ">
            <p class="ff-sans my_fs-12 mx-5">Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis
              porttitor volutpat vestibulum ac diam sit.</p>
            <p class="ff-sans my_fs-12 my_color-grey">Melissa Green, ThemeFusion</p>
          </div>
        </div>
      </div>
      <!-- SAM -->
      <div class="col">
        <div class="card my_bg-paw border-0 rounded-0 my_bg-none">
          <img src="/img/avatar-4.jpg" class="card-img-top rounded-circle " alt="...">
          <div class="card-body text-center text-white">
            <p class="ff-sans my_fs-12 mx-5">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget
              tortor risus vestibulum ante ipsum.</p>
            <p class="ff-sans my_fs-12 my_color-grey">Sam Lewis, ThemeFusion</p>
          </div>
        </div>
      </div>
    </div>
    <!-- JOIN NEWSLETTER -->
    <div class="container position-absolute top-100 start-50 translate-middle my_bg-food my_top">
      <div class="row my_p100">
        <div class="col-7">
          <h2 class="mb-5">Join our newsletter</h2>
          <p class="ff-sans mt-3 mb-5 my_fs-10">Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero
            viverra vehicula nullam ut nisl.</p>
          <div class="input-group ">
            <input type="text" class="me-4 my_w420 my_fs-10 rounded-pill border-0"
              placeholder="     Insert your email...*" aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="fw-bold rounded-pill my_btn-green " type="button" id="button-addon2">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100px;
  margin: 0 auto;
}

.my_bg-none {
  --bs-card-bg: ;
}

.my_bg-food {
  background-image: url("/img/banner-7-2x-scaled.jpg");
  background-position: center;
  background-size: cover;
}

.my_color-grey {
  color: #9ca59d;
}

.my_fs-10 {
  font-size: 10px;
}

.my_fs-12 {
  font-size: 12px;
}

.my_m130 {
  margin-top: 130px;
}

.my_p100 {
  padding: 130px;
}

.my_w420 {
  width: 420px;
  background-color: #f2f3f2;
}

input:focus {
  outline: none;
}

.my_top {
  top: 130% !important
}</style>