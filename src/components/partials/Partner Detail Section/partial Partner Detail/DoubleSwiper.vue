
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Controller } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
   props: {
      data: Object
   },
   components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Pagination, Controller],
      firstSwiper: null,
      secondSwiper: null,
      activeIndex: 0, // Indice della slide attiva
    };
  },
  methods: {
    setFirstSwiper(swiper) {
      this.firstSwiper = swiper;
      if (this.secondSwiper && this.secondSwiper.controller) {
        this.secondSwiper.controller.control = swiper; 
      }
    },
    setSecondSwiper(swiper) {
      this.secondSwiper = swiper;
      if (this.firstSwiper && this.firstSwiper.controller) {
        this.firstSwiper.controller.control = swiper; 
      }
    },
    onSlideChange(swiper) {
      this.activeIndex = swiper.realIndex; // Usa realIndex per ottenere l'indice reale
    },
  }
};
</script>




<template>
   <!-- How It Works -->
   <div class="how_work d-flex flex-column">
      <h3
        :style="{ color: data.how_work.color_title }"
      >
        {{ data.how_work.title }}
      </h3>

      <!-- Mobile -->
      <div class="d-md-none">
         <!-- First Swiper -->
         <Swiper
            :slides-per-view="3"
            :space-between="-30"
            :loop="true"
            :pagination="true"
            :modules="modules"
            @swiper="setFirstSwiper"
            @slideChange="onSlideChange"
            class="_swiper"
         >
            <SwiperSlide
            v-for="(item, index) in data.how_work.cards"
            :key="index"
            :class="['swiper-slide-up', index === activeIndex ? 'active-slide' : '', 'mt-5']"
            >
               <div class="slide-content-up">
                  <img :src="item.image" alt=""/>
               </div>
            </SwiperSlide>
         </Swiper>

         <!-- Second Swiper -->
         <Swiper
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
            @swiper="setSecondSwiper"
         >
            <SwiperSlide
            v-for="(item, index) in data.how_work.cards"
            :key="index"
            >
               <div class="swiper-slide-down px-5 mt-5">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.text }}</p>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>

      <!-- desktop -->
      <div class="_desk d-none d-md-flex">
         <div
            v-for="item in data.how_work.cards"
            :key="item"
            class="_box text-center"
         >
            <img :src="item.image" alt="">
            <p>{{ item.text }}</p>
         </div>
      </div>

      <!-- button -->
      <div v-if="data.how_work.btn" class="text-center mt-5">
         <a :href="data.how_work.btn.href" class="btn">{{ data.how_work.btn.text }}</a>
      </div>

   </div>
</template>




<style lang="scss" scoped>

.how_work {
   padding: 50px 1rem;

   h3 {
      font-size: 21px;
      text-transform: uppercase;
      font-weight: 900;
   }

   


   .swiper-slide-up {
      display: flex;
      justify-content: center;
      line-height: 100px;
      transition: transform 0.3s ease;

      .slide-content-up {
         height: 100px;

         img {
            width: 70px;
            filter: opacity(60%);
            transition: width 0.3s ease;
         }
      }

      &.active-slide img {
         width: 100px;
         filter: opacity(100%);
      }
   }

   .swiper-slide-down {
      h4 {
         text-transform: uppercase;
         font-weight: 900;
      }

      p {
         font-size: 14px;
         line-height: 18px;
      }
   }

   .btn {
      color: white;
      background-color: rgb(230, 72, 92);
      border-radius: 10px;
      font-size: 14px;
      padding: 8px 15px;
      font-weight: 600;
   }
}









/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   .how_work {
      padding: 80px 5rem;
      align-items: center;

      h3 {
         text-align: center;
         font-size: 30px;
         margin-bottom: 50px;
      }

      .btn {
         border-radius: 10px;
         font-size: 18px;
         padding: 8px 20px;
      }

      ._desk {
         justify-content: space-around;
         width: 80%;
         max-width: 1700px;

         ._box {
            width: 300px;

            img {
               margin-bottom: 30px;
            }
         }
      }
   }
}

</style>