<template>
    <div class="">
        <div class="container">
            <div class="d-flex mt-5">
     <div class="flex-fill mt-3">
      <a href="#"><font-awesome-icon class="icon1" icon="map-marked-alt" />
        <div class="name">CINEMAS</div></a>
        </div>
        
        <div class="flex-fill mt-3">
      <a href="#"><font-awesome-icon class="icon1" icon="gift" />
        <div class="name">PROMATIONS</div></a>
        </div>

        <div class="flex-fill mt-3">
      <a href="#"><font-awesome-icon class="icon1" icon="credit-card" />
        <div class="name">VOUCHERS & CARDS</div></a>
        </div>

        <div class="flex-fill mt-3">
      <a href="#"><font-awesome-icon class="icon1" icon="ticket-alt" />
        <div class="name">BUY TICKETS</div></a>
        </div>
        
        </div>

        
    </div>
    <!-- background image -->
    <div class="movies img-fluid mb-5">
      <div class="moviename">Top movies in theatres</div>

      
          <div class="d-flex mt-4">
              
             <div class=""><b-img :src="require('@/assets/images/img_2.jpg')"></b-img></div>
             <div class=""><b-img :src="require('@/assets/images/img_3.jpg')"></b-img></div>
             <div class=""><b-img :src="require('@/assets/images/img_8.jpg')"></b-img></div>
             <div class=""><b-img :src="require('@/assets/images/img_9.jpg')"></b-img></div>
             <div class=""><b-img :src="require('@/assets/images/img_10.jpg')"></b-img></div>
             <div class=""><b-img :src="require('@/assets/images/img_8.jpg')"></b-img></div>
             <div class=""><b-img :src="require('@/assets/images/img_3.jpg')"></b-img></div>
             


          </div>

          
    </div>
    




    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.movies{
background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(~@/assets/images/img_21.jpg);

}
img{
    vertical-align: middle;
    border-style: none;
    width: 100%;
    margin-bottom: 30px;
    padding-top: 27px;
    padding-bottom: 30px;
}
</style>