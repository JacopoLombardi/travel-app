
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
          imageUrl: 'https://images.prismic.io/blind/653407bafbd9a45bcec82240_Mediterraneo.jpg?auto=format,compress',
        },
        {
          name: 'yeah',
          price: '799',
          imageUrl: 'https://images.prismic.io/blind/653a62790b105250cf53b4dd_card-yeah-1.png?auto=format,compress',
        },
        {
          name: 'wow',
          price: '1169',
          imageUrl: 'https://images.prismic.io/blind/654124c10b105250cf53c57c_HighAngleBoatonBlueOcean.jpg?auto=format,compress',
        }
      ],
      slidesPerView: 1.3,
      spaceBetween: 20,
    };
  },

  methods: {
    updateSlidesPerView() {
      const width = window.innerWidth;

      if (width < 450) {
        this.slidesPerView = 1.3;
        this.spaceBetween = 15;
      } else if (width >= 450 && width < 576) {
        this.slidesPerView = 1.8;
        this.spaceBetween = 15;
      } else if (width >= 576 && width < 768) {
        this.slidesPerView = 2.5;
        this.spaceBetween = 15;
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
            <div class="card">
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

               <div class="bg_hidden">
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
   padding: 50px 0 70px;

   ._title {
      margin-bottom: 40px;
      margin-left: 25px;

      h3 {
         color: rgb(131, 158, 255);
         font-size: 50px;
      }

      h4 {
         font-weight: 800;
         font-size: 23px;
         text-transform: uppercase;
      }

      p {
         color: rgb(131, 158, 255);
         font-size: 13px;
      }
   }

   .card {
      width: 100%;
      height: 320px;
      border-radius: 20px;
      margin-left: 20px;
      position: relative;
      border: none;

      img {
         width: 100%;
         height: 100%;
         border-radius: 20px;
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
         border-radius: 0 0 20px 20px;

         .card-body-title {
            width: 80%;

            h5 {
               font-size: 16px;
               font-weight: 800;
               text-transform: uppercase;
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
      padding: 70px 0 70px 25px;

      ._title {
         h3 {
            font-size: 70px;
         }

         h4 {
            font-size: 30px;
         }

         p {
            font-size: 15px;
         }
      }

      .card {
         width: 25%;
         margin: 1rem;
         overflow: hidden;

         img {
            transition: all 0.2s ease-in-out;
         }

         .card-body {
            background-color: transparent;
            width: 100%;
            bottom: 0;

            .bg_hidden {
               position: absolute;
               background-color: rgb(131, 158, 255);
               height: 70px;
               width: 100%;
               bottom: -110%;
               left: 0;
               transition: all 0.2s ease-in-out;

               p {
                  position: absolute;
                  font-size: 16px;
                  bottom: 20%;
                  margin-left: 14px;
               }
            }

            .card-body-title {
               h5 {
                  position: relative;
                  z-index: 2;
                  font-size: 22px;
               }

               p {
                  font-size: 17px;
               }
            }

            .btn {
               z-index: 2;
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
