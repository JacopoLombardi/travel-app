
   
<script>
export default {
   props: {
      data: Object
   },
   computed: {
    destinationImages() {
      // Verifica che data sia definito e sia un array
      if (!Array.isArray(this.data)) {
        console.error('Expected data to be an array');
        return [];
      }
      // Filtra e unisci solo le immagini della destinazione
      const filteredImages = this.data.reduce((accumulator, item) => {
        return item.url_destination ? accumulator.concat(item.url_destination) : accumulator;
      }, []);
      
      console.log('Filtered Destination:', filteredImages);
      return filteredImages;
    },
    
    structureImages() {
      // Verifica che data sia definito e sia un array
      if (!Array.isArray(this.data)) {
        console.error('Expected data to be an array');
        return [];
      }
      // Filtra e unisci solo le immagini della struttura
      const filteredImages = this.data.reduce((accumulator, item) => {
        return item.url_structure ? accumulator.concat(item.url_structure) : accumulator;
      }, []);
      
      console.log('Filtered Structure:', filteredImages);
      return filteredImages;
    }
  }
};
</script>




<template>
  <!-- offcanvas -->
  <div
      class="offcanvas offcanvas-bottom"
      tabindex="-1"
      id="offcanvasBottom"
      aria-labelledby="offcanvasBottomLabel"
   >

      <!-- edge -->
      <div class="box_edge">
         <div class="_edge"></div>
      </div>


      <button
         type="button"
         class="btn border rounded-5"
         data-bs-dismiss="offcanvas"
         aria-label="Close"
      >
         <i class="fa-solid fa-x"></i>
      </button>


      <!-- destinazione -->
      <div class="_box mt-5 border-bottom pb-5">
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
</template>




<style lang="scss" scoped>

.offcanvas {
   height: 85vh;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   overflow: auto;

   .box_edge {
      background-color: #fff;
      position: fixed;
      width: 100%;
      z-index: 2;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      ._edge {
         background-color: #e6e6e6;
         width: 45px;
         height: 5px;
         border-radius: 20px;
         margin: 1.25rem auto;
      }
   }

   button {
      background-color: #f4f4f4e7;
      color: rgba(146, 146, 146, 0.757);
      font-size: 12px;
      padding: 5px 10px;
      position: absolute;
      z-index: 2;
      top: 25px;
      right: 25px;
   }


   ._box {
      margin: 20px 1rem 20px 1rem;
      position: relative;

      h3 {
         font-size: 16px;
         font-weight: 700;
         margin-left: 1.5rem;
         margin-bottom: 0;
      }

      ul {
         
         li {
            display: flex;
            justify-content: center;
            margin: 0 20px;

            img {
               width: 100%;
               height: 250px;
               object-fit: cover;
               border-radius: 20px;
               margin: 1rem 0;
            }
         }
      }
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 576px */
@media (min-width: 576px) {

   .offcanvas {
      .box_edge {
         ._edge {
            margin: 2rem auto;
         }
      }

      button {
         top: 40px;
         right: 40px;
      }

      ._box {
         margin: 70px 1rem 20px 1rem;

         h3 {
         font-size: 20px;
      }

      }
   }
}
</style>