
<script>
export default {
   data() {
      return {
         departureMonths: ["Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre", "Gennaio", "Febbraio"],
         destinations: ["Africa", "America", "Asia", "Europa", "Tutte le Destinazioni"],
         travelTypes: ["Club", "Short Club", "Viaggi in Africa", "Viaggi in Europa", "Viaggi in Spagna", "Viaggi in Grecia", "Viaggi ai Caraibi", "Beach and Fun", "Viaggi per Universitari"],
         promotions: ["Offerta Lampo", "Partenze Last Minute", "Gift Card"],
         usefulInfo: ["I Coach", "La nostra Community", "Viaggia a Rate con Scalapay", "Help center", "Benefit per Utravelers"],
         name: ["Partenze", "Destinazioni", "Tipi di Viaggio", "Promo", "Info Utili"]
      };

   },
   methods: {

   },
};
</script>




<template>

   <!-- Offcanvas -->
   <div class="offcanvas offcanvas-top" id="offcanvasRight">
      <div class="offcanvas-header mx-3">
         <div>
            <img class="logo w-25"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIRv09FABDhPNrwXfHg3_2CS_nqm-bBaGmw&s"
               alt="logo" />
         </div>
         <button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>


      <div class="accordion accordion-flush" id="accordionFlushExample">
         <div class="accordion-item rounded-5 mx-4 mt-4 shadow">
            <h2 class="accordion-header" id="flush-headingOne">
               <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <i class="fa-regular fa-calendar-days"></i>
                  <p>{{ name[0] }}</p>
               </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
               data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
                  <ul>
                     <li v-for="item in departureMonths" :key="item">
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>


         <div class="accordion-item rounded-5 mx-4 mt-2 shadow">
            <h2 class="accordion-header" id="flush-headingTwo">
               <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <i class="fa-solid fa-plane-up"></i>
                  <p>{{ name[1] }}</p>
               </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
               data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
                  <ul>
                     <li v-for="item in destinations" :key="item">
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>


         <div class="accordion-item rounded-5 mx-4 mt-2 shadow">
            <h2 class="accordion-header" id="flush-headingThree">
               <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <i class="fa-solid fa-tree"></i>
                  <p>{{ name[2] }}</p>
               </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
               data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
                  <ul>
                     <li v-for="item in travelTypes" :key="item">
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>


         <div class="accordion-item rounded-5 mx-4 mt-2 shadow">
            <h2 class="accordion-header" id="flush-headingFour">
               <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <i class="fa-solid fa-tags"></i>
                  <p>{{ name[3] }}</p>
               </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
               data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
                  <ul>
                     <li v-for="item in promotions" :key="item">
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>


         <div class="accordion-item rounded-5 mx-4 mt-2 shadow mb-5">
            <h2 class="accordion-header" id="flush-headingFive">
               <button class="accordion-button collapsed rounded-5" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <i class="fa-solid fa-circle-info"></i>
                  <p>{{ name[4] }}</p>
               </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
               data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
                  <ul>
                     <li v-for="item in usefulInfo" :key="item">
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

      </div>
   </div>

</template>





<style lang="scss" scoped>

.offcanvas {
   height: 100%;
   i {
      font-size: 24px;
      margin-right: 15px;
   }

   p {
      font-size: 20px;
      font-weight: 800;
   }

   li {
      color: rgb(126, 126, 126);
      margin-top: 5px;
      span:hover {
         cursor: pointer;
         text-decoration: underline;
      }
   }
}




// Media query per dispositivi con larghezza maggiore o uguale a 992px
@media (min-width: 992px) {
   .offcanvas {
      height: 80%;
      overflow: auto;
      .offcanvas-header{
         margin: 1rem 3rem 0 3rem;
      }
      .accordion {
         margin: 0 10rem;   
      }
   }

}

</style>