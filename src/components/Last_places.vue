
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
   components: {
      Swiper,
      SwiperSlide
   },
   data() {
      return {
         places: [
            { name: 'Maiorca', price: 629 },
            { name: 'Kos', price: 499 },
            { name: 'Ibiza', price: 709 },
            { name: 'Rodi', price: 399 },
            { name: 'Fuerteventura', price: 349 }
         ],

         slidesPerView: 1,
         spaceBetween: -30,
      };
   },
   methods: {
      updateSlidesPerView() {
         const width = window.innerWidth;

         if (width < 576) {                         // Mobile
            this.slidesPerView = 1;
            this.spaceBetween = -30;
         } else if (width >= 768 && width < 992) {  // Tablet
            this.slidesPerView = 1;
            this.spaceBetween = -60;
         } else if (width >= 992 && width < 1500) {  // Laptop
            this.slidesPerView = 1;
            this.spaceBetween = 30;
         } else {                                   // Desktop 
            this.slidesPerView = 1;
            this.spaceBetween = 20;
         }
      },

      onSwiper(swiper) {
         console.log(swiper);
      }
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
   <div class="last_places text-white mb-5">
      <h4>Ultimi posti per la tua estate</h4>
      <img src="https://images.prismic.io/blind/ZpZtLh5LeNNTxMe9_Maiorca-Cover.webp?auto=format,compress" alt="">

      <div class="external_card">

         <swiper
            class="_swiper"
            :slides-per-view="slidesPerView"
            :space-between="spaceBetween"
            :loop="false"
            pagination
            @swiper="onSwiper"
         >
            <swiper-slide
              v-for="(place, index) in places"
              :key="index"
            >
               <div class="_card">
                  <h2>{{ place.name }}</h2>
                  <p>a Partire da {{ place.price }} &euro;</p>
                  <button class="btn"><i class="fa-solid fa-arrow-right"></i></button>
               </div>
            </swiper-slide>


            <div class="_pagination"></div>

         </swiper>


      </div>
   </div>
</template>







<style lang="scss" scoped>
.last_places {
   position: relative;
   height: 800px;

   display: flex;
   justify-content: center;

   h4 {
      font-size: 30px;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;
      max-width: 100%;
      margin: 50px 20px 0 20px;
      position: absolute;
   }

   img {
      height: 100%;
      width: 100%;
      object-fit: cover;
   }

   .external_card {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;

      ._swiper {
         padding-left: 15%;
      }

      ._card {
         width: 300px;
         border: 2px solid white;
         border-radius: 25px;
         text-align: center;
         padding: 160px 0;
         background-color: #ffffff15;
         backdrop-filter: blur(8px);
         position: relative;

         h2 {
            font-size: 35px;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 40px;
         }

         p {
            font-size: 18px;
            font-weight: 700;
         }

         button {
            background-color: white;
            border-radius: 50%;
            position: absolute;
            bottom: 5%;
            right: 7%;

            i {
               color: rgb(112, 50, 219);
            }

            &:hover i {
               transition: all 0.3s ease;
               color: rgb(119, 119, 119);
            }
         }
      }

      ._pagination {
         font-size: 30px;
         
      }
   }
}







/* Media query per dispositivi con larghezza maggiore o uguale a 720px */
@media (min-width: 720px) {
   .last_places {
      .external_card {
         ._swiper {
            padding-left: 30%;
         }
      }
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
   .last_places {
         h4 {
            font-size: 43px;
         }
   
         .external_card {
            ._card {
               width: 450px;    
               height: 450px;

               h2 {
                  font-size: 45px;
                  margin-bottom: 50px;
               }
   
               p {
                  font-size: 22px;
               }
            }
   
            ._swiper {
               padding-left: 35%;
            }
         }
      }
   }




/* Media query per dispositivi con larghezza maggiore o uguale a 1500px */
@media (min-width: 1500px) {
   .last_places {
      .external_card {
         ._swiper {
            padding-left: 38%;
         }
      }
   }
}


</style>