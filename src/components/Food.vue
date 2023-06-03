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
          <button class="my_btn btn">Shop dry food</button>
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
          <button class="my_btn btn">Shop moist food</button>
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
          <button class="my_btn btn">Shop frozen food</button>
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
.my_bg-paw{
  background-image: url("/img/bg-transparent-3.png");
  background-color: #1e3120;
}
.my_text-green{
  color: #3d6f43;
}
.my_bg-green{
  background-color: #3d6f43;
}

.my_fs-12{
  font-size: 12px;
}
.my_btn{
  color: white;
  padding: 16px 30px;
  font-size: 10px;
  background-color: #3d6f43;
  border-radius: 25px;
  border: 0;
}
</style>
