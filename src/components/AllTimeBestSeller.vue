<script>
export default {
  name: 'AllTimeBestSeller'
}
</script>

<template>
  <div class="row mb-5 ">
    <div class="col">
      <p class="ff-sans my_text-green">All-time best seller</p>
      <p class="my_fs-25">Items everyone loves</p>
    </div>
    <div class="col d-flex justify-content-end align-items-center">
      <button class="my_btn-green">View all products</button>
    </div>
  </div>
  <!-- BEST SELLER -->
  <div class="row row-cols-1 row-cols-md-4 g-4 my_mb-100">
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-21-800x800.jpg" class="card-img-top" alt="...">
        <div class="position-absolute my_top-28 my_start-38 text-white">
          <div class="my_box rounded-circle d-flex align-items-center justify-content-center fs-1">
            <font-awesome-icon icon="fa-regular fa-square-check" />
          </div>
          <a href="" class="ff-sans fw-bold">VIEW CART</a>
        </div>
        <div class="card-body text-center">
          <h5>Transport cage</h5>
          <span class="price">$25.00</span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-20-800x800.jpg" class="card-img-top" alt="...">
        <div class="position-absolute my_top-28 my_start-38 text-white">
          <div class="my_box rounded-circle d-flex align-items-center justify-content-center fs-1">
            <font-awesome-icon icon="fa-regular fa-square-check" />
          </div>
          <a href="" class="ff-sans fw-bold">VIEW CART</a>
        </div>
        <div class="card-body text-center">
          <h5>Dog leash</h5>
          <span class="price">$25.00</span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-16-800x800.jpg" class="card-img-top" alt="...">
        <div class="position-absolute my_top-28 my_start-38 text-white">
          <div class="my_box rounded-circle d-flex align-items-center justify-content-center fs-1">
            <font-awesome-icon icon="fa-regular fa-square-check" />
          </div>
          <a href="" class="ff-sans fw-bold">VIEW CART</a>
        </div>
        <div class="card-body text-center">
          <h5>Animal transport cage</h5>
          <div class="col">
            <span class="price-discount">$35.00</span>
            <span class="price"> $25.00</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-11-800x800.jpg" class="card-img-top" alt="...">
        <div class="position-absolute my_top-28 my_start-38 text-white">
          <div class="my_box rounded-circle d-flex align-items-center justify-content-center fs-1">
            <font-awesome-icon icon="fa-regular fa-square-check" />
          </div>
          <a href="" class="ff-sans fw-bold">VIEW CART</a>
        </div>
        <div class="card-body text-center">
          <h5>colorful cat leash</h5>
          <span class="price">$12.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img{
  border-radius: 0;
}
a{
  color: white;
  &:hover{
    text-decoration: underline
  }
}
h5,
span {
  font-family: sans-serif;
}

p {
  margin: 0;
}

.my_text-green {
  color: #3d6f43;
  font-size: 15px;
}

.my_fs-25 {
  font-size: 25px;
}
.my_box{
  width: 80px;
  height: 80px;
  opacity: 0.8;
  background-color: black;
}
.price {
  color: #3d6f43;
}

.price-discount {
  color: #3d6f43;
  font-size: 10px;
  text-decoration: line-through;
}
.my_top-28{
    top: 28% !important;
}
.my_start-38{
    left: 38% !important;
}
.card{
    .position-absolute{
        opacity: 0;
    }
    &:hover img{
        opacity: 0.9;
        filter: brightness(0.7);
    }
    &:hover .position-absolute{
        opacity: 1;
    }
}
</style>
