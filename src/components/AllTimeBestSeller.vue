<script>
export default {
  name: 'AllTimeBestSeller'
}
</script>

<template>

<div class="row">
    <div class="col">
        <p class="my_text-green">All-time best seller</p>
        <p class="my_fs-25">Items everyone loves</p>
    </div>
    <div class="col d-flex justify-content-end align-items-center">
        <button class="my_btn-green">View all products</button>
    </div>
</div>
<!-- BEST SELLER -->
<div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-21-800x800.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5>Transport cage</h5>
          <span class="price">$25.00</span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-20-800x800.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5>Dog leash</h5>
          <span class="price">$25.00</span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-16-800x800.jpg" class="card-img-top" alt="...">
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
        <div class="card-body text-center">
          <h5>colorful cat leash</h5>
          <span class="price">$12.00</span>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
p{
    margin: 0;
}

.my_text-green{
    color: #3d6f43;
    font-size: 15px;
}
.my_fs-25{
    font-size: 25px;
}
.price{
    color: #3d6f43;
}
.price-discount{
    color: #3d6f43;
    font-size: 10px;
    text-decoration:line-through;
}
</style>
