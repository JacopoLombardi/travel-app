
<script>
import HomePage_data from '../../../data/json_data/HomePage_data.json';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      dataSlide: HomePage_data.Various_travel,
      slidesPerView: 1,
      spaceBetween: 20
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
    saveSlideNameAndNavigate(name) {
      // Naviga alla pagina di dettaglio con il parametro 'name'
      this.$router.push({ name: 'Travel_type', query: { name: name } });
    }
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  }
};
</script>




<template>
  <div class="flash-offer">

    <!-- Mobile -->
    <Swiper
      class="_swiper d-md-none py-2"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :loop="false"
    >
      <SwiperSlide
        v-for="(slide, index) in dataSlide"
        :key="index"
      >
        <div class="card">

          <a
            href=""
            @click.prevent="saveSlideNameAndNavigate(slide.name_push)"
            class="slide-link text-white"
          >
            <img :src="slide.image" class="card-img-top" alt="">
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
          </a>

        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Desktop -->
    <div class="row d-md-flex justify-content-center d-none">
      <div
        class="card p-0"
        v-for="(slide, index) in dataSlide"
        :key="index"
      >

        <a
          href=""
          @click.prevent="saveSlideNameAndNavigate(slide.name_push)"
          class="slide-link text-white"
        >
          <img :src="slide.image" class="card-img-top" alt="" />
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
        </a>

      </div>
    </div>
  </div>

</template>




<style lang="scss" scoped>

.flash-offer {
  margin: 50px 1rem;

  .card {
    width: 90%;
    height: 270px;
    border-radius: 20px;
    margin: 0 10px;
    border: none;
    position: relative;
    box-shadow: 0px 0px 10px rgb(176, 176, 176);

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

    .card {
      flex-wrap: wrap;
      height: 300px;
      margin: 10px;

      .card-body {
        span {
          font-size: 16px;
          font-weight: 600;
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






/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  .flash-offer {
    margin: 80px 5rem;
  }


}

</style>
