
<script>
import Travel_type_data from "../data/json_data/Travel_type_data.json";

import Flash_offerts from "../components/partials/Travel Type Sections/Flash_offerts.vue";
import Travel_all_budget from "../components/partials/Travel Type Sections/Travel_all_budget.vue";

import Footer from "../components/Footer.vue";

export default {
  components: {
    Flash_offerts,
    Travel_all_budget,
    Footer
  },
  data() {
    return {
      dataPage: null,
      currentPage: null,
    };
  },
  methods: {
    findSlide() {
      // Usa le chiavi esatte che hai nel JSON
      const sections = {
        "flash_offerts": "flash_offerts",
        "travel_all_budget": "travel_all_budget",
      };

      // Normalizza il valore di slideName (DEVE ESSERE INGLESE!!!!)
      const normalizedSlideName = this.slideName.trim().toLowerCase();
      console.log("slideName normalizzato:", normalizedSlideName);

      // Trova la sezione nel mapping
      const selectedSection = sections[normalizedSlideName];
      console.log("selectedSection:", selectedSection);

      if (selectedSection) {
        this.dataPage = Travel_type_data[selectedSection];
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
};
</script>




<template>

    <Flash_offerts
      v-if="currentPage === 'flash_offerts'"
      :data="dataPage" 
    />


    <Travel_all_budget
      v-if="currentPage === 'travel_all_budget'"
      :data="dataPage"
    />

    
    <Footer />

</template>




<style lang="scss" scoped>






</style>