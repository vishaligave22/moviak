<template>
  <div class="movienav ">
    <div class="container">
      <div class=" movie-nav d-flex mt-5">
        <div class="flex-fill mt-3 mb-3">
          <a href="#">
            <font-awesome-icon class="icon" icon="map-marked-alt"/>
            <div class="name mt-2">CINEMAS</div>
          </a>
        </div>

        <div class="flex-fill mt-3">
          <a href="#">
            <font-awesome-icon class="icon" icon="gift"/>
            <div class="name mt-2">PROMATIONS</div>
          </a>
        </div>

        <div class="flex-fill mt-3">
          <a href="#">
            <font-awesome-icon class="icon" icon="credit-card"/>
            <div class="name mt-2">VOUCHERS & CARDS</div>
          </a>
        </div>

        <div class="flex-fill mt-3">
          <a href="#">
            <font-awesome-icon class="icon" icon="ticket-alt"/>
            <div class="name mt-2">BUY TICKETS</div>
          </a>
        </div>

       
      </div>
    </div>
    <!-- background image -->
    <div class="movies img-fluid mb-5">
       <!-- <div class="rounded-circle">
            <img class="logo" src="@/assets/images/popcorn.png">
          </div> -->
      <div class="moviename pt-4 mb-2">Top movies in theatres</div>

      <div class=" movielist d-flex mt-4">
        <div class>
          <b-img :src="require('@/assets/images/img_2.jpg')"></b-img>
        </div>
        <div class>
          <b-img :src="require('@/assets/images/img_3.jpg')"></b-img>
        </div>
        <div class>
          <b-img :src="require('@/assets/images/img_8.jpg')"></b-img>
        </div>
        <div class>
          <b-img :src="require('@/assets/images/img_9.jpg')"></b-img>
        </div>
        <div class>
          <b-img :src="require('@/assets/images/img_10.jpg')"></b-img>
        </div>
        <div class>
          <b-img :src="require('@/assets/images/img_8.jpg')"></b-img>
        </div>
        <div class>
          <b-img :src="require('@/assets/images/img_3.jpg')"></b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.movies {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(~@/assets/images/img_21.jpg);
}
.movielist img {
  vertical-align: middle;
  border-style: none;
  width: 100%;
  margin-bottom: 50px;
  padding-top: 27px;
  border-bottom: 1px solid #f56a18;
}
.movienav{
  background-color:#efefef;
}
.moviename{
  
    color: #f56a18;
    font-weight: bold;
    font-size: 25px;
}
.icon{
  font-size:30px;
  color: #a2a2a2;
}
.name{
  font-size:14px;
  color: #a2a2a2;
  font-weight: bold;
}
</style>