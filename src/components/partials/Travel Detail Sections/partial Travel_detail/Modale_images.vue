
<script>
export default {
  props: {
    data: Object,
  },
  computed: {
    destinationImages() {
      // Filtra e unisci solo le immagini della destinazione
      return this.data.reduce((accumulator, item) => {
        return item.url_destination ? accumulator.concat(item.url_destination) : accumulator;
      }, []);
    },
    structureImages() {
      // Filtra e unisci solo le immagini della struttura
      return this.data.reduce((accumulator, item) => {
        return item.url_structure ? accumulator.concat(item.url_structure) : accumulator;
      }, []);
    },
  },
};
</script>




<template>
   <!-- Modale -->
   <div
     class="modal fade"
     id="exampleModal"
     tabindex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
      <div class="modal-dialog modal-dialog-centered custom-modal-width">
         <div class="modal-content rounded-5">
            <div class="modal-body">

               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

               <!-- destinazione -->
               <div class="_box">
                  <h3>Destinazione</h3>
                  <ul>
                     <li
                        v-for="(url, index) in destinationImages"
                        :key="index"
                     >
                     <img :src="url" alt="Destination Image" class="img-fluid">
                     </li>
                  </ul>
               </div>


               <!-- struttura -->
               <div class="_box">
                  <h3>Struttura</h3>
                  <ul>
                     <li
                        v-for="(url, index) in structureImages"
                        :key="index"
                     >
                     <img :src="url" alt="Structure Image" class="img-fluid">
                     </li>
                  </ul>
               </div>

            </div>
         </div>
      </div>
   </div>
</template>




<style lang="scss" scoped>

.custom-modal-width {
   max-width: 80%; 
}

.modal-content {
   height: 500px;

   .modal-body {
      overflow: auto;

      button {
         background-color: rgb(244, 244, 244);
         border: 1px solid rgb(151, 151, 151);
         font-size: 10px;
         border-radius: 20px;
         padding: 10px;
         position: absolute;
         top: 20px;
         right: 20px;
      }

      ._box {
         margin-top: 30px;
         h3 {
            font-size: 20px;
            font-weight: 700;
            margin-left: 17px;
         }

         ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            li {
               margin: 8px;
               width: 46%;

               img {
                  width: 100%;
                  height: 180px;
                  object-fit: cover;
                  border-radius: 20px;
               }
            }
         }
      }
   }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
   .custom-modal-width {
      max-width: 70%; 
   }

   .modal-content {
      ._box {
         width: 100%;
      }
   }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
   .custom-modal-width {
      max-width: 900px;
   }

   .modal-content {
      .modal-body {
      ._box {
         width: 100%;

         h3 {
            margin-left: 30px;
         }
      }
   }
}
}
</style>