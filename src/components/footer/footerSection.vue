<template>
    <div class="footer-image mt-2">
        <div class="container">
            <div class="row mx-5">
                <div class="col-md-3 mt-5">
                    <div class="img-section text-left">
              <img class="logo" src="@/assets/images/Screenshot.png" alt="moviak">
            </div>

            <div class="footer-para text-left mt-3 mb-4">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempaor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,quis nostrud exercitication ullamco laboris nisi ut aliquip ex ea commodo consequat
              </div>
              
            <div class="stats-title my-auto">
                <div class="social-header p-0 d-flex">
                    <div class=" text-center">
                        <router-link
                            to="#"
                            class="background btn facebook-color-icon icon"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'facebook-f']"
                                class="fa-1x text-info"
                            />
                        </router-link>
                    </div>
                    
                    <div class="mr-0 text-center">
                        <router-link
                            to="#"
                            class=" background cursor-pointer btn twitter-color-icon icon"
                        >
                            <font-awesome-icon
                               :icon="['fab', 'twitter']"
                                class="fa-1x text-info"
                            />
                        </router-link>
                    </div>
                    <div class=" text-center">
                        <router-link
                            to="#"
                            class=" background btn insta-color-icon icon"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'google-plus-g']"
                                class="fa-1x text-info"
                            />
                        </router-link>
                    </div>
                    <div class=" text-center">
                        <router-link
                            to="#"
                            class="background btn insta-color-icon icon"
                        >
                            <font-awesome-icon
                                :icon="['fab', 'pinterest']"
                                class="fa-1x text-info"
                            />
                        </router-link>
                    </div>
                </div>
            </div>

                    
                    
                </div>

                <!-- Custom Services -->
          <div class="col-md-3 mt-5 text-left">
            <div class=" custom mt-3">Custom Services</div>
            <div class="footer-para2 mt-3">Help &amp; contact</div>
            <div class=" footer-para2 mt-3">Return Policy</div>
            <div class=" footer-para2 mt-3">Feed Back</div>
            <div class=" footer-para2 mt-3">Career</div>
          </div>

          <!-- Recent Posts -->
          <div class="col-md-3 mt-5 text-left">
            <div class="custom mt-3">Recent Posts</div>
            <div class="footer-para3 mt-3">Doctor Strange assembles with the Avengers</div>
            <div class="date mt-1">December 20,2016</div>
            <div class="footer-para3 mt-4">5 Movies to watch this week(29 sep 2016)</div>
            <div class="date mt-1">December 20,2016</div>
          </div>

          <!-- Contact Us -->
          <div class="col-md-3 mt-5 text-left">
            <div class="custom mt-3">Contact Us</div>
            <div class="info mt-2"><font-awesome-icon icon="location-arrow" /> 9067 Zuruich,Switzerland 87</div>
            <div class="info mt-2"><font-awesome-icon icon="envelope" /> abc@gmail.com</div>
            <div class="number mt-2"><font-awesome-icon class="phoneicon" icon="phone" /> 01-234-5678</div>
            <div>
              <b-form-input size="sm" class=" search mr-sm-2 mt-4" placeholder="Your email address"><font-awesome-icon :icon="['fas','envelope']" class="envelope"/></b-form-input>
            </div>
          </div>


            </div>
        </div>

        <!-- footer -->
      <div class="footernav">
        <div class="container">
            <div class="row mx-5">
                <div class="col-md-6">
            <div class="d-flex justify-content-start copyright">&copy;copyright 2016 Movie</div>
          </div>
          <div class="col-md-6">
            <div class="d-flex justify-content-end">
            <div class="privacy mr-2">Privacy Policy</div>
            <div class="terms mr-2">Terms of us</div>
            <div class href="#">Site Map</div>
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

.footer-image {
 background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(~@/assets/images/img_22.jpg);
    
    }
.logo{
    width: 65%;
    height: 65%;
}
.copyright{
    font-size: 14px;
   
}
.img-section{
    padding-top: 18px;
}
.footer-para{
    color: #cecbcb;
    font-size: 14px;
}
.footernav{
    background-color: black !important;
    margin-top: 100px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 14px;
    color: #84838382;
}
.custom{
    color: white;
    font-weight: bold;
    font-size: 20px;
}
.footer-para2{
    color: #cecbcb;
    font-size: 14px;
}
.footer-para3{
    color: #cecbcb;
    font-size: 12px;
}
.info{
    color: #cecbcb;
    font-size: 13px;
}
.search{
    background: #84838382;
    border: none;
    border-radius: inherit;
    font-size: 13px;
    height: 35px;
}
.date{
    font-size: 12px;
    color: #797878;
}
.text-info{
    color: white !important;
}
.background{
    background: #84838382;
    border-radius: 50%;
    margin-right: 6px;
    height: 37px;
    width: 40px;
}
.number{
    font-size: 13px;
    color: #f56a18;
}
.phoneicon{
    color: white;
}
</style>