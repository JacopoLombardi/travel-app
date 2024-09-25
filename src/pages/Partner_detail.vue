
<script>
import Partner_detail_data from '../data/json_data/Partner_detail_data.json'

import Instax from "../components/partials/Partner Detail Section/Instax.vue"

import Footer from "../components/Footer.vue";

export default {
  components: {
    Instax,
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
        "instax": "instax"
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
  }
};
</script>




<template>
  
  <Instax 
    v-if="currentPage === 'instax'"
    :data="dataPage" 
  />
  
</template>




<style lang="scss" scoped>


</style>