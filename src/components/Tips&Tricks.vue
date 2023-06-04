<script>
export default {
    name: 'Tips&Tricks'
}
</script>

<template>
    <div class="row my_mb-50">
        <div class="col text-center">
            <h3>Get the best tips & tricks</h3>
            <p class="ff-sans my_text-green my_fs-12">Recent articles</p>
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
    <div class="row my_mb-50">
        <div class="col d-flex justify-content-center align-items-center">
            <button class="my_btn-green">Read all article</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h6 {
    font-family: sans-serif;
}

small {
    color: #9ca59d;
    font-family: sans-serif;
}

.my_mb-50 {
    margin-bottom: 50px;
}
</style>