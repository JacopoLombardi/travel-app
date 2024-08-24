
<script>
import Travel_detail_info from "../components/partials/Travel Detail Sections/Travel_detail_info.vue"
import Your_stay from "../components/partials/Travel Detail Sections/Your_stay.vue"
import Footer from "../components/Footer.vue"

export default {
  components: {
    Travel_detail_info,
    Your_stay,
    Footer
  },
  data() {
    return {
      slideData: null
    };
  },
  mounted() {
    // ricevo i dati della slide selezzionata tramite query
    const slideDataString = this.$route.query.slideData;
    if (slideDataString) {
      try {
        this.slideData = JSON.parse(slideDataString);
        console.log(this.slideData);
      } catch (error) {
        console.error('Failed to parse slideData:', error);
      }
    }
  }
};
</script>




<template>

  <Travel_detail_info
    :data="slideData"
  />

  <Your_stay
    :data="slideData"
  />

  <Footer/>

</template>




<style lang="scss" scoped>


</style>
