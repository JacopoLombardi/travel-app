
<script>
  export default {
    data(){
      return{
        menuOpen: false,
        menuItems: [
          { icon: "fa-regular fa-user", label: "Utente" },
          { icon: "fa-solid fa-cart-shopping", label: "Carrello" },
          { icon: "fa-solid fa-star", label: "Preferiti" }
        ]
      };
    },
    methods:{
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
    },
  };
</script>





<template>
  <div class="d-flex justify-content-between align-items-center text-white mx-5 mt-4">
    <!-- logo -->
    <div>
      <img
        class="_logo w-50"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUzJ8Ewv5LprWqtReDBdWENTAB7iNSctjZw&s"
        alt="logo"
      />
    </div>

    <!-- menu -->
    <div>
      <div
        class="menu_hamburger text-black"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        @click="toggleMenu"
      >
        <p><i class="fa-solid fa-bars fs-1"></i></p>
      </div>

      <!-- Menu Desktop -->
      <div class="menu_desktop">
        <ul class="d-flex">
          <li v-for="(item, index) in menuItems" :key="index">
            <div class="_box">
              <i :class="item.icon"></i>
              <p>{{ item.label }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Offcanvas Mobile -->
      <div class="_offcanvas offcanvas offcanvas-end w-50" id="offcanvasRight">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title">Menu</h5>
          <button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body ms-5">
          <ul>
            <li v-for="(item, index) in menuItems" :key="index">
              <div class="_box">
                <i :class="item.icon"></i>
                <p>{{ item.label }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>





<style lang="scss" scoped>

li {
  ._box {
    display: flex;
    i {
      font-size: 1.5rem;
      margin-right: 0.7rem;
    }
  }
}


.menu_desktop {
  display: none;

  li {
    margin-right: 4rem;

    ._box {
      align-items: center;
      background-color: rgb(225, 153, 153);
      border-radius: 20px;
      padding: 5px 15px;
    }

    p {
      font-size: 1.5rem;
    }
  }
}


._offcanvas {
  li {
    margin-bottom: 1.3rem;
    font-weight: 700;

    i {
      text-align: center;
      width: 30px;
    }
  }
}


._logo,
.menu_hamburger,
._box {
  cursor: pointer;
}


// Media query per dispositivi con larghezza maggiore o uguale a 992px
@media (min-width: 992px) {
  .menu_desktop {
    display: block;
  }

  .menu_hamburger {
    display: none;
  }
}

</style>
