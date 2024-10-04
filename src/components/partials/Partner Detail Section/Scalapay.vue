<script>
import Jumbotron from './partial Partner Detail/Jumbotron.vue';
import DoubleSwiper from './partial Partner Detail/DoubleSwiper.vue';

export default {
  components: {
   Jumbotron,
   DoubleSwiper
  },
  props: {
    data: Object,
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
  <div v-if="data">

   <!-- componente jumbotron -->
   <Jumbotron
      :data="data" 
   />


   <!-- collaboration -->
   <div class="_collaboration">
      <img :src="data.collaboration.image" alt="">
      <div>
         <p v-for="item in data.collaboration.text" :key="item" v-html="item"></p>
      </div>
   </div>


   <!-- componente swiper -->
   <DoubleSwiper
      :data="data"
   />

  </div>
</template>




<style lang="scss" scoped>

._collaboration {
   padding: 50px 1rem;
   font-size: 13px;
   background-color: rgb(247, 202, 205);

   img {
      margin: auto;
      min-width: 200px;
      margin-bottom: 10px;
      display: flex;
   }

   p {
      margin-top: 15px;
      line-height: 19px;
   }
   
   a {
      color: rgb(230, 72, 92);
      background-color: white;
      border-radius: 10px;
      margin-top: 30px;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;
   }
}






/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._collaboration {
      padding: 60px 5rem 80px 5rem;
      font-size: 17px;
      text-align: center;

      img {
         width: 500px;
      }

      p {
         margin-top: 17px;
         line-height: 22px;
      }
      
      a {
         margin-top: 50px;
         font-size: 16px;
      }
   }

}
</style>