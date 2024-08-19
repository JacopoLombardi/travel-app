
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
        {
          name: 'mediterraneo',
          price: '489',
          imageUrl: 'https://images.prismic.io/blind/Zkxm9iol0Zci9T8n_hero-1.webp?auto=format%2Ccompress&fit=max&w=750',
        },
        {
          name: 'yeah',
          price: '799',
          imageUrl: 'https://images.prismic.io/blind/ZrJHnEaF0TcGIulT_Budget-lp.webp?auto=format%2Ccompress&fit=max&w=640',
        },
        {
          name: 'wow',
          price: '1169',
          imageUrl: 'https://images.prismic.io/blind/Zh0AhzjCgu4jz0Wi_last-minute.jpeg?auto=format%2Ccompress&fit=max&w=640',
        }
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
        this.spaceBetween = -50;
      } else if (width >= 350 && width < 450) {
        this.slidesPerView = 1;
        this.spaceBetween = -90;
      } else if (width >= 450 && width < 576) {
        this.slidesPerView = 1;
        this.spaceBetween = -190;
      } else if (width >= 576 && width < 768) {
        this.slidesPerView = 2;
        this.spaceBetween = -40;
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
   <div class="_university">
      
      <!-- title -->
      <div class="_title text-md-center">
         <h3>Blind</h3>
         <h4>Sei Universitario?</h4>
         <p>Scopri i nostri viaggi dedicati agli under 30.</p>
      </div>

      <!-- swiper mobile -->
      <Swiper
         class="_swiper d-md-none"
         :slides-per-view="slidesPerView"
         :space-between="spaceBetween"
         :loop="false"
      >
         <SwiperSlide v-for="(slide, index) in slides" :key="index">
            <div class="card p-0">
               <img :src="slide.imageUrl" class="card-img-top" alt="" />
               <div class="card-body">
                  <div class="card-body-title">
                     <h5 class="card-title">{{slide.name}}</h5>
                     <p class="card-text">da {{slide.price}}€</p>
                  </div>
                  <button class="btn">
                     <i class="fa-solid fa-chevron-right"></i>
                  </button>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>

      <!-- desktop -->
       <div class="d-none d-md-flex justify-content-center">
         <div 
            class="card p-0"
            v-for="(slide, index) in slides"
            :key="index"
         >
            <img :src="slide.imageUrl" class="card-img-top" alt="" />

            <div class="card-body d-none d-md-flex">
               <div class="card-body-title">
                  <h5 class="card-title">{{slide.name}}</h5>
                  <p class="card-text">da {{slide.price}}€</p>
               </div>
               <button class="btn">
                  <i class="fa-solid fa-chevron-right"></i>
               </button>

               <div class="bg_hidden d-flex d-none d-lg-block">
                  <p>7 notti / 8 giorni</p>
               </div>
            </div>

         </div>
      </div>
    </div>

</template>






<style lang="scss" scoped>
._university {
   background-color: rgba(176, 199, 255, 0.438);
   padding: 50px 0 50px 20px;

   ._title {
      padding: 0 0 40px 0;

      h3 {
         color: rgb(131, 158, 255);
         font-size: 50px;
      }

      h4 {
         font-weight: 800;
         font-size: 20px;
         text-transform: uppercase;
      }

      p {
         color: rgb(131, 158, 255);
         font-size: 11px;
      }
   }


   .card {
      width: 230px;
      height: 320px;
      border-radius: 20px;
      border: none;
      position: relative;

      img {
         border-radius: 20px;
         width: 100%;
         height: 100%;
         object-fit: cover;
         position: absolute;
         filter: brightness(90%);
      }

      .card-body {
         background-color: rgb(131, 158, 255);
         color: white;
         position: absolute;
         bottom: 0;
         padding: 0.8rem;
         width: 100%;
         border-bottom-left-radius: 20px;
         border-bottom-right-radius: 20px;

         .card-body-title {
            width: 80%;

            h5 {
               font-size: 16px;
               text-transform: uppercase;
               font-weight: 800;
               margin: 0;
            }

            p {
               font-weight: 500;
            }
         }

         .btn {
            position: absolute;
            right: 5%;
            bottom: 50%;
            transform: translateY(50%);
            padding: 8px 12.5px;
            background-color: white;
            color: rgb(131, 158, 255);
            font-size: 10px;
            border-radius: 20px;
         }
      }
   }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._university {

      ._title {
         padding: 20px 0 40px 30px;

         h3 {
            color: rgb(131, 158, 255);
            font-size: 70px;
         }

         h4 {
            font-weight: 800;
            font-size: 30px;
            text-transform: uppercase;
         }

         p {
            color: rgb(131, 158, 255);
            font-size: 15px;
         }
      }

      .card {
         width: 25%;
         margin: 1rem;
         overflow: hidden;

         img {
            transition: all 0.20s ease-in-out;
         }

         .card-body {
            background-color: transparent;
            width: 100%;
            padding-left: 20px;
            bottom: 0;

            .bg_hidden {
               transition: all 0.20s ease-in-out;
               position: absolute;
               background-color: rgb(131, 158, 255);
               height: 70px;
               width: 100%;
               bottom: -110%;
               left: 0;

               p {
                  position: absolute;
                  bottom: 13%;
                  margin-left: 20px;
               }

            }
            
            .card-body-title {

               h5 {
                  font-size: 16px;
                  font-weight: 800;
                  text-transform: uppercase;
                  position: relative;
                  z-index: 10;
               }
            }

            .btn {
               z-index: 12;
            }
         }

         &:hover .bg_hidden {
            bottom: 0;
         }
            
         &:hover img {
            filter: brightness(100%);
            transform: translateY(-15%);
         }
      }
   }
}
</style>