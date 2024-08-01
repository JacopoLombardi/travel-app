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
      spaceBetween: 30,
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
        this.spaceBetween = 30;

      } else if (width >= 768 && width < 992) {  // Tablet
        this.slidesPerView = 3;
        this.spaceBetween = -30;

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
  <div class="_travel_loved">
    <div class="row flex-lg-nowrap">

      <!-- titolo -->
      <div class="_title d-flex ps-3 ps-lg-0 col-lg-2">
        <div>
          <h2>i viaggi più amati</h2>
          <p>Qui trovi i viaggi preferiti della nostra Community</p>
        </div>

        <div class="button_box d-none d-lg-block">
          <button @click="prevSlide" class="btn"><i class="fa-solid fa-chevron-left"></i></button>
          <button @click="nextSlide" class="btn"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>

      <!-- swiper -->
      <swiper class="_swiper" :slides-per-view="slidesPerView" :space-between="spaceBetween" :loop="true" pagination>
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="card">

            <!-- mobile / tablet -->
            <img :src="slide.img" :alt="slide.title">
            <div class="card-body-mobile card-body d-lg-none">
              <h5>{{ slide.title }}</h5>
              <p>{{ slide.price }}</p>
            </div>


            <!-- desk -->
            <div class="card-body-desk card-body d-none d-lg-block">
              <h5>{{ slide.title }}</h5>
              <p>{{ slide.price }}</p>
            </div>

            <div class="bg_hidden d-flex d-none d-lg-block">
              <p>7 notti / 8 giorni</p>
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
  padding: 100px 0;
  background-color: rgb(241, 241, 241);

  .row {
    // flex-shrink: none !important;
    overflow: hidden;
  }

  ._title {
    padding-bottom: 25px;
    margin-left: 2rem;

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

  ._swiper {
    margin-left: 2rem;
  }

  .card {
    width: 12rem;
    color: white;
    margin: 0 10px;
    border: none;
    border-radius: $border-radius;

    img {
      height: 200px;
      object-fit: cover;
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }

    .card-body-mobile {
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
    width: 93.5vw;
  }

  ._travel_loved {
    padding-left: 5.5rem;

    ._title {
      background-color: rgb(255, 255, 255);
      border: 1px solid rgba(217, 217, 217, 0.79);
      border-radius: $border-radius;
      margin-right: 20px;
      padding: 1.5rem 1.5rem 1.5rem 1.5rem !important;
      width: 17.5rem;

      justify-content: space-between;
      align-items: end;
      flex-direction: column;
    }

    .button_box {
      button {
        border: 1px solid rgb(212, 212, 212);
        border-radius: 50%;
        padding: 6px 13px;

        i {
          color: rgb(186, 186, 186);
        }

        &:hover {
          background-color: rgb(205, 205, 205);

          i {
            color: rgb(255, 255, 255);
          }
        }
      }


      & button:first-child {
        margin-right: 15px;
      }
    }

    .card {
      width: 18rem;
      height: 25rem;
      overflow: hidden;

      img {
        height: 500px;
        border-radius: $border-radius;
      }

      .card-body-mobile {
        background-color: rgb(255, 94, 0);
        position: absolute;
        width: 100%;

      }

      &:hover .bg_hidden {
        transition: all 0.25s ease;
        bottom: 0;
      }

      .bg_hidden {
        position: absolute;
        background-color: rgb(255, 94, 0);
        height: 80px;
        width: 100%;
        bottom: -20%;

        p {
          position: absolute;
          bottom: 13%;
          margin-left: 20px;
        }
      }

      .card-body-desk {
        position: absolute;
        padding-left: 20px;
        bottom: 0;

        h5 {
          font-weight: 800;
          text-transform: uppercase;
          position: relative;
          z-index: 10;
        }
      }
    }
  }

}




/* Media query per dispositivi con larghezza maggiore o uguale a 1500px */
@media (min-width: 1500px) {
  .row {
    width: 95.1vw;
  }

  ._travel_loved {
    ._title {
      margin-right: 30px;
    }
  }
}
</style>