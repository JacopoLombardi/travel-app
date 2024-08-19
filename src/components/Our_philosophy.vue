
 <script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
 import 'swiper/swiper-bundle.css';
 
 export default {
   components: {
     Swiper,
     SwiperSlide,
   },
   data() {
     return {
       slides: [
         { icon: 'Stay.svg' },
         { icon: 'Connect.svg' },
         { icon: 'Explore.svg' },
         { icon: 'Stay.svg' },
         { icon: 'Connect.svg' },
         { icon: 'Explore.svg' },
       ],
       activeIndex: 0,
     };
   },
   methods: {
     handleSlideChange(swiper) {
       this.activeIndex = swiper.realIndex;
     },
     slideTo(index) {
       const swiperInstance = this.$refs.swiper.$swiper;
       if (swiperInstance) {
         swiperInstance.slideToLoop(index + swiperInstance.loopedSlides, 500);
       }
     },
   },
 };
 </script>
 




 <template>
   <div class="our_philosophy">
     <h4>La nostra filosofia di viaggio</h4>
 
     <Swiper
       class="_swiper"
       :slides-per-view="3"
       :space-between="0"
       :loop="true"
       @slideChange="handleSlideChange"
     >
       <SwiperSlide
         v-for="(slide, index) in slides"
         :key="index"
         :class="{ 'active-slide': index === activeIndex }"
         @click="slideTo(index)"
       >
         <div class="mt-5">
           <img :src="`/img/${slide.icon}`" alt="">
         </div>
       </SwiperSlide>
     </Swiper>
   </div>
 </template>





 <style lang="scss" scoped>
 .our_philosophy {
   height: 600px;
   padding: 50px 0;
   background-color: rgba(253, 202, 202, 0.813);
 
   h4 {
     font-size: 23px;
     text-transform: uppercase;
     text-align: center;
     font-weight: 800;
   }
 
   .swiper-slide {
     display: flex;
     justify-content: center;
     transition: transform 0.3s ease;
   }
 
   .swiper-slide img {
     width: 70px; /* Dimensione standard */
     transition: width 0.3s ease;
   }
 
   .swiper-slide.active-slide img {
     width: 100px; /* Dimensione ingrandita per la slide attiva */
   }
 }
 
 </style>
 