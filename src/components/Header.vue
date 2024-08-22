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
  <div class="_header d-flex justify-content-between align-items-center position-fixed z-3">
    
    <!-- logo -->
    <div>
      <img class="_logo w-25"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIRv09FABDhPNrwXfHg3_2CS_nqm-bBaGmw&s" alt="logo">
    </div>

    <!-- menu -->
    <div>
      <div class="menu_hamburger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="toggleMenu">
        <p><i class="fa-solid fa-bars fs-1"></i></p>
      </div>

      <Offcanvas />
    </div>

  </div>
</template>





<style lang="scss" scoped>
._header {
  width: 100%;
  padding: 0 30px;
  margin-top: 30px;
}



._logo,
.menu_hamburger,
._search div {
  cursor: pointer;
}




/* Media query per dispositivi con larghezza maggiore o uguale a 576px */
@media (min-width: 576px) {
  ._header {
    padding: 0 50px;
    margin-top: 50px;
  }
}

</style>