
<script>
import Offcanvas_images from "./partial University_detail/Offcanvas_images.vue";
import Modale_images from "./partial University_detail/Modale_images.vue";

export default {
  components: {
    Offcanvas_images,
    Modale_images
  },
  props: {
    data: Object
  },
  data(){
    return{
      selectedSlideData: [], // Inizializza come un array vuoto
      isSmallScreen: window.innerWidth < 768, // Stato iniziale basato sulla larghezza dello schermo
    };
  },

  methods: {
    openOffCanvas(item) {
      console.log('Opening Offcanvas with data:', item);
      this.selectedSlideData = item;
      const offcanvasElement = document.getElementById('offcanvas1');
      if (offcanvasElement) {
        const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
        bsOffcanvas.show();
      }
    },
    openModal(item) {
      this.selectedSlideData = item;
      const modalElement = document.getElementById('modale1');
      if (modalElement) {
        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();
      }
    },
    cardClick(item) {
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

  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>




<template>

  <!-- Jumbotron -->
  <div class="_jumbotron">
    <img :src="data.jumbotron.image" alt="">

    <div class="box_text">
      <h1>{{ data.jumbotron.title }}</h1>
      <p>{{ data.jumbotron.description }}</p>
    </div>

    <button
      @click="cardClick(data.jumbotron.travel_images)"
      class="btn"
    >
      <i class="fa-regular fa-images me-1"></i> 
    </button>
  </div>


  <!-- Componente offcanvas immagini -->
  <Offcanvas_images
    v-if="isSmallScreen"
    id="offcanvas1"
    :data="selectedSlideData"
  />

  <!-- Componente modale immagini -->
  <Modale_images 
    v-if="!isSmallScreen"
    id="modale1"
    :data="selectedSlideData"
  />

</template>




<style lang="scss" scoped>

._jumbotron {
  position: relative;
  
  img {
    object-fit: cover;
    height: 450px;
    width: 100vw;
    filter: brightness(90%);
    box-shadow: inset 30px 30px #000000;
  }

  .box_text {
    color: white;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: clamp(2rem, 8vw, 5rem);
      text-transform: uppercase;
    }
  
    p {
      font-size: 16px;
      font-weight: 600;
    }
  }

  button {
    background-color: rgb(224 232 255);
    color: rgb(97 127 203);
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    padding: 8px 15px;
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
}









</style>