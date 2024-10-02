<script>


export default {
   data() {
      return {

      };
   },

   methods: {

   },
};
</script>





<template>
   <div class="_jumbotron position-relative">

      <!-- sfondo jumbo -->
      <img
         src="https://images.prismic.io/blind/ZmsBb5m069VX1uO7_Hero-Fuerte.webp?auto=format%2Ccompress&fit=max&w=1920&q=100"
         alt="jumbotron_foto">

      <!-- titolo -->
      <div class="_title text-center text-white position-absolute">
         <h1>Welcome home wherever utravel</h1>
         <h4>Noi organizziamo, tu parti!</h4>
      </div>

      <!-- search -->
      <div class="_search d-flex justify-content-between align-items-center position-absolute rounded-5 border">
         <div class="w-100 border-end ms-2 me-3">
            <p>Dove?</p>
         </div>

         <div class="w-100 me-3">
            <p>Quando?</p>
         </div>

         <div class="ratio-1x1 rounded-5">
            <i class="fa-solid fa-magnifying-glass text-white"></i>
         </div>
      </div>

   </div>
</template>






<style lang="scss" scoped>

._jumbotron {
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    filter: brightness(80%);
  }

  ._title {
    width: 90%;
    max-width: 900px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 30px;
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    h4 {
      font-size: 20px;
    }
  }
}


._search {
  padding: 10px 10px;
  width: 80%;
  max-width: 900px;
  bottom: -7%;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, .25);

  & div:last-child {
    background-color: rgb(255, 85, 0);
  }

  p {
    font-size: 16px;
  }

  i {
    font-size: 18px;
    padding: 12px;
  }
}



._logo,
.menu_hamburger,
._search div {
  cursor: pointer;
}




/* Media query per dispositivi con larghezza maggiore o uguale a 576px */
@media (min-width: 576px) {

  ._jumbotron ._title {
    width: auto;

    h1 {
      font-size: 30px;
    }

    h4 {
      font-size: 20px;
    }
  }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  ._jumbotron {

    img {
      height: 550px;
    }

    ._title {
      h1 {
        font-size: 50px;
      }

      h4 {
        font-size: 30px;
      }
    }

    ._search {
      bottom: -6%;

      p {
        font-size: 18px;
        margin-left: 20px;
      }
    }
  }
}

</style>