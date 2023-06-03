<script>
export default {
  name: 'Food'
}
</script>

<template>


  <div class="row row-cols-1 row-cols-md-3 g-4 ">
    <!-- KIBBLE -->
    <div class="col">
      <div class="card my_bg-paw border-0 rounded-0">
        <div class="card-body text-center">
          <h5 class="text-white p-3 fs-3">Kibble</h5>
          <p class="my_text-green my_fs-12 fw-bold">Dry dog food</p>
        </div>
        <img src="/img/food-transparent-18-400x420.png" class="card-img-top px-5 " alt="...">
        <div class="card-body text-center">
          <button class="my_btn-green">Shop dry food</button>
        </div>
      </div>
    </div>
    <!-- MOIST -->
    <div class="col">
      <div class="card my_bg-paw border-0 rounded-0">
        <div class="card-body text-center">
          <h5 class="text-white p-3 fs-3">Moist</h5>
          <p class="my_text-green my_fs-12 fw-bold">Canned dog food</p>
        </div>
        <img src="/img/food-transparent-17-400x420.png" class="card-img-top px-5 " alt="...">
        <div class="card-body text-center">
          <button class="my_btn-green">Shop moist food</button>
        </div>
      </div>
    </div>
    <!-- FROZEN -->
    <div class="col">
      <div class="card my_bg-paw border-0 rounded-0">
        <div class="card-body text-center">
          <h5 class="text-white p-3 fs-3">Frozen</h5>
          <p class="my_text-green my_fs-12 fw-bold">Freeze-Dried dog food</p>
        </div>
        <img src="/img/food-transparent-16-400x420.png" class="card-img-top px-5 " alt="...">
        <div class="card-body text-center">
          <button class="my_btn-green">Shop frozen food</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
h5{
    margin: 0;
}
p{
    margin: 0;
}
</style>
