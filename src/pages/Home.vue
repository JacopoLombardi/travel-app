<script>

import Jumbotron from '../components/partials/Home Sections/Jumbotron.vue'
import Loved_travel from '../components/partials/Home Sections/Loved_travel.vue'
import Last_places from '../components/partials/Home Sections/Last_places.vue'
import Various_travel from '../components/partials/Home Sections/Various_travel.vue'
import University from '../components/partials/Home Sections/University.vue'
import Our_philosophy from '../components/partials/Home Sections/Our_philosophy.vue'
import Reviews from '../components/partials/Home Sections/Reviews.vue'
import Partner from '../components/partials/Home Sections/Partner.vue'
import Footer from '../components/Footer.vue'

export default {
  components:{
    Jumbotron,
    Loved_travel,
    Last_places,
    Various_travel,
    University,
    Our_philosophy,
    Reviews,
    Partner,
    Footer
  }
};
</script>




<template>

  <Jumbotron/>

  <loved_travel/>

  <Last_places/>

  <Various_travel/>

  <University/>

  <Our_philosophy/>

  <Reviews/>

  <Partner/>

  <Footer/>

</template>





<style lang="scss" scoped>


</style>