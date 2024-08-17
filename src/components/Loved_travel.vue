
<script>
import Slider from './partials/Slider_loved_travel.vue';

export default {
  components: {
    Slider
  },
  data() {
    return {
      
    };
  },
  methods: {
    registerPrevSlide(callback) {
      this.prevSlide = callback;
    },
    registerNextSlide(callback) {
      this.nextSlide = callback;
    }
  }
};
</script>






<template>
  <div class="_travel_loved">
    <div class="row flex-lg-nowrap m-0">

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

      <!-- componente Swiper -->
      <Slider
        :onPrevSlide="registerPrevSlide"
        :onNextSlide="registerNextSlide" 
      />

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
    margin-left: 0.5rem;

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


}





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  .row {
    // width: 93.5vw;
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
          background-color: rgb(214, 214, 214);

          i {
            color: rgb(255, 255, 255);
          }
        }
      }

      & button:first-child {
        margin-right: 15px;
      }
    }
  }

}




/* Media query per dispositivi con larghezza maggiore o uguale a 1500px */
@media (min-width: 1500px) {
  .row {
    // width: 95.1vw;
  }

  ._travel_loved {
    ._title {
      margin-right: 30px;
    }
  }
}
</style>