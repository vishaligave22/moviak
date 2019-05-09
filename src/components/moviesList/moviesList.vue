<template>
    <div class="container mt-4 mb-5">
      
        <b-breadcrumb class="breadcrumb mb-2" :items="items"></b-breadcrumb>
        

    
  <div>
      <div class="row justify-content-md-center">
    <div class="col-md-2">
      <div class="movielist">

      <div class="movie-image"><b-img center class=" image img-fluid"  :src="require('@/assets/images/img_2.jpg')"></b-img></div>
      <div class="grade px-2">G</div>
      <div class="title text-left mt-2">Star Trek Beyond</div>
      <div class=" date mt-4 text-left">Release: August 3,2017</div>
     <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon class="icon" icon="play-circle"/> Trailer</div> 
      <div class="detail "> <font-awesome-icon class="icon" icon="exclamation-circle"/> Detail</div>
      </div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div class="movielist">
      <div class="movie-image">
        <b-img center class=" image img-fluid"  :src="require('@/assets/images/img_3.jpg')"></b-img>
        </div>
        <div class="grade px-2">G</div>
      <div class="title text-left mt-2">Bad Moms</div>
      <div class=" date mt-4 text-left">Release: july 15,2017</div>
      <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon class="icon" icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon class="icon" icon="exclamation-circle"/> Detail</div>
      </div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div class="movielist">
      <div class="movie-image">
        <b-img center class=" image img-fluid"  :src="require('@/assets/images/img_8.jpg')"></b-img>
        </div>
        <div class="grade px-2">G</div>
      <div class="title text-left mt-2">The Girl With All The Gifts</div>
      <div class="date mt-4 text-left ">Release: May 18,2017</div>
       <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon class="icon" icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon class="icon" icon="exclamation-circle"/> Detail</div>
      </div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div class="movielist">
      <div class="movie-image">
        <b-img center class="image img-fluid"  :src="require('@/assets/images/img_9.jpg')"></b-img>
        </div>
        <div class="grade px-2">G</div>
      <div class="title text-left mt-2">Sausage Party</div>
      <div class=" date mt-4 text-left">Release: May 6,2017</div>
       <div class="d-flex text-left mt-2">
      <div class="trailer"><font-awesome-icon class="icon" icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon class="icon" icon="exclamation-circle"/> Detail</div>
      </div>
      </div>
    </div>
    
    
    <div class="col-md-2">
      <div class="movielist">
      <div class="movie-image">
        <b-img center class="image img-fluid"  :src="require('@/assets/images/img_10.jpg')"></b-img>
        </div>
        <div class="grade px-2">PG</div>
      <div class="title text-left mt-2">Don't Breathe</div>
      <div class="date mt-4 text-left">Release: july 20,2017</div>
      <div class="d-flex text-left mt-2">
      <div class="trailer "><font-awesome-icon class="icon" icon="play-circle"/> Trailer</div> 
      <div class="detail"> <font-awesome-icon class="icon" icon="exclamation-circle"/> Detail</div>
      </div>
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
            href: 'link #'
          },
          {
            text: 'Coming soon',
            href: ' link #'
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
.image{
  position: relative;
}
.grade{
  
    background-color: $orange;
    position: absolute;
    top: 24px;
    right: 15px;
    padding-left: 8px;
    color: white;
    font-weight: bold;
    font-size: 14px;

}
.detail{
color:$color;
font-size:$icon;
}
.icon{
  font-size:14px;
}
.title{
  color:$black;
  font-weight: $bold;
  font-size: $font-size;
  height: 25px;
}
.date{
  font-size:$date;
  color:$date-color;
}
.breadcrumb{
  background-color: $white;
  margin-left: $indexmargin;
  font-size: $breadcrumbsize;
  font-weight: $bold;
 
}
.breadcrumb-item a{
  color:$color;
}
a:hover {
    color: #676464;
    text-decoration: none;
}
.breadcrumb-item.active {
    color: $orange;
}
.movie-image{
  border-bottom: 2px solid $orange;
  position: relative;
}

</style>