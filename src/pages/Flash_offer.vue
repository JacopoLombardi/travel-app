

<script>
import Loved_travel from '../data/json_data/Loved_travel.json';



import Footer from "../components/Footer.vue";

export default {
  components: {
 
    Footer
  },
  data() {
    return {
      slides: Loved_travel.slides, // Dati importati dal JSON
      currentSlide: null, // Slide selezionata
    };
  },
  computed: {
    slideTitle() {
      // Recupera la query 'name' dalla route
      return this.$route.query.name;
    }
  },
  methods: {
    findSlide() {
      // Trova la slide in base al titolo
      if (Array.isArray(this.slides)) {
        this.currentSlide = this.slides.find(slide =>
          slide.title.toLowerCase() === this.slideTitle.toLowerCase()
        );
      }
    }
  },
  mounted() {
    this.findSlide();
  }
};
</script>




<template>

   


    <Footer />

</template>




<style lang="scss" scoped>

</style>