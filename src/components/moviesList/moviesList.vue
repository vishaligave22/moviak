<template>
    <div class="container mt-4">
      
        <b-breadcrumb class="index mb-2" :items="items"></b-breadcrumb>
        

    
  <div>
      <div class="row justify-content-md-center">
    <div class="col-md-2">
      <div><b-img center class="movielist img-fluid"  :src="require('@/assets/images/img_2.jpg')"></b-img></div>
      <div class="title text-left mt-2">Star Trek Beyond</div>
      <div class=" date mt-4 text-left">Release: August 3,2017</div>
     <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div class="detail "> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class=" movielist img-fluid"  :src="require('@/assets/images/img_3.jpg')"></b-img>
        </div>
      <div class="title text-left mt-2">Bad Moms</div>
      <div class=" date mt-4 text-left">Release: july 15,2017</div>
      <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class=" movielist img-fluid"  :src="require('@/assets/images/img_8.jpg')"></b-img>
        </div>
      <div class="title text-left mt-2">The Girl With All The Gifts</div>
      <div class="date mt-4 text-left ">Release: May 18,2017</div>
       <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class=" movielist img-fluid"  :src="require('@/assets/images/img_9.jpg')"></b-img>
        </div>
      <div class="title text-left mt-2">Sausage Party</div>
      <div class=" date mt-4 text-left">Release: May 6,2017</div>
       <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div>
        <b-img center class=" movielist img-fluid"  :src="require('@/assets/images/img_10.jpg')"></b-img>
        </div>
      <div class="title text-left mt-2">Don't Breathe</div>
      <div class="date mt-4 text-left">Release: july 20,2017</div>
      <div class="d-flex text-left mt-2">
      <div class="trailer "><font-awesome-icon  icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon icon="exclamation-circle"/> Detail</div>
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

@import "@/assets/sass/variables.scss";


.trailer{
  color:$color;
  font-size:$icon;
  margin-right:$margin
}
.detail{
color:$color;
font-size:$icon;
}
.title{
  color:$black;
  font-weight: $bold;
  font-size: $font-size;
}
.date{
  font-size:$date;
  color:$date-color;
}
.index{
  background-color: $white;
  margin-left: $indexmargin;
  font-size: $indexsize;
  font-weight: $bold;
 
}
a{
  color:$color;
}
.breadcrumb-item.active {
    color: $orange;
}
.movielist{
  border-bottom: 2px solid $orange;
}

</style>