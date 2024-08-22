
<script>

// import componenti
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

import {store} from './data/store'

export default {
  components:{
    Header,
    Main,
    Footer
  },

  data(){
    return{
      store
    };
  },

  methods:{

  },
};
</script>




<template>

  <Header />

  <router-view />
  
</template>




<style lang="scss">

@use './assets/scss/main';

</style>