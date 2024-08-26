
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      slides: [
         {name: 'instax', description: 'I migliori ricordi del tuo viaggio, per sempre con te.', tag: 'fotografia', action: 'scopri instax', imageUrl: 'https://images.prismic.io/blind/ZpkUWx5LeNNTxRWV_FlatlaySNSSept2022group.jpg?auto=format%2Ccompress&fit=max&w=1920'},
         {name: 'bookbeat', description: 'Ascolta i racconti che preferisci durante i tuoi tragitti in bus o in aereo.', tag: 'audiolibri', action: 'scopri di più', imageUrl: 'https://images.prismic.io/blind/Zk9KZiol0Zci9ZLk_bb_nextstart_it.webp?auto=format%2Ccompress&fit=max&w=1920'},
         {name: 'scalapay', description: 'Paga in 3 rate il tuo viaggio', tag: 'Pagamenti', action: 'scopri di più', imageUrl: 'https://images.prismic.io/blind/654104610b105250cf53c521_Hero.png?auto=format%2Ccompress&fit=max&w=1920'},
         {name: 'creative harbour', description: 'Lavora in giro per il mondo!', tag: 'Remote working', action: 'scopri di più', imageUrl: 'https://images.prismic.io/blind/65a8f1bc7a5e8b1120d5a52d_CreativeHarbour.jpg?auto=format%2Ccompress&fit=max&w=1920'},
         {name: 'kappa FuturFestival', description: 'The Future is in Torino!', tag: 'eventi', action: 'scopri di più', imageUrl: 'https://images.prismic.io/blind/659d17b9531ac2845a273d24_WideKappa2000x842.jpeg?auto=format%2Ccompress&fit=max&w=2048'},
         {name: 'tutti i partner', description: 'Insieme ai nostri partner, ci impegniamo ogni giorno per creare esperienze di viaggio indimenticabili.', tag: 'partner', action: 'dai un\'occhiata', imageUrl: 'https://images.prismic.io/blind/6538d5660b105250cf53a45f_WideScalapay16_9.jpg?auto=format%2Ccompress&fit=max&w=1920'},
      ],
      slidesPerView: 1.2,
      spaceBetween: 10,
    };
  },

  methods:{
   updateSlidesPerView() {
      const width = window.innerWidth;

      if (width < 450) {
        this.slidesPerView = 1.2;
        this.spaceBetween = 10;
      } else if (width >= 500 && width < 768) {
        this.slidesPerView = 1.7;
        this.spaceBetween = 10;
      } else if (width >= 768 && width < 992) {
        this.slidesPerView = 2.5;
        this.spaceBetween = 20;
      }
    },
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
};
</script>





<template>
   
   <div class="_partner">
      <h4>scopri i nostri partner</h4>

      <Swiper
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        :loop="false"
      >
         <SwiperSlide
            v-for="(slide, index) in slides"
            :key="index"
         >

            <div class="card">
               <img :src="slide.imageUrl" alt="">
               <div class="card-body">
               <span>{{ slide.tag }}</span>
               <div class="card-body-title">
                  <h5 class="card-title">{{ slide.name }}</h5>
                  <p class="card-text">{{ slide.description }}</p>
               </div>
               <button class="btn">
                  {{ slide.action }} 
                  <i class="fa-solid fa-circle-chevron-right ms-2"></i>
               </button>
               </div>
            </div>

         </SwiperSlide>
      </Swiper>

   </div>
  
</template>






<style lang="scss" scoped>

._partner {
   margin: 50px 0;

   h4 {
      font-weight: 800;
      font-size: 23px;
      text-transform: uppercase;
      margin-left: 1.5rem;
      margin-bottom: 40px;
   }

   .card {
      width: 100%;
      height: 280px;
      border-radius: 20px;
      margin-left: 1.5rem;
      border: none;
      position: relative;

      img {
         border-radius: 20px;
         width: 100%;
         height: 100%;
         object-fit: cover;
         position: absolute;
         filter: brightness(85%);
      }

      .card-body {
         color: white;
         position: absolute;
         top: 0;
         width: 100%;
         height: 100%;
         padding: 20px;

         span {
         display: block;
         width: fit-content;
         background-color: rgb(255, 255, 255);
         color: rgb(255, 123, 0);
         font-size: 12px;
         text-transform: capitalize;
         border-radius: 20px;
         margin-top: 2px;
         padding: 7px 14px;
         }

         .card-body-title {
            h5 {
               font-size: 20px;
               text-transform: uppercase;
               font-weight: 800;
               margin-top: 17px;
               margin-bottom: 12px;
            }

            p {
               font-size: 13px;
            }
         }

         .btn {
            position: absolute;
            right: 15px;
            bottom: 17px;
            padding: 8px 18px;
            background-color: rgb(255, 102, 0);
            font-size: 14px;
            font-weight: 500;
            color: white;
            border-radius: 10px;
         }
      }
   }

}




/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
   
   ._partner {
      margin: 90px 10%;

      h4 {
         font-size: 32px;
         text-align: center
      }

      .card {
         margin-left: 0;
         height: 300px;
      }
   }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   ._partner {
      .card {

         .card-body {
            span {
               font-size: 15px;
               padding: 7px 14px;
            }

            .card-body-title {
               h5 {
                  font-size: 25px;
                  margin-top: 17px;
                  margin-bottom: 12px;
               }

               p {
                  font-size: 15px;
               }
            }

            .btn {
               font-size: 16px;
            }
         }
      }
   }
}


</style>