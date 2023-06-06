<script>
export default {
  name: 'Category'
}
</script>

<template>
  <!-- BROWSE BY CATEGORY -->
  <div class="row justify-content-center my_pt-100">
    <div class="col text-center my_680 mb-5">
      <h3>Browse by category</h3>
      <p class="ff-sans">Augue purus et, tincidunt condimentum mauris. As nibh rutrum mi in. Nisi, vitae interdum eleifend
        dui, consequat nulla rhoncus dictum. Viverra</p>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-9-1024x1024.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5>Bed (1)</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-3-1024x1024.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5>Food (6)</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-2-1024x1024.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5>Toys (6)</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card border-0 rounded-0">
        <img src="/img/product-4-1024x1024.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5>Transport (6)</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h5 {
  font-family: sans-serif;
}

.my_680 {
  max-width: 680px;
}
</style>
