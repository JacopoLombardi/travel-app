
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
   data() {
      return {
         slidesPerView: 1.8,
         spaceBetween: 20
      };
   },

   methods: {
      updateSlidesPerView() {
         const width = window.innerWidth;

         if (width < 768) {
            this.slidesPerView = 1.3;
            this.spaceBetween = 20;
         } else if (width >= 768 && width < 992) {
            this.slidesPerView = 1.5;
            this.spaceBetween = 20;
         } else if (width >= 992 && width < 1500) {
            this.slidesPerView = 4;
            this.spaceBetween = 30;
         } else {
            this.slidesPerView = 4;
            this.spaceBetween = 30;
         }
      },
   },
   computed: {
      reviews() {
         return this.data?.detail?.reviews;
      },
   },
   mounted() {
      this.updateSlidesPerView();
      window.addEventListener('resize', this.updateSlidesPerView);
   },
   beforeDestroy() {
      window.removeEventListener('resize', this.updateSlidesPerView);
   }
};
</script>




<template>
   <div class="_reviews">

      <!-- text -->
      <div class="_text">
         <h3>Cosa dice chi ha già viaggito con noi?</h3>
         <p>Oltre 25.000 Utraveler hanno viaggiato con noi in giro per il mondo. Leggi alcune delle recensioni su questo
            viaggio.</p>
      </div>


      <!-- swiper -->
      <swiper
         class="_swiper"
         :slides-per-view="slidesPerView"
         :space-between="spaceBetween"
         :loop="flase"
      >
         <swiper-slide
            class="_slide d-flex justify-content-center"
            v-for="item in reviews"
            :key="item"
         >
            <div class="card">
               <div class="card-body">

                  <div class="card-body-title">
                     <h5 class="card-title">{{ item.name }}</h5>
                     <p class="card-text">{{ item.date }}</p>

                     <!-- stelline -->
                     <ul class="d-flex mt-1">
                        <li>
                           <i
                              v-for="item in item.starsNumber"
                              :key="item.id"
                              class="fa-solid fa-star">
                           </i>
                        </li>
                        <li> 
                           <i 
                              v-for="item in (5 - item.starsNumber)"
                              :key="item.id"
                              class="fa-regular fa-star">
                           </i>
                        </li>
                     </ul>

                     <p>{{ item.text }}</p>
                  </div>

               </div>
            </div>
         </swiper-slide>
      </swiper>

   </div>
</template>




<style lang="scss" scoped>

._reviews {
   padding: 50px 1rem;
   background-color: rgb(245, 245, 245);

   ._text {
      margin-bottom: 40px;

      h3 {
         font-size: 22px;
         font-weight: 800;
         text-transform: uppercase;
         margin-bottom: 20px;
      }

      p {
         font-size: 12px;
         color: rgb(124, 124, 124);
      }
   }

   .card {
      width: 100%;
      max-width: 550px;
      border-radius: 20px;
      padding: 10px;
      height: 250px;

      h5 {
         font-size: 15px;
         font-weight: 700;
         margin: 0;
      }

      p {
         font-size: 12px;
      }

     
      ul {
         i {
            color: rgb(254, 203, 0);
         }
      }
      
      
      p:last-child {
         color: rgb(138, 138, 138);
         margin-top: 20px;
         max-height: 120px;
         line-height: 16px;
         overflow: auto;
      }
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._reviews {
      padding: 70px 5rem;

      ._text {
         h3 {
            font-size: 25px;
         }

         p {
            font-size: 14px;
         }
      }



      .card {
         height: 280px;
         h5 {
            font-size: 17px;
         }

         p {
            font-size: 13px;
         }
      }
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
   ._reviews {
      ._text {
         h3 {
            font-size: 30px;
         }

         p {
            font-size: 15px;
         }
      }



      .card {
         max-width: 600px;
         h5 {
            font-size: 17px;
         }

         p {
            font-size: 14px;
         }

         p:last-child {
            color: rgb(138, 138, 138);
            margin-top: 20px;
            line-height: 18px;
            max-height: 140px;
            overflow: auto;
         }

      }
   }
}

</style>