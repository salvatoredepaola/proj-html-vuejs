<script>
export default {
  name: 'NewArrivals'
}
</script>

<template>
<!-- NEW ARRIVALS -->
<div class="container my_bg-Arrivals my_space">
    <div class="row">
        <div class="col text-center text-white my_space-p">
            <p class="my_fs-10 fw-bold">FIND THE BEST ANIMAL SUPPLIES</p>
            <h1>New arrivals weekly</h1>
            <button class="my_btn-white">Learn more about us</button>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
p{
    margin-bottom: 30px;
}
h1{
    margin-bottom: 50px;
}
.my_bg-Arrivals{
    background-image: url("/img/banner-3-2x-scaled.jpg");
    background-position: center;
    background-size: cover;
}
.my_space{
    margin: 100px 0;
}
.my_space-p{
    padding: 160px 0;
}
</style>
