<script>
export default {
  name: 'BaseFooter'
}
</script>

<template>

<footer>
  <div class="container-fluid my_bg-darkgreen">
    <div class="container my_pt-100 my_pb-100 px-0">
      <div class="row my_border-bottom my_pb-60">
        <div class="col">
          <img src="/img/mobile-light-pet-logo-2x-400x105.png" alt="">
          <p class="text-white">1234 Avada Avenue Avadaville</p>
          <p class="text-white">info@your-company.com</p>
          <p class="text-white">Call us: (1) 234 5678</p>
        </div>
        <div class="col d-flex flex-column">
          <h6>Shop by brand</h6>
          <a class="text-white" href="">Bed</a>
          <a class="text-white" href="">Food</a>
          <a class="text-white" href="">Toys</a>
          <a class="text-white" href="">Transport</a>
        </div>
        <div class="col d-flex flex-column">
          <h6>Useful links</h6>
          <a class="text-white" href="">My account</a>
          <a class="text-white" href="">Orders</a>
          <a class="text-white" href="">Checkout</a>
          <a class="text-white" href="">Cart</a>
        </div>
        <div class="col my_bg-green-paw p-4 rounded ">
          <h5>Subscribe to our newsletter</h5>
          <div class="d-grid">
            <input type="text" class="form-control my_fs-10 ff-sans rounded-pill border-0 mb-4 px-4 py-3" placeholder="Insert your email ...*" aria-label="Example text with button addon" aria-describedby="button-addon1">
            <button class="my_btn-green" type="button" id="button-addon1">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col text-center">
          <a class="my_grey my_mx-15" href="">Home</a>
          <a class="my_grey my_mx-15" href="">About</a>
          <a class="my_grey my_mx-15" href="">Blog</a>
          <a class="my_grey my_mx-15" href="">Contact</a>
          <a class="my_grey my_mx-15" href="">Shop</a>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <font-awesome-icon class="my_mx-10 text-white" icon="fa-brands fa-facebook-f"/>
          <font-awesome-icon class="my_mx-10 text-white" icon="fa-brands fa-twitter"/>
          <font-awesome-icon class="my_mx-10 text-white" icon="fa-brands fa-instagram"/>
          <font-awesome-icon class="my_mx-10 text-white" icon="fa-brands fa-youtube" />
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row my_bg-dark text-center text-white">
      <div class="col">
        <p class="my_fs-12 mt-3 my_grey">© Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
      </div>
    </div>
  </div>
</footer>

</template>

<style lang="scss" scoped>
h5{
  color: white;
  font-family: sans-serif;
  font-size: 1rem;
  margin-bottom: 40px;
}
h6{
  color: white;
  font-family: sans-serif;
  margin-bottom: 48px;
}
img{
  width: 230px;
  margin-bottom: 40px;
}
p,a{
  font-size: 12px;
  font-family: sans-serif;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover{
    color: white;
  }
}
.my_bg-green-paw{
  background-color: #264229;
  background-image: url("/img/bg-transparent-3.png");
}
.my_mx-15{
  margin: 0 15px;
}
.my_mx-10{
  margin: 0 10px;
  font-size: 20px;
}
.my_pb-60{
  padding-bottom: 60px;
}
.my_border-bottom{
  border-bottom: 1px solid #bcc2bd;
}
</style>
