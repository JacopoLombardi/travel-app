<script>
import Footer_up_menu from "./partial Footer/Footer_up_menu.vue"

export default {
   components:{
      Footer_up_menu
   },
  data() {
    return {
      
    };
  }
};
</script>





<template>
  <div class="footer_up">

    <!-- newsletter -->
    <div class="_newsletter">

      <h4>iscriviti alla newsletter!</h4>
      <div class="position-relative">
        <input class="form-control" type="text" placeholder="La tua mail">
        <button class="btn">Invia</button>
      </div>
      <p>
        Cliccando su “Invia” esprimi il tuo consenso a ricevere la newsletter di Utravel.
        <span>Leggi l'informativa privacy Utravel</span>
      </p>


      <!-- social desktop-->
      <div class="_social_desk d-none d-md-block">
        <h4>Seguici sui nostri social</h4>
        <ul class="d-flex">
          <li> <i class="fa-brands fa-instagram"></i> </li>
          <li> <i class="fa-brands fa-facebook-f"></i> </li>
          <li> <i class="fa-brands fa-tiktok"></i> </li>
          <li> <i class="fa-brands fa-linkedin-in"></i> </li>
        </ul>
      </div>

    </div>


    <!-- componente menu footer -->
    <Footer_up_menu/>


    <!-- social mobile-->
    <div class="_social_mobile d-md-none">
      <h4>Seguici sui nostri social</h4>
      <ul class="d-flex">
        <li> <i class="fa-brands fa-instagram"></i> </li>
        <li> <i class="fa-brands fa-facebook-f"></i> </li>
        <li> <i class="fa-brands fa-tiktok"></i> </li>
        <li> <i class="fa-brands fa-linkedin-in"></i> </li>
      </ul>
    </div>


  </div>
</template>





<style lang="scss" scoped>
h4 {
   text-transform: uppercase;
   font-weight: 800;
   font-size: 17px;
   margin: 0;
}

.footer_up {
   height: auto;
   background-color: black;
   color: white !important;
   padding: 50px 20px;

   ._newsletter {
      position: relative;

      input {
         padding: 13px 20px;
         border-radius: 10px;
         border: none;
         margin: 20px 0;
      }

      button {
         color: white;
         background-color: orangered;
         position: absolute;
         top: 50%;
         right: 8px;
         transform: translateY(-50%);
      }

      p {
         font-size: 13px;

         span {
            text-decoration: underline;

            &:hover {
               cursor: pointer;
            }
         }
      }
   }


   ._social_mobile {
      margin-top: 30px;

      ul {
         display: flex;
         padding: 0;
         list-style: none;

         li {
            margin: 5px;
            font-size: 25px;
         }
      }
   }




   // Media query per dispositivi con larghezza maggiore o uguale a 768px
   @media (min-width: 768px) {
      padding: 90px 10% 50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      ._newsletter {
         width: 45%;
      }

      .accordion {
         margin: 0;

         .accordion-item {
            .accordion-button {
               .chevron-icon {
                  font-size: 18px;
               }
            }
         }
      }

      ._social_mobile {
         display: none;
      }

      ._social_desk {
         margin-top: 30px;

         ul {
            display: flex;
            padding: 0;
            list-style: none;

            li {
               margin: 10px;
               font-size: 30px; 

               &:first-child {
                  margin-left: 0;
               }

               &:hover {
                  cursor: pointer;
               }
            }
         }
      }
   }
}
</style>
