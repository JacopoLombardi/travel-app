
<script>
import Offcanvas from './partials/Offcanvas.vue'

export default {
  components:{
    Offcanvas
  },

  data() {
    return {
      menuOpen: false,
      name: ["Partenze", "Destinazioni", "Tipi di Viaggio", "Promo", "Info Utili"]
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
  <div class="d-flex justify-content-between align-items-center mx-5 mt-4">
    <!-- logo -->
    <div>
      <img class="logo w-25"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIRv09FABDhPNrwXfHg3_2CS_nqm-bBaGmw&s" alt="logo" />
    </div>

    <!-- menu -->
    <div>
      <div class="menu-hamburger" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" @click="toggleMenu">
        <p><i class="fa-solid fa-bars fs-1"></i></p>
      </div>

      <!-- Menu Desktop
      <div class="menu-desktop">
        <ul class="d-flex">
          <li v-for="(item, index) in menuItems" :key="index">
            <div class="box">
              <i :class="item.icon"></i>
              <p>{{ item.label }}</p>
            </div>
          </li>
        </ul>
      </div> -->

      <Offcanvas/>

    </div>
  </div>
</template>






<style lang="scss" scoped>

.logo,
.menu-hamburger {
  cursor: pointer;
}



// Media query per dispositivi con larghezza maggiore o uguale a 992px
@media (min-width: 992px) {}
</style>
