<template>
    
        <b-navbar class="background py-0" type="dark" variant="dark">
          <div class="container px-5">
            <div class="header">
    <b-navbar-nav>
      <div class="vip pt-2 px-1 mr-4 text-center"  href="#"><font-awesome-icon icon="apple-alt"/> VIP SWEEPSTAKES </div>
      <div class=" shopping mt-2 mr-2" href="#"> $5000 SHOPPING SPREE</div>
      <div class=" join mt-2" href="#"> Join Movies VIP for a chance to win.Don't forget to join during checkout</div>
      <b-nav-item class="login" href="#"> <font-awesome-icon icon="user"/> Login</b-nav-item>

      
    </b-navbar-nav>
    </div>
    </div>
  </b-navbar>

    
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";


.login{
  $color:$color;
  margin-left: 176px;
 }
 .navbar{
   padding: -0.5rem 1rem;
 }
 .bg-dark {
    background-color: #020202 !important;
}
.vip{
  background-color:$vipbgcolor;
  color: $white;
  font-weight: $bold;
  font-style:$italic;
  font-size:$font-size;
     

}
.px-5 {
    padding-left: 2rem !important;
}
.shopping{
  color: $orange;
  font-size:$font-size;
}
.join{
  color:$color;
  font-size:$font-size;
}

</style>