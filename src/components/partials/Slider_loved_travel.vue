<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
   components: {
      Swiper,
      SwiperSlide
   },
   props: {
      onPrevSlide: {
         type: Function,
         required: true
      },
      onNextSlide: {
         type: Function,
         required: true
      }
   },

   data() {
      return {
         swiperInstance: null,
         slides: [
            {
               title: 'Thailandia',
               price: 'Da 449 €',
               img: 'https://images.prismic.io/blind/Zqn_GR5LeNNTxpBk_IMG_2301-Large.webp?auto=format,compress'
            },
            {
               title: 'Sharm el-sheikh',
               price: 'Da 349 €',
               img: 'https://images.prismic.io/blind/Zkr-rCol0Zci9Rja_Egitto-Cover.webp?auto=format,compress'
            },
            {
               title: 'Marocco',
               price: 'Da 429 €',
               img: 'https://images.prismic.io/blind/653793210b105250cf53a3c0_Marocco-Merzouga.jpeg?auto=format,compress'
            },
            {
               title: 'Zanzibar',
               price: 'Da 429 €',
               img: 'https://images.prismic.io/blind/ZkYxbiol0Zci9N3K_zanzibar.webp?auto=format,compress'
            },
            {
               title: 'Kenya',
               price: 'Da 569 €',
               img: 'https://images.prismic.io/blind/ZnwhO5bWFbowe4Hb_Kenya-1.webp?auto=format,compress'
            },
            {
               title: 'Rodi',
               price: 'Da 399 €',
               img: 'https://images.prismic.io/blind/ZkyWPSol0Zci9UYe_Rodi.webp?auto=format,compress'
            },
            {
               title: 'Kos',
               price: 'Da 449 €',
               img: 'https://images.prismic.io/blind/Zk4JqSol0Zci9W-7_Grecia.webp?auto=format,compress'
            }
         ],
         slidesPerView: 2,
         spaceBetween: 30,
      };
   },

   methods: {
      updateSlidesPerView() {
         const width = window.innerWidth;

         if (width < 576) {                         // Mobile
            this.slidesPerView = 2;
            this.spaceBetween = 10;
         } else if (width >= 768 && width < 992) {  // Tablet
            this.slidesPerView = 3;
            this.spaceBetween = -90;
         } else if (width >= 992 && width < 1500) {  // Laptop
            this.slidesPerView = 3;
            this.spaceBetween = -300;
         } else {                                   // Desktop 
            this.slidesPerView = 4;
            this.spaceBetween = -400;
         }
      },

      //  funzioni per avanzamento dello slider
      prevSlide() {
         if (this.swiperInstance) {
            this.swiperInstance.slidePrev();
         }
      },
      nextSlide() {
         if (this.swiperInstance) {
            this.swiperInstance.slideNext();
         }
      },
      onSwiper(swiper) {
         this.swiperInstance = swiper;
         this.onPrevSlide(this.prevSlide);
         this.onNextSlide(this.nextSlide);
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
   <!-- slider -->
   <swiper
     class="_swiper"
     :slides-per-view="slidesPerView"
     :space-between="spaceBetween"
     :loop="true"
     pagination
     @swiper="onSwiper"
   >

      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
      >
         <div class="card">
            <img :src="slide.img" :alt="slide.title">

            <!-- mobile / tablet -->
            <div class="card-body-mobile card-body d-lg-none">
               <h5>{{ slide.title }}</h5>
               <p>{{ slide.price }}</p>
               <button class="btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <!-- desk -->
            <div class="card-body-desk card-body d-none d-lg-block">
               <h5>{{ slide.title }}</h5>
               <p>{{ slide.price }}</p>
               <button class="btn"><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div class="bg_hidden d-flex d-none d-lg-block">
               <p>7 notti / 8 giorni</p>
            </div>

         </div>
      </swiper-slide>

   </swiper>
</template>






<style lang="scss" scoped>
$border-radius: 20px;

._swiper {
   margin-left: 2rem;
}

.card {
   width: 12rem;
   color: white;
   margin: 0 10px;
   border: none;
   border-radius: $border-radius;

   img {
      height: 200px;
      object-fit: cover;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
   }

   .card-body-mobile {
      position: relative;
      background-color: rgb(255, 94, 0);
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;

      h5 {
         font-size: 15px;
         font-weight: 800;
         text-transform: uppercase;
      }

      button {
         background-color: white;
         color: rgb(255, 94, 0);
         border-radius: 50%;
         padding: 2px 10px;
         position: absolute;
         bottom: 15%;
         right: 7%;
      }
   }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {


   .card {
      width: 18rem;
      height: 25rem;
      overflow: hidden;

      img {
         height: 500px;
         border-radius: $border-radius;
         filter: brightness(80%);
         position: relative;
         transition: all 0.20s ease-in-out;
      }

      .bg_hidden {
         transition: all 0.20s ease-in-out;
         position: absolute;
         background-color: rgb(255, 94, 0);
         height: 80px;
         width: 100%;
         bottom: -20%;

         p {
            position: absolute;
            bottom: 13%;
            margin-left: 20px;
         }

      }

      &:hover .bg_hidden {
         bottom: 0;
      }

      &:hover img {
         filter: brightness(100%);
         transform: translateY(-15%);
      }

      .card-body-desk {
         width: 100%;
         position: absolute;
         padding-left: 20px;
         bottom: 0;

         h5 {
            font-weight: 800;
            text-transform: uppercase;
            position: relative;
            z-index: 10;
         }

         button {
         background-color: white;
         color: rgb(255, 94, 0);
         border-radius: 50%;
         padding: 7px 15px;
         position: absolute;
         z-index: 12;
         bottom: 20%;
         right: 7%;
      }
      }
   }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 1500px */
@media (min-width: 1500px) {}
</style>