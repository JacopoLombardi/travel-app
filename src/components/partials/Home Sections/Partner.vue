
<script>
import HomePage_data from '../../../data/json_data/HomePage_data.json'

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      dataSlide: HomePage_data.Partner,
      slidesPerView: 1.2,
      spaceBetween: 10
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
    saveSlideNameAndNavigate(name) {
      // Naviga alla pagina di dettaglio con il parametro 'name'
      this.$router.push({ name: 'Partner_detail', query: { name: name } });
    }
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
        class="px-4"
      >
         <SwiperSlide
            v-for="(slide, index) in dataSlide"
            :key="index"
         >

            <div class="card">
               <a
                  href="#"
                  @click.prevent="saveSlideNameAndNavigate(slide.name_push)"
                  class="slide-link text-white"
               >
                  <img :src="slide.image" :alt="slide.name">
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
               </a>
            </div>

         </SwiperSlide>
      </Swiper>

   </div>
</template>




<style lang="scss" scoped>

._partner {
   padding: 50px 0;

   h4 {
      font-size: 23px;
      text-transform: uppercase;
      margin-left: 1.5rem;
      margin-bottom: 40px;
   }

   .card {
      width: 100%;
      height: 280px;
      border-radius: 20px;
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
      padding: 50px 3rem;

      h4 {
         font-size: 30px;
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
      padding: 80px 5rem;

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