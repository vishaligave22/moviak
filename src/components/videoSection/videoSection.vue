<template>
<div class="mx-5 px-5 pt-1">
    <div class="comtainer mt-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <!-- videosection -->

              <div class="title mb-3">Videos and photos</div>
              <iframe width="420" height="280" src="https://www.youtube.com/embed/S7D2Ikz62Ww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="subtitle text-left">10 Cloverfield Lane</div>
              <div class="paragraph text-left px-5">
                A young woman wakes up after a terrible accident to find that she's
                locked in a cellar with a doomsday prepper,...who insists that he saved
                her life and that the world outside is uninhabitable following an 
                apocalyptic catastrophe.Uncertain what to believe.the woman soon...
                </div>  
            </div>

            <!-- photosection -->

        <div class="col-md-6">
            <div class="grid">

    <div class="d-flex">
    <div><b-img  :src="require('@/assets/images/grid2.jpg')"></b-img></div>
    <div><b-img  :src="require('@/assets/images/grid1.jpg')"></b-img></div>
    <div><b-img :src="require('@/assets/images/grid3.jpg')"></b-img></div>

  </div>

  <div class="d-flex">
    <div><b-img  :src="require('@/assets/images/grid4.jpg')"></b-img></div>
    <div><b-img  :src="require('@/assets/images/grid5.jpg')"></b-img></div>
    <div><b-img :src="require('@/assets/images/grid6.jpg')"></b-img></div>

  </div>

  <div class="d-flex">
    <div><b-img  :src="require('@/assets/images/grid7.jpg')"></b-img></div>
    <div><b-img  :src="require('@/assets/images/grid8.jpg')"></b-img></div>
    <div><b-img :src="require('@/assets/images/grid4.jpg')"></b-img></div>

  </div>


            </div>

        </div>
        
        </div>


    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.grid img{
    width:100%;
    border: 1px solid $white;
    margin-left: -112px;
}
.title{
    
    font-size: 23px;
    font-weight: bold;
    color: #f56a18;
    padding-right: 222px;

}
.subtitle{
    
    font-weight: bold;
    padding-left: 54px;
    color:$black;

}
.paragraph{
    
    font-size: 11px;
    padding-left: 62px;
    color:#4e4e4e;
    margin-left: 6px;;

}
</style>