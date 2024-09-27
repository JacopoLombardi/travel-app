
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      modules: [Pagination],
      firstSwiper: null,
      secondSwiper: null,
    };
  },
  methods: {
    onSlideChange(swiper) {
      console.log("First Swiper Index:", swiper.realIndex); // Log l'indice del primo Swiper
      if (this.secondSwiper) {
        this.secondSwiper.slideTo(swiper.realIndex); // Cambia slide nel secondo Swiper
      }
    },
    getSwiperRefs() {
      // Questo metodo ottiene i riferimenti solo dopo il montaggio
      this.firstSwiper = this.$refs.firstSwiper.swiper;
      this.secondSwiper = this.$refs.secondSwiper.swiper;
      console.log("First Swiper:", this.firstSwiper); // Controlla se il riferimento è corretto
      console.log("Second Swiper:", this.secondSwiper); // Controlla se il riferimento è corretto
    },
  },
  mounted() {
    this.$nextTick(() => {
      // Aspetta che il DOM sia aggiornato prima di ottenere i riferimenti
      this.getSwiperRefs();
    });
  },
};
</script>




<template>
  <div v-if="data">
    <!-- jumbotron -->
    <div class="_jumbotron">
      <div class="_box">
        <img :src="data.jumbotron.image" alt="jumbotron">
        <div class="box_text">
          <h1>{{ data.jumbotron.title }}</h1>
          <p>{{ data.jumbotron.text }}</p>
        </div>
      </div>
    </div>

    <!-- collaboration -->
    <div class="_collaboration">
      <img :src="data.collaboration.image" alt="">
      <div>
        <p v-for="item in data.collaboration.text" :key="item" v-html="item"></p>
      </div>
      <a :href="data.collaboration.href" class="btn">Scopri le eSim Holafly</a>
    </div>

    <!-- how work -->
    <div class="how_work">
      <h3>{{ data.how_work.title }}</h3>

      <!-- mobile -->
      <div class="d-lg-none">
        <!-- First Swiper -->
        <Swiper
          ref="firstSwiper"
          :slides-per-view="3"
          :space-between="-30"
          :loop="true"
          @slideChange="onSlideChange"
          :pagination="true"
          :modules="modules"
        >
          <SwiperSlide
            v-for="(item, index) in data.how_work.cards"
            :key="index"
            class="swiper-slide-up mt-5"
          >
            <div class="slide-content-up">
              <img :src="item.image" alt="">
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Second Swiper -->
        <Swiper
          ref="secondSwiper"
          :slides-per-view="1"
          :space-between="50"
          :loop="true"
        >
          <SwiperSlide
            v-for="(item, index) in data.how_work.cards"
            :key="index"
          >
            <div class="swiper-slide-down px-5 mt-5">
              <p>{{ item.text }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>

._jumbotron {
   ._box {
      position: relative;

      img {
         width: 100%;
         height: 550px;
         object-fit: cover;
         filter: brightness(70%);
      }

      .box_text {
         width: 90%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         h1 {
            font-size: clamp(1.8rem, 6vw, 4rem);
            font-weight: 800;
            text-transform: uppercase;
         }

         p {
            font-size: 15px;
            font-weight: 500;
         }

         h1,
         p {
            color: white;
            text-align: center;
         }
      }  
   }
}





._collaboration {
   color: white;
   padding: 50px 1rem;
   font-size: 14px;
   background-color: rgb(230, 72, 92);

   img {
      margin: auto;
      min-width: 200px;
      margin-bottom: 10px;
      display: flex;
   }

   p {
      margin-top: 15px;
      line-height: 19px;
   }
   
   a {
      color: rgb(230, 72, 92);
      background-color: white;
      border-radius: 10px;
      margin-top: 30px;
      font-size: 14px;
      font-weight: 600;
      padding: 10px 15px;
   }
}





.how_work {
   padding: 50px 1rem;

   h3 {
      color: rgb(230, 72, 92);
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

















/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._jumbotron {
      ._box {
         .box_text {
            width: 90%;

            p {
               font-size: 20px;
               font-weight: 500;
            }
         }  
      }
   }






   ._collaboration {
      padding: 60px 5rem 80px 5rem;
      font-size: 17px;
      text-align: center;

      img {
         width: 500px;
      }

      p {
         margin-top: 17px;
         line-height: 22px;
      }
      
      a {
         margin-top: 50px;
         font-size: 16px;
      }
   }










}




</style>