<script>
// libreria swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
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
      spaceBetween: 90
    };
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
  methods: {

    // funzione per determinare il numero di slide e 
    // lo spazio tra di loro per ogni schermo
    updateSlidesPerView() {
      const width = window.innerWidth;

      if (width < 576) {                         // Mobile
        this.slidesPerView = 2;
        this.spaceBetween = 90;

      } else if (width >= 768 && width < 992) {  // Tablet
        this.slidesPerView = 3;
        this.spaceBetween = 30;

      } else if (width >= 992 && width < 1500) {  // Laptop
        this.slidesPerView = 3;
        this.spaceBetween = -300;

      } else {                                   // Desktop 
        this.slidesPerView = 4;
        this.spaceBetween = -400;
      }
    }
  }
};
</script>





<template>
  <div class="_travel_loved container mb-5">
    <div class="row flex-lg-nowrap">
      
      <!-- titolo -->
      <div class="_title ps-3 ps-lg-0 col-lg-2">
        <h2>i viaggi più amati</h2>
        <p>Qui trovi i viaggi preferiti della nostra Community</p>
      </div>

      <!-- swiper -->
      <swiper :slides-per-view="slidesPerView" :space-between="spaceBetween" :loop="true" pagination>
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="card">
            <img :src="slide.img" class="card-img-top" :alt="slide.title">
            <div class="card-body">
              <h5>{{ slide.title }}</h5>
              <p>{{ slide.price }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>

    </div>
  </div>
</template>





<style lang="scss" scoped>

$border-radius: 20px;

._travel_loved {
  padding-top: 100px;

  .row {
    flex-shrink: none !important;
  }

  ._title {
    padding-bottom: 25px;

    h2 {
      color: rgb(92, 0, 221);
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: rgb(149, 149, 149);
    }
  }

  .card {
    width: 13rem;
    color: white;
    margin: 0 10px;
    border: none;

    img {
      height: 200px;
      object-fit: cover;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    .card-body {
      background-color: rgb(255, 94, 0);
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;

      h5 {
        font-size: 15px;
        font-weight: 800;
        text-transform: uppercase;
      }
    }
  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  .row {
    width: 90vw;
  }

  ._travel_loved {
    margin-left: 5rem;

    ._title {
      border: 1px solid rgba(217, 217, 217, 0.79);
      border-radius: $border-radius;
      margin-right: 30px;
      padding: 2rem !important;
      width: 17.5rem;
    }

    .card {
      width: 18rem;
      height: 25rem;

      img {
        height: 500px;
        border-radius: $border-radius;
      }

      .card-body {
        background-color: rgb(255, 94, 0);
        position: absolute;
        width: 100%;
        bottom: 0;
      }
    }
  }

}
</style>
