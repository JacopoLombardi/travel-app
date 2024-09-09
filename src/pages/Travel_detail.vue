
<script>
import Travel_detail_data from '../data/json_data/Travel_detail_data.json'

import Info from "../components/partials/Travel Detail Sections/Info.vue"
import YourStay from "../components/partials/Travel Detail Sections/Your_stay.vue"
import Explore from "../components/partials/Travel Detail Sections/Explore.vue"
import Reviews from "../components/partials/Travel Detail Sections/Reviews.vue"
import ReachHotel from "../components/partials/Travel Detail Sections/Reach_hotel.vue"

import Footer from "../components/Footer.vue"

export default {
  components: {
    Info,
    YourStay,
    Explore,
    Reviews,
    ReachHotel,
    Footer
  },
  data() {
    return {
      slides: Travel_detail_data.slides, // Dati importati dal JSON
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
          slide.title.toLowerCase() === this.slideName.toLowerCase()
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

    <Info
      :data="currentSlide" 
    />

    <YourStay
      :data="currentSlide" 
    />

    <Explore
      :data="currentSlide" 
    />

    <Reviews
      :data="currentSlide" 
    />

    <ReachHotel
      :data="currentSlide" 
    />

    <Footer />

</template>




<style lang="scss" scoped>

</style>
