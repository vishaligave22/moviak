<template>
    <div class="comtainer mt-4 mb-5">
        <div class="row">
            <div class="col-md-6">
                <!-- videosection -->

              <div class="title">Videos and photos</div>
              <iframe width="400" height="300" src="https://www.youtube.com/embed/S7D2Ikz62Ww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="subtitle">10 Cloverfield Lane</div>
              <div>A young woman wakes up after a terrible accident to find that she's
                locked in a cellar with a doomsday prepper,...who insists that he saved
                her life and that the world outside is uninhabitable following an 
                apocalyptic catastrophe.Uncertain what to believe.the woman soon...</div>  
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
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.grid img{
    width:100%;
}

</style>