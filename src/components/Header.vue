<script>
import Offcanvas from './partials/Offcanvas.vue'

export default {
  components: {
    Offcanvas
  },

  data() {
    return {
      menuOpen: false,
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>






<template>

  <div class="_header d-flex justify-content-between align-items-center position-fixed z-3 mt-5">
    <!-- logo -->
    <div>
      <img class="_logo w-25"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIRv09FABDhPNrwXfHg3_2CS_nqm-bBaGmw&s" alt="logo" />
    </div>

    <!-- menu -->
    <div>
      <div class="menu_hamburger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="toggleMenu">
        <p><i class="fa-solid fa-bars fs-1"></i></p>
      </div>

      <Offcanvas />
    </div>
  </div>




  <!-- jumbotron -->
  <div class="_jumbotron position-relative">

    <img
      class=""
      src="https://images.prismic.io/blind/ZmsBb5m069VX1uO7_Hero-Fuerte.webp?auto=format%2Ccompress&fit=max&w=1920&q=100"
      alt="">

    <div class="_title text-center text-white position-absolute">
      <h1>Welcome home wherever utravel</h1>
      <h4>Noi organizziamo, tu parti!</h4>
    </div>


  </div>


</template>






<style lang="scss" scoped>

._header {
  width: 100%;
  padding: 0 60px;
}

._logo,
.menu_hamburger {
  cursor: pointer;
}

._jumbotron {
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    filter: brightness(70%);
  }
  ._title {
    width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & :first-child {
      margin-bottom: 20px;
    }
  }
}





// Media query per dispositivi con larghezza maggiore o uguale a 992px
@media (min-width: 992px) {}
</style>
