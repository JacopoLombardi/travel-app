
<script>
import Partner_detail_data from '../data/json_data/Partner_detail_data.json'

import Instax from "../components/partials/Partner Detail Section/Instax.vue"
import Holafly from "../components/partials/Partner Detail Section/Holafly.vue"
import Scalapay from "../components/partials/Partner Detail Section/Scalapay.vue"
import Kappa_futurfestival from "../components/partials/Partner Detail Section/Kappa_futurfestival.vue"
import Our_partner from "../components/partials/Partner Detail Section/Our_partner.vue"

import Footer from "../components/Footer.vue";

export default {
  components: {
    Instax,
    Holafly,
    Scalapay,
    Kappa_futurfestival,
    Our_partner,
    Footer
  },
  data(){
    return{
      dataPage: null,
      currentPage: null,
    };
  },

  methods:{
    findSlide() {
      // Usa le chiavi esatte che hai nel JSON
      const sections = {
        "instax": "instax",
        "holafly": "holafly",
        "scalapay": "scalapay",
        "kappa_futurfestival": "kappa_futurfestival",
        "our_partner": "our_partner"
      };

      // Normalizza il valore di slideName
      const normalizedSlideName = this.slideName.trim().toLowerCase();
      console.log("slideName normalizzato:", normalizedSlideName);

      // Trova la sezione nel mapping
      const selectedSection = sections[normalizedSlideName];
      console.log("selectedSection:", selectedSection);

      if (selectedSection) {
        this.dataPage = Partner_detail_data[selectedSection];
        this.currentPage = selectedSection;
        console.log("dataPage:", this.dataPage);
      } else {
        console.error("Sezione non trovata per slideName:", normalizedSlideName);
      }
    },
  },

  computed: {
    slideName() {
      return this.$route.query.name;
    },
  },
  mounted() {
    this.findSlide();
  },

  // usato perchè al click del btn in our_partner non si caricavano le pagine
  watch: {
    '$route.query.name': function() {
      this.findSlide(); // Ricarica i dati quando `name` cambia
    }
  }
};
</script>




<template>
  
  <Instax 
    v-if="currentPage === 'instax'"
    :data="dataPage" 
  />


  <Holafly
    v-if="currentPage === 'holafly'"
    :data="dataPage" 
  />


  <Scalapay
    v-if="currentPage === 'scalapay'"
    :data="dataPage" 
  />




  <Kappa_futurfestival
    v-if="currentPage === 'kappa_futurfestival'"
    :data="dataPage" 
  />


  <Our_partner
    v-if="currentPage === 'our_partner'"
    :data="dataPage" 
  />

  
  <Footer />
  
</template>




<style lang="scss" scoped>


</style>