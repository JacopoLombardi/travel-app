
<script>
import Accordion_Travel_detail_info from "./partial Travel_detail/Accordion_Travel_detail_info.vue"

export default {
  components: {
    Accordion_Travel_detail_info
  },
  props: {
    data: Object,
  },
  computed: {
    // funzione che abbrevia la chiamata dei dati nel template
    detail() {
      return this.data?.detail;
    }
  },
};
</script>




<template>
  <div v-if="data">

    <!-- Jumbotron -->
    <div class="_jumbotron">
      <img :src="detail.img" :alt="data.title">
      <h1>{{ data.title }}</h1>
    </div>


    <!-- Info -->
    <div class="_info">
      <h2>{{ detail.title }}</h2>


      <!-- Badge -->
      <div class="_badge d-flex flex-wrap">
        <div
          class="badge_box mt-2"
          v-for="(badge, index) in detail.badge"
          :key="index"
        >
          <p>{{ badge }}</p>
        </div>
      </div>


      <!-- Text -->
      <div class="_text">
        <p
          v-for="(paragraph, index) in detail.paragraph"
          :key="index"
          v-html="paragraph.text"
        ></p>
      </div>


      <!-- Add Flight -->
      <div class="add_flight">
        <div class="_title d-flex align-items-center">
          <i class="fa-solid fa-plane"></i>
          <h4>{{ detail.flight.title }}</h4>
        </div>
        <p v-html="detail.flight.text"></p>
      </div>


      <!-- Componente Accordion -->
      <Accordion_Travel_detail_info
        :detail="detail"
      />

    </div>

  </div>
</template>




<style scoped lang="scss">

/* Jumbotron */
._jumbotron {
  position: relative;

  img {
    object-fit: cover;
    height: 400px;
    width: 100vw;
    filter: brightness(80%);
  }

  h1 {
    color: white;
    text-align: center;
    width: 100%;
    font-size: clamp(2rem, 12vw, 4.5rem);
    font-weight: 700;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}



/* Info */
._info {
  padding: 50px 1rem 70px 1rem;
  background-color: rgba(247, 247, 247, 0.935);

  h2 {
    color: orangered;
    font-weight: 800;
    font-size: 22px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  ._badge {
    margin-bottom: 30px;

    .badge_box {
      background-color: rgba(230, 221, 255, 0.782);
      color: rgb(107, 44, 255);
      padding: 8px 15px;
      border-radius: 20px;
      font-size: 13px;
      margin-right: 10px;
    }
  }

  ._text {
    font-size: 14px;
    line-height: 110%;

    p {
      margin-bottom: 15px;
    }
  }



  /* Flight */
  .add_flight {
    background-color: rgba(228, 218, 255, 0.798);
    color: rgb(107, 44, 255);
    padding: 20px;
    margin-top: 40px;
    border-radius: 20px;

    ._title {
      border-bottom: 1px solid rgba(107, 44, 255, 0.446);
      padding-bottom: 10px;
      margin-bottom: 10px;

      i {
        margin-right: 10px;
        font-size: 20px;
      }

      h4 {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
      }
    }

    p {
      font-size: 13px;
    }
  }

}





/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
  
   /* Info */
  ._info {
    padding: 80px 5rem 70px 5rem;

    h2 {
      font-size: 28px;
    }

    ._badge {
      margin-bottom: 30px;

      .badge_box {
        font-size: 15px;
      }
    }

    ._text {
      font-size: 15px;

      p {
        line-height: 120%;
      }
    }



    /* Flight */
    .add_flight {
      ._title {
        padding-bottom: 15px;
        margin-bottom: 15px;

        h4 {
          font-size: 24px;
        }
      }

      p {
        font-size: 16px;
        line-height: 130%;
      }
    }

  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   

  }
</style>