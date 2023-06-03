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
    <div class="row row-cols-1 row-cols-md-4 g-4 mb-3">
        <div class="col">
            <div class="card border-0 rounded-0">
                <img src="/img/blog-1-800x800.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6>How to 'loose leash walk' your dog</h6>
                    <small class="my_fs-10">April 17th, 2020</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card border-0 rounded-0">
                <img src="/img/blog-2-800x800.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6>Stop cats from scratching furniture</h6>
                    <small class="my_fs-10">April 17th, 2020</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card border-0 rounded-0">
                <img src="/img/blog-3-800x800.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6>Where to buy the best pet food</h6>
                    <small class="my_fs-10">April 17th, 2020</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card border-0 rounded-0">
                <img src="/img/blog-4-800x800.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6>Proper care for your pet toys</h6>
                    <small class="my_fs-10">April 17th, 2020</small>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
            <button class="my_btn">Read all article</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
small{
    color: #9ca59d;
}
.my_text-green {
    color: #3d6f43;
}

.my_fs-12 {
    font-size: 12px;
}

.my_fs-10 {
    font-size: 10px;
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