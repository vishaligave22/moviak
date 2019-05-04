<template>
  <div class="home">
    <div><headerSection/></div> 
    <div><carousel/></div>
    <div><moviesList/></div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/header/headerSection.vue";
import carousel from "@/components/carousel/carousel.vue";
import moviesList from "@/components/moviesList/moviesList.vue";

export default {
  name: 'home',
  components: {
    headerSection,
    carousel,
    moviesList,
  },
};
</script>
<style lang="scss" scoped>



</style>

 

