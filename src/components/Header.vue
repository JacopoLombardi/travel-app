
<script>
import Offcanvas_header from './partials/Offcanvas_header.vue';

export default {
  components: {
    Offcanvas_header
  },

  data() {
    return {
      menuOpen: false,
      hasScrolled: false
    };
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },

    handleScroll() {
      // Verifica se l'utente ha scrollato
      this.hasScrolled = window.scrollY > 0;
    }
  },

  mounted() {
    // Aggiungi l'event listener per lo scroll quando il componente è montato
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeDestroy() {
    // Rimuovi l'event listener per lo scroll quando il componente viene distrutto
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>




<template>
  <div
    class="d-flex"
    :class="['_header', { 'scrolled': hasScrolled }]"
  >

    <!-- logo -->
    <div>
      <img class="_logo" src="../../img/Logo.jpg" alt="logo">
    </div>

    <!-- menu -->
    <div class="menu_hamburger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="toggleMenu">
      <i class="fa-solid fa-bars fs-3"></i>

      <!-- componente Offcanvas -->
      <Offcanvas_header />
    </div>

  </div>
</template>




<style lang="scss" scoped>

._header {
  width: 100%;
  padding: 20px 20px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  align-items: center;
  justify-content: space-between;

  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
}

._header.scrolled {
  background-color: white;
  box-shadow: 0px 0px 20px rgb(134, 134, 134);
}

img._logo {
  width: 60px;
}

.menu_hamburger {
  cursor: pointer;
  display: flex;
  align-items: center;

  i {
    margin-top: 4px;
  }
}
</style>