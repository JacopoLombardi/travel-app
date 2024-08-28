
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
        {
          name: 'Offerte lampo',
          tag: 'Promo',
          description: 'Ultimi posti',
          imageUrl: 'https://images.prismic.io/blind/Zkxm9iol0Zci9T8n_hero-1.webp?auto=format%2Ccompress&fit=max&w=750',
        },
        {
          name: 'Viaggi per ogni tipo di budget',
          tag: 'Club',
          description: 'Tutte le destinazioni per fasce di prezzo',
          imageUrl: 'https://images.prismic.io/blind/ZrJHnEaF0TcGIulT_Budget-lp.webp?auto=format%2Ccompress&fit=max&w=640',
        },
        {
          name: 'Partenze last minute',
          tag: 'Sconti',
          description: 'Prenota ora',
          imageUrl: 'https://images.prismic.io/blind/Zh0AhzjCgu4jz0Wi_last-minute.jpeg?auto=format%2Ccompress&fit=max&w=640',
        },
        {
          name: 'Parti a settembre',
          tag: 'Partenze',
          description: 'Scopri le destinazioni',
          imageUrl: 'https://images.prismic.io/blind/ZkYxbiol0Zci9N3K_zanzibar.webp?auto=format%2Ccompress&fit=max&w=640',
        },
        {
          name: 'Parti a ottobre',
          tag: 'Partenze',
          description: 'Scopri le destinazioni',
          imageUrl: 'https://images.prismic.io/blind/ZkYxcCol0Zci9N3M_kenya.webp?auto=format%2Ccompress&rect=0%2C186%2C2500%2C2500&w=640&fit=max',
        },
        {
          name: 'Natale e capodanno',
          tag: 'Partenze',
          description: 'Scopri tutte le destinazioni',
          imageUrl: 'https://images.prismic.io/blind/Znwkb5bWFbowe4MD_Hero-Rio.webp?auto=format%2Ccompress&fit=max&w=640',
        },
        {
          name: 'It\'s time for Africa',
          tag: 'Africa',
          description: 'Il mix perfetto tra relax e avventura!',
          imageUrl: 'https://images.prismic.io/blind/6541099e0b105250cf53c530_kenya-gallery3.jpg?auto=format%2Ccompress&fit=max&w=640',
        },
      ],
      slidesPerView: 1,
      spaceBetween: 20,
    };
  },
  methods: {
    updateSlidesPerView() {
      const width = window.innerWidth;

      if (width >= 250 && width < 576) {
        this.slidesPerView = 1.2;
        this.spaceBetween = -10;
      } else if (width >= 576 && width < 768) {
        this.slidesPerView = 2.5;
        this.spaceBetween = -10;
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
  <div class="flash-offer">

    <!-- Mobile -->
    <Swiper
      class="_swiper d-md-none"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :loop="false"
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
            <button class="btn">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Desktop -->
    <div class="row d-md-flex justify-content-center d-none">
      <div
        class="card p-0"
        v-for="(slide, index) in slides"
        :key="index"
      >
        <img :src="slide.imageUrl" class="card-img-top" alt="" />
        <div class="card-body">
          <span>{{ slide.tag }}</span>
          <div class="card-body-title">
            <h5 class="card-title">{{ slide.name }}</h5>
            <p class="card-text">{{ slide.description }}</p>
          </div>
          <button class="btn">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

</template>




<style lang="scss" scoped>

.flash-offer {
  margin: 70px 0 50px;

  .card {
    width: 90%;
    height: 270px;
    border-radius: 20px;
    margin: 0 10px;
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
        font-size: 13px;
        text-transform: capitalize;
        border-radius: 20px;
        padding: 4px 12px;
      }

      .card-body-title {
        width: 75%;

        h5 {
          font-size: 17px;
          text-transform: uppercase;
          font-weight: 800;
          margin-top: 14px;
        }

        p {
          line-height: 13px;
          font-size: 12px;
        }
      }

      .btn {
        position: absolute;
        right: 15px;
        bottom: 15px;
        padding: 3px 9px;
        background-color: rgb(255, 234, 212);
        color: rgb(255, 136, 0);
        border-radius: 20px;
      }
    }
  }


  /* Media query per dispositivi con larghezza maggiore o uguale a 768px */
  @media (min-width: 768px) {
    margin: 100px 6rem 50px;

    .card {
      flex-wrap: wrap;
      height: 300px;
      margin: 10px;

      .card-body {

        span {
          font-size: 16px;
          font-weight: 700;
          padding: 8px 16px;
        }

        .card-body-title {
          width: 82%;

          h5 {
            font-size: 23px;
          }

          p {
            font-size: 17px;
          }
        }
      }
    }

    .row > .card:nth-child(1),
    .row > .card:nth-child(2) {
      width: calc(50% - 20px);
    }

    .row > .card:nth-child(3),
    .row > .card:nth-child(4),
    .row > .card:nth-child(5) {
      width: calc(33.33% - 20px);
    }

    .row > .card:nth-child(6),
    .row > .card:nth-child(7) {
      width: calc(50% - 20px);
    }
  }
}

</style>
