
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
   components: {
      Swiper,
      SwiperSlide
   },
   props: {
    data: Object
  },
  data(){
    return{

    };
  },

  computed: {
    // funzione che abbrevia la chiamata dei dati nel template
    explore() {
      return this.data?.detail.explore;
    },
  }
};
</script>




<template>
  <div
     class="_explore"
     v-if="explore"
   >

      <div class="_text">
         <div class="_badge">
            <p>Explore</p>
         </div>
         
         <h2>{{ explore.title }}e</h2>

         <ul>
            <li
              v-for="item in explore.text"
              :key="item"
            >
               <p class="_paragraph">{{ item }}</p>
            </li>
         </ul>
      </div>
      

      <!-- swiper -->
      <swiper
         class="_swiper"
         :slides-per-view="1"
         :space-between="-200"
         :loop="true"
         pagination
         @swiper="onSwiper"
      >
         <swiper-slide
            v-for="item in explore.slide_explore_thumb"
            :key="item"
         >
            <div class="card">
               <img :src="item.img" :alt="item.title">
               <div class="card-body">
                  <span>{{ item.badge }}</span>
                  <div class="card-body-title">
                     <h5 class="card-title">{{ item.title }}</h5>
                     <p class="card-text">{{ item.description }}</p>
                  </div>
               </div>
            </div>

         </swiper-slide>
     </swiper>

   </div>
</template>





<style lang="scss" scoped>

._explore {
   padding: 50px 1rem;
   background-color: rgb(55, 31, 134);
   color: white;

   ._badge {
      background-color: rgb(236, 234, 255);
      color: rgb(64, 20, 206);
      font-size: 15px;
      font-weight: 500;
      padding: 6px 15px;
      border-radius: 20px;
      width: fit-content;
   }

   h2 {
      font-size: 20px;
      font-weight: 800;
      text-transform: uppercase;
      margin: 20px 0;
   }

   ul {
      li {
         ._paragraph {
            margin-top: 15px;
            font-size: 13px;
            line-height: 17px;
         }

         &:last-child ._paragraph{
            color: rgba(210, 210, 210, 0.597);
            font-style: oblique;
            font-weight: 500;
            margin-top: 8px;
         }

      }
   }



   // card
   .card {
      width: 50%;
      aspect-ratio: 1;
      background-color: transparent;
      border-radius: 20px;
      margin-top: 40px;
      border: none;
      position: relative;

      img {
         border-radius: 20px;
         width: 100%;
         height: 100%;
         object-fit: cover;
         position: absolute;
         filter: brightness(75%);
      }

      .card-body {
         color: white;
         position: absolute;
         width: 100%;
         height: 100%;
         top: 0;
         padding: 15px;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;
      }

      .card-body span {
         background-color: rgb(238, 255, 240);
         color: rgb(38, 220, 14);
         font-size: 14px;
         border-radius: 20px;
         padding: 6px 15px;
         position: relative;
         align-self: flex-end;
      }

      .card-body .card-body-title {
         h5 {
            font-size: 15px;
            font-weight: 700;
            margin: 0;
         }

         p {
            font-size: 14px;
         }
      }

      .card-body .card-body-title {
         align-self: flex-start;
      }

      &:hover {
         cursor: pointer;
      }
   }
   
   
}
</style>