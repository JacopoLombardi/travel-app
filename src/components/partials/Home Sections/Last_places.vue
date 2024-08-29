
<script>
import Last_places from '../../../data/json_data/Last_places.json';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
   components: {
      Swiper,
      SwiperSlide
   },
   data() {
      return {
         dataSlide: Last_places,
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
         this.currentBackground = this.dataSlide.slides[swiper.activeIndex].img;
      },

      saveSlideDataAndNavigate(slide) {
         // Salva i dati della slide nel sessionStorage
         sessionStorage.setItem('selectedSlideData', JSON.stringify(slide));
         // Naviga alla pagina di dettaglio
         this.$router.push({ name: 'Travel_detail' });
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
   <div
     class="last_places text-white mb-5"
     :style="{backgroundImage: `url(${currentBackground})`}"
   >
      <h4 class="col-12">Ultimi posti per la tua estate</h4>

      <div class="external_card">
         <swiper
            class="_swiper"
            :slides-per-view="slidesPerView"
            :space-between="spaceBetween"
            :loop="false"
            :pagination="{ clickable: true }" 
            @swiper="onSwiper"
            @slideChange="updateBackground"
            modules="[Pagination]" 
         >
            <swiper-slide
              v-for="(slide, index) in dataSlide.slides"
              :key="index"
            >
               <!-- Usa il metodo per salvare i dati e navigare -->
               <a
                  href="#"
                  @click.prevent="saveSlideDataAndNavigate(slide)"
                  class="slide-link text-white"
               >
                  <div class="_card">
                     <h2>{{ slide.title }}</h2>
                     <p>a Partire da {{ slide.price }}</p>
                     <button class="btn"><i class="fa-solid fa-arrow-right"></i></button>
                  </div>
               </a>

            </swiper-slide>
         </swiper>
      </div>

   </div>







<b>  </b>




<p>  </p>




<p> <b>  </b> </p>      <p>  </p>







<!--       width:90%;height:500px;border-radius:20px;box-shadow:0px 0px 30px rgb(160, 160, 160);      -->






</template>




<style lang="scss" scoped>
.last_places {
   position: relative;
   height: 600px;
   display: flex;
   justify-content: center;

   background-size: cover;
   background-position: center;
   transition: all 0.4s ease;

   h4 {
      font-size: 20px;
      font-weight: 800;
      text-transform: uppercase;
      text-align: center;
      max-width: 100%;
      margin: 50px 20px 0 20px;
      position: absolute;
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
         padding: 100px 0;
         
         background-color: #ffffff15;
         backdrop-filter: blur(8px);
         position: relative;
         left: 50%;
         transform: translateX(-50%);

         h2 {
            font-size: 25px;
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

      // /* Stile per i punti di paginazione */
      // .swiper-pagination-bullet {
      //    width: 12px;
      //    height: 12px;
      //    background: white;  // Colore dei punti di paginazione
      //    opacity: 0.7;
      //    margin: 0 4px;
      // }

      // .swiper-pagination-bullet-active {
      //    background: rgb(112, 50, 219);  // Colore del punto attivo
      //    opacity: 1;
      // }

      // .swiper-pagination {
      //    position: absolute;
      //    bottom: 20px;
      //    width: 100%;
      //    text-align: center;
      //    z-index: 10;
      //    display: flex;
      //    justify-content: center;
      //    align-items: center;
      //    height: 20px;  // Altezza forzata
      // }
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
   .last_places {

      h4 {
         font-size: 25px;
      }
   }
}


/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
   .last_places {

      h4 {
         font-size: 30px;
      }
   }
}


/* Media query per dispositivi con larghezza maggiore o uguale a 1500px */
@media (min-width: 1500px) {
  
}

</style>

