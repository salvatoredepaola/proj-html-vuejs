<script>
export default {
 name: 'NewProducts'
}
</script>

<template>

<div class="row justify-content-center my_mt-100">
    <div class="col text-center my_680 mb-5">
      <h3 class="mb-4 pb-2">New products arrivals</h3>
      <p class="m-0 ff-sans my_text-green my_fs-12">Latest products</p>
    </div>
</div>
<div class="row row-cols-1 row-cols-md-3 g-4 my_mb-100">
  <!-- COLORED PET BED -->
  <div class="col">
    <div class="card border-0 rounded-0">
      <img src="/img/product-8-1024x1024.jpg" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Colored pet bed</h6>
        <span>$18.00  -  $26.00</span>
      </div>
    </div>
  </div>
  <!-- COLORFUL BALL SET -->
  <div class="col">
    <div class="card border-0 rounded-0">
      <img src="/img/product-2-1024x1024.jpg" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Colorful ball set</h6>
        <span>$29.00</span>
      </div>
    </div>
  </div>
  <!-- DOG BONE -->
  <div class="col ">
    <div class="card border-0 rounded-0 position-relative">
      <div class="m-2 p-1 text-white my_fs-10 rounded-circle my_bg-green position-absolute top-0 start-0">Sale!</div>
      <img src="/img/product-3-1024x1024.jpg" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Dog bone</h6>
        <span>$18.00</span>
      </div>
    </div>
  </div>
  <!-- ANIMAL TRANSPORT BAG -->
  <div class="col">
    <div class="card border-0 rounded-0">
      <img src="/img/product-4-1024x1024.jpg" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Animal transport bag</h6>
        <span>$29.00</span>
      </div>
    </div>
  </div>
  <!-- ANIMAL TRANSPORT CAGE -->
  <div class="col">
    <div class="card border-0 rounded-0">
      <img src="/img/product-5-1024x1024.jpg" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Animal transport cage</h6>
        <span>$35.00</span>
      </div>
    </div>
  </div>
  <!-- CLOSABLE CAT LITTER -->
  <div class="col">
    <div class="card border-0 rounded-0">
      <img src="/img/product-10-1024x1024.jpg" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h6>Closable cat litter</h6>
        <span>$16.00</span>
      </div>
    </div>
  </div>
</div>

</template>

<style lang="scss" scoped>
h6, span{
  font-family: sans-serif;
}
span{
  font-size: 12px;
  color: #3d6f43;
}


</style>