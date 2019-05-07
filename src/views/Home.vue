<template>
  <div class="home">
    <div><headerSection/></div> 
    <div><carousel/></div>
    <div><moviesList/></div>
    <div><topMovies/></div>
    <div><videoSection/></div>
    <div><latestNews/></div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import headerSection from "@/components/header/headerSection.vue";
import carousel from "@/components/carousel/carousel.vue";
import moviesList from "@/components/moviesList/moviesList.vue";
import topMovies from "@/components/topMovies/topMovies.vue";
import videoSection from "@/components/videoSection/videoSection.vue";
import latestNews from "@/components/latestNews/latestNews.vue";

export default {
  name: 'home',
  components: {
    headerSection,
    carousel,
    moviesList,
    topMovies,
    videoSection,
    latestNews,
  },
};
</script>
<style lang="scss" scoped>



</style>

 

