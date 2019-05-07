<template>
    <div class=" mt-5 mb-5">
    <div class="news">
    <div class="title">Latest News</div>

    </div>

    <div class="container">
        <div class="image-section">
            <div class="row">
                <div class="col-md-3">
                    <!-- 1 -->
            <div>
            <b-card
              title="Doctor Strange assembles with the Avengers"
              :img-src="img1"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 border-0"
            >
              <b-card-text></b-card-text>

              <b-button href="#" variant="primary">Read more</b-button>
            </b-card>
          </div>

          <!-- 2 -->
          <div>
            <b-card
              title="5 movies to watch this week (29 sept 2016)"
              :img-src="img2"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 border-0"
            >
              <b-card-text></b-card-text>

              <b-button href="#" variant="primary">Read more</b-button>
            </b-card>
          </div>
    </div>
    <!-- 3 -->

        <div class="col-md-5">
          <div>
            <b-card
              title="Another Jurassic Park star joins Thor: Ragnarok"
              :img-src="img3"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-2 border-0"
            >
              <b-card-text>sed ut perspiciatis unde omnis iste natus error sit voluptatem</b-card-text>

              <b-button href="#" variant="primary">Read more</b-button>
            </b-card>
          </div>
        </div>

        <!-- 4 -->
        <div class="col-md-3">
            <div>
                <b-card
              title="Stan Lee creates new superhero character for Asia"
              :img-src="img4"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 border-0"
            >
              <b-card-text></b-card-text>

              <b-button href="#" variant="primary">Read more</b-button>
            </b-card>
            </div>

            <!-- 5 -->
            <div>
                <b-card
              title="Third stand-alone Star Wars confirmed for 2020"
              :img-src="img5"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2 border-0"
            >
              <b-card-text></b-card-text>

              <b-button href="#" variant="primary">Read more</b-button>
            </b-card>
            </div>
        </div>



                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import img1 from "@/assets/images/grid1.jpg";
import img2 from "@/assets/images/grid2.jpg";
import img3 from "@/assets/images/grid3.jpg";
import img4 from "@/assets/images/grid4.jpg";
import img5 from "@/assets/images/grid5.jpg";
    export default {
        data(){
          return{
              img1:img1,
              img2:img2,
              img3:img3,
              img4:img4,
              img5:img5

            };

        }
        
    };
</script>

<style lang="scss" scoped>
.news{
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(~@/assets/images/img_22.jpg);

}

</style>