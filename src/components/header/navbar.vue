<template>
    
        <!-- <b-navbar  toggleable="lg" type="dark" variant="info">
            <div class="container">
    <a href="/">
<img src="@/assets/images/Screenshot.png" alt="moviak" class="">
</a>

<b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 ml-4" placeholder=" Movie Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Go</b-button>
        </b-nav-form>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

   
      


        <b-navbar-nav class="ml-auto">
        

        <div>
  <b-nav>
    <b-nav-item  href="#">HOME</b-nav-item>
    <b-nav-item href="#">MOVIE LAYOUT</b-nav-item>
    <b-nav-item href="#">PAGE SINGLE</b-nav-item>
    <b-nav-item href="#">SHOWTIME</b-nav-item>
    <b-nav-item href="#">TOP RATED</b-nav-item>
  </b-nav>
</div>

        
      </b-navbar-nav>
      </div>
  </b-navbar> -->
<div class="container mx-6 ">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/"><img src="@/assets/images/Screenshot.png" alt="moviak" class=""></a>
  <form class="form-inline my-2 my-lg-0">
      <input class="search form-control mr-sm-2" type="search" placeholder="Movie Search..." aria-label="Search">
      <button class="go btn my-2 my-sm-0" type="submit">GO</button>
    </form>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="  navbar-nav ml-auto">
      <a class=" navigation nav-item nav-link active" href="#">HOME </a>
      <a class=" navigation nav-item nav-link " href="#">MOVIE LAYOUT</a>
      <a class=" navigation nav-item nav-link " href="#">PAGE SINGLE</a>
      <a class=" navigation nav-item nav-link " href="#">SHOW TIME</a>
      <a class=" navigation nav-item nav-link " href="#">TOP RATED</a>
      
    </div>
  </div>
</nav>
</div>



    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.search{
  border-radius:$border-radius;
  font-size:14px;
}
.go{
  border-radius: 100%;
  border-color: $orange;
  background-color: $orange;
  font-size:13px;
  color:$white;
  font-weight:$bold;
  padding-right: 10px;
  padding-left: 10px;
}
.btn:hover {
    color: $white;
    text-decoration: none;
}
img {
    vertical-align: middle;
    border-style: none;
    width: 170px;
}
#navbarNavAltMarkup{
  margin-right:66px;
}
.navbar{
  padding:1px;
}
.navbar-light .navbar-nav .nav-link {
    color: $black;
}
.navbar-light .navbar-nav .nav-link.active {
    border-bottom:2px solid $orange;
    color:$black;
}
.navigation{
  color: $black;
  font-weight: $bold;
  font-size:12px;
  padding-bottom:0px;
  margin-left: 10px;
  }

</style>