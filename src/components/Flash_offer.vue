

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data(){
    return {
      slides: [
        { name: 'offerte lampo', tag: 'promo', description: 'Ultimi posti', imageUrl: 'https://images.prismic.io/blind/Zkxm9iol0Zci9T8n_hero-1.webp?auto=format%2Ccompress&fit=max&w=750' },
        { name: 'viaggi per ogni tipo di budget', tag: 'club', description: 'Tutte le destinazioni per fascie di prezzo', imageUrl: 'https://images.prismic.io/blind/ZrJHnEaF0TcGIulT_Budget-lp.webp?auto=format%2Ccompress&fit=max&w=640' },
        { name: 'partenze last minute', tag:'sconti', description: 'Prenota ora', imageUrl: 'https://images.prismic.io/blind/Zh0AhzjCgu4jz0Wi_last-minute.jpeg?auto=format%2Ccompress&fit=max&w=640' },
        { name: 'parti a settembre', tag: 'partenze', description: 'Scopri le destinazioni', imageUrl: 'https://images.prismic.io/blind/ZkYxbiol0Zci9N3K_zanzibar.webp?auto=format%2Ccompress&fit=max&w=640' },
        { name: 'parti a ottobre', tag: 'partenze', description: 'Scopri le destinazioni', imageUrl: 'https://images.prismic.io/blind/ZkYxcCol0Zci9N3M_kenya.webp?auto=format%2Ccompress&rect=0%2C186%2C2500%2C2500&w=640&fit=max' },
        { name: 'natale e capodanno', tag: 'partenze', description: 'Scopri tutte le destinazioni', imageUrl: 'https://images.prismic.io/blind/Znwkb5bWFbowe4MD_Hero-Rio.webp?auto=format%2Ccompress&fit=max&w=640' },
        { name: 'it\'s time for africa', tag: 'africa', description: 'Il mix perfetto tra relax e avventura!', imageUrl: 'https://images.prismic.io/blind/6541099e0b105250cf53c530_kenya-gallery3.jpg?auto=format%2Ccompress&fit=max&w=640' }
      ],
      slidesPerView: 1,
      spaceBetween: -30,
    };
  },
  methods: {
      updateSlidesPerView() {
         const width = window.innerWidth;

         if (width < 350) {
            this.slidesPerView = 1;
            this.spaceBetween = 0;
         } else if (width >= 351 && width < 450) {
            this.slidesPerView = 1;
            this.spaceBetween = -60;
         } else if (width >= 451 && width < 576) {
            this.slidesPerView = 1;
            this.spaceBetween = -150;
         } else if (width >= 576 && width < 768) {
            this.slidesPerView = 2;
            this.spaceBetween = 0;
         }
      },

      updateBackground(swiper) {
         this.currentBackground = this.places[swiper.activeIndex].imageUrl;
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
   <div class="flah_offer">

      <!-- mobile -->
      <Swiper
        class="_swiper"
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :loop="false"
        @swiper="onSwiper"
      >
         <SwiperSlide
           v-for="(slide, index) in slides"
           :key="index"
         >
            <div class="card">
               <img :src="slide.imageUrl" class="card-img-top" alt="">
               <div class="card-body">
                  <span>{{ slide.tag }}</span>
                  <div class="card-body-title">
                     <h5 class="card-title">{{ slide.name }}</h5>
                     <p class="card-text">{{ slide.description }}</p>
                  </div>
                  <button class="btn"><i class="fa-solid fa-arrow-right"></i></button>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>


      

   </div>
</template>





<style lang="scss" scoped>
.flah_offer {
   margin: 100px 0 50px 0;

   ._swiper {
      padding-left: 1rem;
   }

   .card {
      width: 270px;
      height: 270px;
      border-radius: 20px;
      border: none;
      position: relative;

      img {
         border-radius: 20px;
         width: 100%;
         height: 100%;
         object-fit: cover;
         position: absolute;
         filter: brightness(70%);
      }

      .card-body {
         color: white;
         position: absolute;
         bottom: 0;
         width: 100%;

         span {
            background-color: rgb(255, 234, 212);
            color: rgb(255, 136, 0);
            font-size: 14px;
            text-transform: capitalize;
            border-radius: 20px;
            padding: 7px 14px;

         }

         .card-body-title {
           width: 75%;

            h5 {
               font-size: 20px;
               text-transform: uppercase;
               font-weight: 800;
               margin-top: 14px;
            }

            p {
               font-weight: 500;
            }
         }

         .btn {
            position: absolute;
            right: 5%;
            bottom: 10%;
            padding: 3px 9px;

            background-color: rgb(255, 234, 212);
            color: rgb(255, 136, 0);
            border-radius: 20px;
         }
      }
   }

}




/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
   
  
}

</style>