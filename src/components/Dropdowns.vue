<script>
export default {
  name: 'DropDowns'
}
</script>

<template>

<!-- DROP DOWNS E LINKS -->
<div class="container p-3">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <div class="dropdown">
          <a class="my_fs-10 btn my_bg-morewhite btn-secondary border-0 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
        
          <ul class="dropdown-menu border-0">
            <li><a class="mx-0 px-0 dropdown-item" href="#">Action</a></li>
            <li><a class="mx-0 px-0 dropdown-item" href="#">Another action</a></li>
            <li><a class="mx-0 px-0 dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <div class="dropdown">
          <a class="my_fs-10 btn my_bg-morewhite btn-secondary dropdown-toggle border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
        
          <ul class="dropdown-menu border-0">
            <li><a class="mx-0 px-0 dropdown-item" href="#">Action</a></li>
            <li><a class="mx-0 px-0 dropdown-item" href="#">Another action</a></li>
            <li><a class="mx-0 px-0 dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        <a class="my_fs-10 my_padding" href="">About</a>
        <a class="my_fs-10 my_padding" href="">Blog</a>
        <a class="my_fs-10 my_padding" href="">Contact</a>
        <div class="dropdown">
          <a class="my_fs-10 btn my_bg-morewhite btn-secondary dropdown-toggle border-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop by brand
          </a>
        
          <ul class="dropdown-menu border-0">
            <li><a class="mx-0 px-0 dropdown-item" href="#">Action</a></li>
            <li><a class="mx-0 px-0 dropdown-item" href="#">Another action</a></li>
            <li><a class="mx-0 px-0 dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.btn:active{
 background-color: white;
}
a{
  text-decoration: none;
  color: gray;
  margin: 0 20px;
  &:hover{
    color: black;
  }

}
.dropdown{
  a{
    color: gray;
    &:hover{
    color: black;
    }
  }
}
.my_bg-morewhite{
  background-color: white;
}
.my_padding{
  padding: 6px;
}
</style>
