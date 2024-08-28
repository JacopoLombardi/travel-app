<script>

import Jumbotron_home from '../components/partials/Home Sections/Jumbotron_home.vue'
import Loved_travel from '../components/partials/Home Sections/Loved_travel.vue'
import Last_places from '../components/partials/Home Sections/Last_places.vue'
import Flash_offer from '../components/partials/Home Sections/Flash_offer.vue'
import University from '../components/partials/Home Sections/University.vue'
import Our_philosophy from '../components/partials/Home Sections/Our_philosophy.vue'
import Reviews from '../components/partials/Home Sections/Reviews.vue'
import Partner from '../components/partials/Home Sections/Partner.vue'
import Footer from '../components/Footer.vue'



export default {
  components:{
    Jumbotron_home,
    Loved_travel,
    Last_places,
    Flash_offer,
    University,
    Our_philosophy,
    Reviews,
    Partner,
    Footer
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>





<template>

  <Jumbotron_home/>

  <loved_travel/>

  <Last_places/>

  <Flash_offer/>

  <University/>

  <Our_philosophy/>

  <Reviews/>

  <Partner/>

  <Footer/>

</template>





<style lang="scss" scoped>


</style>