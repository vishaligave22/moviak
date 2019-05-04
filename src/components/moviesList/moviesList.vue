<template>
    <div class="container mt-4">
        <b-breadcrumb :items="items"></b-breadcrumb>
        

    
  <div>
      <div class="row justify-content-md-center">
    <div class="col-md-2">
      <div><b-img center class="img-fluid"  :src="require('@/assets/images/img_2.jpg')"></b-img></div>
      <div>Star Trek Beyond</div>
      <div class="mt-4">Release: August 3,2017</div>
    <div class="d-flex">
      <div><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class="img-fluid"  :src="require('@/assets/images/img_3.jpg')"></b-img>
        </div>
      <div>Bad Moms</div>
      <div class="mt-4">Release: july 15,2017</div>
      <div class="d-flex">
      <div><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class="img-fluid"  :src="require('@/assets/images/img_8.jpg')"></b-img>
        </div>
      <div>The Girl With All The Gifts</div>
      <div class="mt-4">Release: May 18,2017</div>
      <div class="d-flex">
      <div><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class="img-fluid"  :src="require('@/assets/images/img_9.jpg')"></b-img>
        </div>
      <div>Sausage Party</div>
      <div class="mt-4">Release: May 6,2017</div>
      <div class="d-flex">
      <div><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class="img-fluid"  :src="require('@/assets/images/img_10.jpg')"></b-img>
        </div>
      <div>Don't Breathe</div>
      <div class="mt-4">Release: july 20,2017</div>
      <div class="d-flex">
      <div><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
 


    </div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
      return {
        items: [
          {
            text: 'Now Playing',
            active: true
            
          },
          {
            text: 'Opening This Week',
            href: '#'
          },
          {
            text: 'Coming soon',
            href: '#'
          }
        ]
      }
    }
        
    }
</script>

<style lang="scss" scoped>


</style>