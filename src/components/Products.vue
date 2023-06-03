<script>
export default {
    name: 'Products'
}

</script>

<template>

    <div class="row text-white"> 
        <div class="col text-center my_bg-dog my_space">
            <h3 class="my_fs-10 mb-3">FIND THE BEST ANIMAL SUPPLIES</h3>
            <h2 class="mb-5">Popular accessories</h2>
            <button class="my_btn-white ">View all toys accessories</button>
        </div>  
        <div class="col text-center my_bg-cat my_space">
            <h3 class="my_fs-10 mb-3">FIND THE BEST ANIMAL SUPPLIES</h3>
            <h2 class="mb-5">Popular accessories</h2>
            <button class="my_btn-white">View all toys accessories</button>
        </div>
    </div>
    <div class="container text-white text-center">
        <div class="row row-cols-1 row-cols-md-4 g-4 my_space-y">
        <div class="col">
            <font-awesome-icon icon="truck" class="my_fs-40"/>
            <p class="my_fs-12 my_grey">Free worldwide deliveries</p>
        </div>
        <div class="col">
            <font-awesome-icon icon="map" class="my_fs-40"/>
            <p class="my_fs-12 my_grey">Find stores near you</p>
        </div>
        <div class="col">
            <font-awesome-icon icon="dollar-sign" class="my_fs-40"/>
            <p class="my_fs-12 my_grey">Best prices guarranteed</p>
        </div>
        <div class="col">
            <font-awesome-icon icon="credit-card" class="my_fs-40"/>
            <p class="my_fs-12 my_grey">All credit card accepted</p>
        </div>
    </div>
    </div>
    

</template>

<style lang="scss" scoped>


.my_bg-dog {
    background-image: url("/img/banner-8-2x.jpg");
    background-size: cover;
}
.my_bg-cat {
    background-image: url("/img/banner-9-2x.jpg");
    background-size: cover;
}
.my_space{
    padding: 150px 0;
}
.my_space-y{
    padding: 100px 0;
}
.my_fs-40{
    font-size: 40px;
    padding-bottom: 30px;
}
</style>