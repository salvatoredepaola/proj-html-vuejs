<script>
export default {
    name: 'Tips&Tricks'
}
</script>

<template>

<div class="row">
    <div class="col text-center">
        <h3>Get the best tips & tricks</h3>
        <p class="my_text-green my_fs-12">Recent articles</p>
    </div>
</div>
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

.my_text-green{
    color: #3d6f43;
}
.my_fs-12{
  font-size: 12px;
}
.my_fs-10{
  font-size: 10px;
}
</style>