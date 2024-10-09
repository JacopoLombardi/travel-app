
<script>
import Offcanvas_images from "./partial Travel_detail/Offcanvas_images.vue";
import Modale_images from "./partial Travel_detail/Modale_images.vue";

export default {
  components: {
    Offcanvas_images,
    Modale_images
  },
  props: {
    data: Object
  },
  data() {
    return {
      selectedSlideData: [],// Dati selezionati da passare ai componenti
      isSmallScreen: window.innerWidth < 768 // Stato iniziale basato sulla larghezza dello schermo
    };
  },
  methods: {
    openOffCanvas(item) {
      console.log('Opening Offcanvas with data:', item);
      this.selectedSlideData = item;
      const offcanvasElement = document.getElementById('offcanvas2');
      if (offcanvasElement) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.show();
      }
    },

    openModal(item) {
      console.log('Opening Modal with data:', item);
      this.selectedSlideData = item;
      const modalElement = document.getElementById('modale2');
      if (modalElement) {
        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();
      }
    },
    cardClick(item) {
      console.log('Card clicked with data:', item);
      this.selectedSlideData = item;
      if (this.isSmallScreen) {
        this.openOffCanvas(item);
      } else {
        this.openModal(item);
      }
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth < 768;
    }
  },
  computed: {
    stay() {
      return this.data?.detail.stay;
    },
    stay_special() {
      return this.data?.detail.stay_special;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>




<template>
  <div class="your_stay">

    <!-- stay -->
    <div class="_stay" v-if="stay">

      <div class="_text">
        <div class="_badge">
          <p>Stay</p>
        </div>
        <h2>dove soggiornerai</h2>
        <p class="_intro" v-html="stay.intro"></p>
        <p class="_paragraph">{{ stay.paragraph }}</p>
      </div>

      <div class="img_hotel">
        <img :src="stay.img" alt="Hotel">
        <button
          @click="cardClick(stay.travel_images)"
          class="btn"
        >
          <i class="fa-regular fa-images me-1"></i> 
          Foto del viaggio
        </button>
      </div>

      <!-- Componente offcanvas immagini, visibile solo su schermi piccoli -->
      <Offcanvas_images
        v-if="isSmallScreen"
        id="offcanvas2"
        :data="selectedSlideData"
      />

      <!-- Componente modale immagini, visibile solo su schermi grandi -->
      <Modale_images 
        v-if="!isSmallScreen"
        id="modale2"
        :data="selectedSlideData"
      />

    </div>


    <!-- stay special -->
    <div class="Stay_special" v-if="stay_special">
      <div class="_text">
        <div class="_badge">
          <p>Stay</p>
        </div>
        <h2>{{ stay_special.title }}</h2>
        <p class="_intro" v-html="stay_special.intro"></p>
        <p class="_paragraph">{{ stay_special.paragraph }}</p>
      </div>

      <div class="img_menu">
        <div class="img_banner">
          <div class="_img">
            <img :src="stay_special.img" alt="Hotel">
            <button
              @click="cardClick(stay_special.travel_images)"
              class="btn"
            >
              <i class="fa-regular fa-images me-1"></i> 
              Foto del viaggio
            </button>
          </div>
          
          <div class="_banner">
            <svg
              class="h-8 text-white"
              viewBox="0 0 200 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="stay_special.banner"
            ></svg>
            <p>Questo è un NaoClub, una casa dedicata solo ai viaggiatori Utravel</p>
            <a href="">Scopri di più</a>
          </div>
        </div>
         
        <!-- badge services -->
        <div class="_services">
          <h3>Servizi della struttura:</h3>
          <ul class="d-flex flex-wrap">
            <li v-for="item in stay_special.badge" :key="item" class="badge_service">
              {{ item }}
            </li>
          </ul>
        </div>

        <!-- Componente offcanvas immagini, visibile solo su schermi piccoli -->
        <Offcanvas_images
          v-if="isSmallScreen"
          id="offcanvas2"
          :data="selectedSlideData"
        />

        <!-- Componente modale immagini, visibile solo su schermi grandi -->
        <Modale_images 
          v-if="!isSmallScreen"
          id="modale2"
          :data="selectedSlideData"
        />

      </div>

    </div>
  </div>
</template>






<style lang="scss" scoped>

h2 {
  text-transform: uppercase;
  margin: 15px 0;
  font-size: 23px;
}



.your_stay {
  margin: 50px 1rem;

  ._badge {
    background-color: rgba(255, 224, 206, 0.782);
    color: rgb(255, 89, 0);
    font-size: 15px;
    font-weight: 500;
    padding: 6px 15px;
    border-radius: 20px;
    width: fit-content;
  }

  h2 {
    color: rgb(255, 89, 0);
  }

  ._paragraph {
    margin: 15px 0 40px 0;
    color: rgb(100, 100, 100);
    font-size: 13px;
    line-height: 18px;
  }

  .img_hotel {
    position: relative;

    img {
      border-radius: 20px;
      object-fit: cover;
      width: 100%;
      height: 450px;
    }

    button {
      background-color: rgb(255, 225, 211);
      color: orangered;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 700;
      padding: 8px 14px;
      position: absolute;
      right: 20px;
      top: 20px;
    }
  }



  // special
  .Stay_special {
    ._badge {
      background-color: rgba(215, 249, 255, 0.782);
      color: rgb(0, 217, 255);
    }

    h2 {
      color: rgb(2, 204, 240);
    }

    .img_menu {
      ._img {
        position: relative;

        img {
          border-radius: 20px 20px 0 0;
          height: 350px;
          width: 100%;
          object-fit: cover;
        }

        button {
          background-color: rgb(255, 225, 211);
          color: orangered;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          padding: 8px 14px;
          position: absolute;
          right: 20px;
          top: 20px;
        }
      }

      ._banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: rgb(26, 159, 185);
        color: white;
        padding: 30px 20px;
        border-top: 1px solid rgb(46, 217, 223);
        border-radius: 0 0 20px 20px;

        svg {
          width: 50%;
        }

        p {
          font-size: 13px;
          margin: 15px 0;
        }

        a {
          color: white;
          text-decoration: underline;
        }
      }

      h3 {
        font-size: 17px;
        margin: 20px 0;
        font-family: Poppins;
        font-weight: 700;
      }

      .badge_service {
        background-color: rgba(234, 222, 255, 0.782);
        color: rgb(153, 43, 255);
        font-size: 15px;
        font-weight: 500;
        padding: 6px 15px;
        border-radius: 20px;
        margin: 0 10px 10px 0;
        width: fit-content;
      }
    }
  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

  h2 {
    font-size: 30px;
  }



  .your_stay {
    margin: 50px 5rem;

    ._stay {
      display: flex;
      align-items: center;
      justify-content: space-between;

      ._text {
        width: 50%;

        ._badge {
          font-size: 16px;
          padding: 6px 15px;
        }

        ._intro {
          font-size: 20px;
        }

        ._paragraph {
          font-size: 17px;
          line-height: 24px;
        }
      }

      .img_hotel {
        margin-left: 5rem;

        img {
          height: 400px;
        }

        button {
          right: 3%;
          top: 85%;
        }
      }

    }



    // special
    .Stay_special {
      ._badge {
        font-size: 18px;
      }
      ._paragraph {
        font-size: 17px;
        line-height: 21px;
      }

      ._intro {
        font-size: 20px;
      }
    }
  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
  .your_stay {
    margin: 80px 5rem;

    ._stay {
      ._text {
        ._badge {
          font-size: 20px;
        }

        ._paragraph {
          max-width: 800px;
        }
      }

      .img_hotel {
        width: 70%;

        img {
          width: 100%;
          height: 500px;
        }

        button {
          font-size: 20px;
          right: 7%;
          top: 86%;
        }
      }
    }



    // special
    .Stay_special {
      ._badge {
        font-size: 20px;
      }

      ._intro {
        font-size: 22px;
      }

      .img_menu {
        .img_banner {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;

          ._img {
            width: 60%;

            img {
              height: 450px;
              border-radius: 20px;
            }

            button {
              font-size: 20x;
              right: 30px;
              top: 85%;
            }
          }

          ._banner {
            width: 30%;
            height: 450px;
            text-align: center;
            justify-content: center;
            border-radius: 20px;

            svg {
              width: 70%;
              max-width: 300px;
            }

            p {
              font-size: 15px;
              margin: 20px 50px;
            }
          }
        }

        ._services {
          display: flex;
          align-items: center;
          margin-top: 40px;

          h3 {
            font-size: 25px;
            margin-right: 20px;
          }

          .badge_service {
            padding: 8px 18px;
            margin-bottom: 0;
            font-size: 18px;
          }
        }
      }
    }
  }
}

</style>
