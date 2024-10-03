
<script>
import HomePage_data from '../../../data/json_data/HomePage_data.json';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';


export default {
   components: {
      Swiper,
      SwiperSlide
   },
   data() {
      return {
         modules: [Pagination],
         dataSlide: HomePage_data.last_places,
         currentBackground: 'https://images.prismic.io/blind/ZpZtLh5LeNNTxMe9_Maiorca-Cover.webp?auto=format,compress',
         slidesPerView: 1,
         spaceBetween: -30,
      };
   },
   methods: {
      updateSlidesPerView() {
         const width = window.innerWidth;

         if (width < 576) {
            this.slidesPerView = 1;
            this.spaceBetween = 30;
         } else if (width >= 768 && width < 992) {
            this.slidesPerView = 1;
            this.spaceBetween = -60;
         } else if (width >= 992 && width < 1500) {
            this.slidesPerView = 1;
            this.spaceBetween = 30;
         } else {
            this.slidesPerView = 1;
            this.spaceBetween = 20;
         }
      },

      updateBackground(swiper) {
         this.currentBackground = this.dataSlide[swiper.activeIndex].image;
      },

      saveSlideNameAndNavigate(name) {
         this.$router.push({ name: 'Travel_detail', query: { name: name } });
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
   <div
     class="last_places text-white mb-5"
     :style="{backgroundImage: `url(${currentBackground})`}"
   >
      <h4>Ultimi posti per la tua estate</h4>

      <div class="external_card">
         <swiper
           class="_swiper"
           :slides-per-view="slidesPerView"
           :space-between="spaceBetween"
           :loop="false"
           @slideChange="updateBackground"
           :pagination="true"
           :modules="modules"
         >
            <swiper-slide
              v-for="(slide, index) in dataSlide"
              :key="index"
            >

               <!-- Usa il metodo per salvare i dati e navigare -->
               <div class="_card">
                  <a href="" @click.prevent="saveSlideNameAndNavigate(slide.name)" class="slide-link text-white">
                     <h2>{{ slide.name }}</h2>
                     <p>a Partire da {{ slide.price }} €</p>
                     <button class="btn"><i class="fa-solid fa-arrow-right"></i></button>
                  </a>
               </div>

            </swiper-slide>
         </swiper>
      </div>

   </div>
</template>




<style lang="scss" scoped>

.last_places {
   padding: 50px 0;
   position: relative;
   height: 500px;
   display: flex;
   justify-content: center;

   background-size: cover;
   background-position: center;
   transition: all 0.4s ease;

   h4 {
      font-size: 20px;
      text-transform: uppercase;
      text-align: center;
   }

   .external_card {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;

      ._card {
         width: 250px;
         border: 2px solid white;
         border-radius: 25px;
         text-align: center;
         
         background-color: #ffffff15;
         backdrop-filter: blur(8px);
         position: relative;
         left: 50%;
         transform: translateX(-50%);

         a {
            padding: 100px 0;
            display: block;
         }

         h2 {
            font-size: 25px;
            text-transform: uppercase;
            margin-bottom: 40px;
         }

         p {
            font-size: 18px;
            font-weight: 600;
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
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   .last_places {
      padding: 60px;
      height: 600px;

      h4 {
         font-size: 25px;
      }

      .external_card {
         ._card {
            width: 320px;
            
            a {
               padding: 120px 0;
            }

            h2 {
               font-size: 32px;
            }
         }
      }
   }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   .last_places {
      padding: 80px;
      height: 700px;

      h4 {
         font-size: 30px;
      }
   }
}
</style>

