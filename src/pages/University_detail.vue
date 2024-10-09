
<script>
import UniversityDetail_data from '../data/json_data/UniversityDetail_data.json'

import Jumbotron from '../components/partials/University Detail Section/Jumbotron.vue';

import Footer from "../components/Footer.vue";

export default {
   components: {
      Jumbotron,
      Footer
   },
   data() {
    return {
      slides: UniversityDetail_data.slides, // Dati importati dal JSON
      currentSlide: null, // Slide selezionata
    };
  },
  computed: {
    slideName() {
      // Recupera la query 'name' dalla route
      return this.$route.query.name;
    }
  },
  methods: {
    findSlide() {
      // Trova la slide in base al titolo
      if (Array.isArray(this.slides)) {
        this.currentSlide = this.slides.find(slide =>
          slide.jumbotron.title.toLowerCase() === this.slideName.toLowerCase()
        );
      }
    }
  },
  mounted() {
    this.findSlide();
    console.log(this.currentSlide)
  }
};
</script>




<template>
   <div v-if="currentSlide">
      
      <Jumbotron 
         :data="currentSlide"
      />
   
      
      
      
      <Footer />
      
   </div>
</template>




<style lang="scss" scoped>


</style>