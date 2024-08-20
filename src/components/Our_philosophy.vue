
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
        { icon: 'Stay.svg', name: 'stay', description: 'Scopri un meraviglioso luogo d\'incontro e di scambio tra viaggiatori come te e le comunità locali.' },
        { icon: 'Connect.svg', name: 'connect', description: 'Stringi nuovi legami con luoghi e persone e crea ricordi che dureranno per sempre.' },
        { icon: 'Explore.svg', name: 'explore', description: 'Fai del mondo la tua casa e conosci nuovi posti in modo autentico.' },
        // { icon: 'Stay.svg', name: 'stay', description: 'Scopri un meraviglioso luogo d\'incontro e di scambio tra viaggiatori come te e le comunità locali.' },
        // { icon: 'Connect.svg', name: 'connect', description: 'Stringi nuovi legami con luoghi e persone e crea ricordi che dureranno per sempre.' },
        // { icon: 'Explore.svg', name: 'explore', description: 'Fai del mondo la tua casa e conosci nuovi posti in modo autentico.' },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    updateActiveIndex(swiper) {
      this.activeIndex = swiper.realIndex;
    },
  },
  computed: {
    filteredSlides() {
      return this.slides.slice(0, 3); // Restituisce solo i primi 3 elementi dell'array
    }
  }
};
</script>





<template>
  <div class="our_philosophy">
    <h4>La nostra filosofia di viaggio</h4>

    <!-- mobile -->
    <div class="d-lg-none">

      <!-- First Swiper -->
      <Swiper
        :slides-per-view="3"
        :space-between="-30"
        :loop="true"
        @slideChange="updateActiveIndex"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ 'active-slide': index === activeIndex }"
          class="swiper-slide-up mt-5"
        >
          <div class="slide-content-up">
            <img :src="`/img/${slide.icon}`" :alt="slide.name">
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Second Swiper -->
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :loop="true"
        @slideChange="updateActiveIndex"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div class="swiper-slide-down px-5 mt-5">
            <h5>{{ slide.name }}</h5>
            <p>{{ slide.description }}</p>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>


    <!-- desktop -->
    <div class="container d-none d-lg-flex justify-content-center">
      <div
        class="_desk col-3 text-center mx-5 mt-5"
        v-for="(slide, index) in filteredSlides"
        :key="index"
      >
        <img :src="`/img/${slide.icon}`" :alt="slide.name">
        <h5 class="mt-3">{{ slide.name }}</h5>
        <p class="fs-6">{{ slide.description }}</p>
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
    h4 {
      font-size: 32px;

    }
  }
}

</style>
