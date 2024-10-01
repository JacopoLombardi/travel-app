
<script>
import HomePage_data from '../../../data/json_data/HomePage_data.json';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Controller } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      dataSlide: HomePage_data.our_philosophy,
      modules: [Pagination, Controller],
      firstSwiper: null,
      secondSwiper: null,
      activeIndex: 0 // Indice della slide attiva
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
  <div class="our_philosophy">
    <h4>{{ dataSlide.title }}</h4>

    <!-- mobile -->
    <div class="d-lg-none">

      <!-- First Swiper -->
      <Swiper
        :slides-per-view="3"
        :space-between="-30"
        :loop="true"
        :pagination="true"
        :modules="modules"
        @swiper="setFirstSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide
          v-for="(item, index) in dataSlide.cards"
          :key="index"
          :class="['swiper-slide-up', index === activeIndex ? 'active-slide' : '', 'mt-5']"
          class="swiper-slide-up mt-5"
        >
          <div class="slide-content-up">
            <img :src="item.image" :alt="item.title">
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
          v-for="(item, index) in dataSlide.cards"
          :key="index"
        >
          <div class="swiper-slide-down px-5 mt-5">
            <h5>{{ item.title }}</h5>
            <p>{{ item.text }}</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>


    <!-- desktop -->
    <div class="container d-none d-lg-flex justify-content-center">
      <div
        class="_desk col-3 text-center mx-5 mt-5"
        v-for="(item, index) in dataSlide.cards"
        :key="index"
      >
        <img :src="item.image" :alt="item.title">
        <h5 class="mt-3">{{ item.title }}</h5>
        <p class="fs-6">{{ item.text }}</p>
      </div>
    </div>

  </div>
</template>




<style lang="scss" scoped>

.our_philosophy {
  padding: 50px 0;
  height: auto;

  h4 {
    font-size: 23px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
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

  .swiper-slide-down,
  ._desk {
    h5 {
      color: rgb(90, 61, 255);
      font-size: 30px;
      font-weight: 800;
      text-transform: uppercase;
    }

    p {
      font-size: 14px;
      line-height: 130%;
    }
  }
}



/* Media query per dispositivi con larghezza minore o uguale a 370px */
@media (max-width: 370px) {

  .our_philosophy {
    .swiper-slide-up {
      line-height: 70px;
      height: 75px;

      .slide-content-up {
        img {
          width: 45px;
        }
      }

      &.active-slide img {
        width: 70px;
      }
    }
  }

}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  .our_philosophy {
    padding: 80px 5rem;
    h4 {
      font-size: 32px;

    }
  }
}

</style>
