
<script>
import TravelType_data from "../data/json_data/TravelType_data.json";

import Flash_offerts from "../components/partials/Travel Type Sections/Flash_offerts.vue";
import Travel_all_budget from "../components/partials/Travel Type Sections/Travel_all_budget.vue";
import Last_minute from "../components/partials/Travel Type Sections/Last_minute.vue";
import Departure_next_month from "../components/partials/Travel Type Sections/Departure_next_month.vue";
import Christmas_New_Year from "../components/partials/Travel Type Sections/Christmas_New_Year.vue";
import Time_for_africa from "../components/partials/Travel Type Sections/Time_for_africa.vue";

import Footer from "../components/Footer.vue";

export default {
  components: {
    Flash_offerts,
    Travel_all_budget,
    Last_minute,
    Departure_next_month,
    Christmas_New_Year,
    Time_for_africa,
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
        "last_minute": "last_minute",
        "departure_next_month": "departure_next_month",
        "departure_next_2_month": "departure_next_2_month",
        "christmas_new_year": "christmas_new_year",
        "time_for_africa": "time_for_africa"
      };

      // Normalizza il valore di slideName
      const normalizedSlideName = this.slideName.trim().toLowerCase();
      console.log("slideName normalizzato:", normalizedSlideName);

      // Trova la sezione nel mapping
      const selectedSection = sections[normalizedSlideName];
      console.log("selectedSection:", selectedSection);

      if (selectedSection) {
        this.dataPage = TravelType_data[selectedSection];
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

    <Flash_offerts
      v-if="currentPage === 'flash_offerts'"
      :data="dataPage" 
    />


    <Travel_all_budget
      v-if="currentPage === 'travel_all_budget'"
      :data="dataPage"
    />


    <Last_minute
      v-if="currentPage === 'last_minute'"
      :data="dataPage"
    />


    <Departure_next_month
      v-if="currentPage === 'departure_next_month' || currentPage === 'departure_next_2_month'"
      :data="dataPage"
    />


    <Christmas_New_Year
      v-if="currentPage === 'christmas_new_year'"
      :data="dataPage"
    />


    <Time_for_africa
      v-if="currentPage === 'time_for_africa'"
      :data="dataPage"
    />


    <Footer />

</template>




<style lang="scss" scoped>

</style>