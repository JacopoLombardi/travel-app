<script>
import DubleSwiper from './partial Partner Detail/DubleSwiper.vue';

export default {
  components: {
    DubleSwiper
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

    <!-- jumbotron -->
    <div class="_jumbotron">
      <div class="_box">
        <img :src="data.jumbotron.image" alt="jumbotron">
        <div class="box_text">
          <h1>{{ data.jumbotron.title }}</h1>
          <p>{{ data.jumbotron.text }}</p>
        </div>
      </div>
    </div>


    <!-- collaboration -->
    <div class="_collaboration">
      <img :src="data.collaboration.image" alt="">
      <div>
        <p v-for="item in data.collaboration.text" :key="item" v-html="item"></p>
      </div>
    </div>


    <!-- componente swiper -->
    <DubleSwiper
      :data="data"
    />

  </div>
</template>




<style lang="scss" scoped>

._jumbotron {
   ._box {
      position: relative;

      img {
         width: 100%;
         height: 450px;
         object-fit: cover;
         filter: brightness(70%);
      }

      .box_text {
         width: 90%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         h1 {
            font-size: clamp(1.8rem, 6vw, 4rem);
            font-weight: 800;
            text-transform: uppercase;
         }

         p {
            font-size: 15px;
            font-weight: 500;
         }

         h1,
         p {
            color: white;
            text-align: center;
         }
      }  
   }
}




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

   ._jumbotron {
      ._box {
         img {
            height: 550px;
         }
         .box_text {
            width: 90%;

            p {
               font-size: 20px;
               font-weight: 500;
            }
         }  
      }
   }




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