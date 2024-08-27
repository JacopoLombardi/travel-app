
<script>
import Travel_detail_info from "../components/partials/Travel Detail Sections/Travel_detail_info.vue"
import Your_stay from "../components/partials/Travel Detail Sections/Your_stay.vue"
import Explore from "../components/partials/Travel Detail Sections/Explore.vue"
import Reach_hotel from "../components/partials/Travel Detail Sections/Reach_hotel.vue"

import Footer from "../components/Footer.vue"

export default {
  components: {
    Travel_detail_info,
    Your_stay,
    Explore,
    Reach_hotel,
    Footer
  },
  data() {
    return {
      slideData: null
    };
  },
  mounted() {
    // Recupera i dati della slide selezionata dal sessionStorage
    const slideDataString = sessionStorage.getItem('selectedSlideData');
    if (slideDataString) {
      try {
        this.slideData = JSON.parse(slideDataString);
        console.log(this.slideData);
      } catch (error) {
        console.error('Failed to parse slideData:', error);
      }
    } 
  },
};
</script>




<template>

  <Travel_detail_info
    :data="slideData"
  />

  <Your_stay
    :data="slideData"
  />

  <Explore
    :data="slideData"
  />

  <Reach_hotel
    :data="slideData"
  />

  <Footer/>

</template>






<style lang="scss" scoped>

</style>
