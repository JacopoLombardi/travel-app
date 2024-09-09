
<script>

export default {
   props: {
      data: Object
   },
  data(){
    return{

    };
  },

  methods:{

  },
};
</script>




<template>
   <div v-if="data">
      <!-- jumbotron -->
      <div class="_jumbotron">
         <div class="_box">
            <img
               :src="data.jumbotron.image"
               alt="jumbotron">
            <h1>{{ data.jumbotron.title }}</h1>
         </div>
      </div>








   </div>
</template>




<style lang="scss" scoped>


</style>