
<script>

export default {
   props: {
      data: Object,
   },
   computed: {
      // funzione che abbrevia la chiamata dei dati nel template
      reachHotel() {
         return this.data?.detail?.reach_hotel;
      },
   },
};
</script>




<template>
   <div
      v-if="reachHotel"
      class="reach_hotel">

      <!-- info -->
      <div class="_info">
         <h3>Come raggiungere l'hotel</h3>
         <ul>
            <li
              v-for="item in reachHotel.info"
              :key="item"
            >
            <div v-html="item.icon"></div>
            <div class="_text">
               <h6>{{ item.title }}</h6>
               <p>{{ item.description }}</p>
            </div>
            </li>
         </ul>
      </div>

      <!-- map -->
      <div
        class="_map"
        v-html="reachHotel.map"
      ></div>

   </div>
</template>




<style lang="scss" scoped>

.reach_hotel {
   padding: 50px 1rem;

   ._info {
      h3 {
         color: rgb(85, 14, 208);
         font-weight: 800;
         text-transform: uppercase;
         margin-bottom: 25px;
         font-size: 22px;
      }

      ul {
         li {
            display: flex;
            margin-bottom: 25px;

            ._text {
               margin-left: 15px;
               
               h6 {
                  margin-bottom: 5px;
                  font-size: 16px;
                  font-weight: 700;
               }

               p {
                  color: rgb(122, 122, 122);
                  font-size: 14px;
                  line-height: 18px;
               }
            }
            
            &:first-child {
               color: rgb(85, 14, 208);
            }

            &:first-child p {
               color: rgb(85, 14, 208);
               text-decoration: underline;

               &:hover {
                  cursor: pointer;
               }
            }

         }
      }
   }


   ._map {
      display: flex;
      justify-content: center;
      margin-top: 40px;
   }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   .reach_hotel {
      padding: 80px 5rem;

      ._info {

         h3 {
            margin-bottom: 50px;
            font-size: 25px;
         }
      }
   }

}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   .reach_hotel {
      display: flex;
      justify-content: space-between;

      ._info {
         width: 45%;

         h3 {
            margin-bottom: 50px;
            font-size: 30px;
         }

         ul {
            li {
               ._text {
                  h6 {
                     font-size: 20px;
                  }

                  p {
                     font-size: 16px;
                     line-height: 20px;
                  }
               }
            }
         }
      }


      ._map {
         width: 50%;
         margin-top: 0;
         height: 500px;
      }
   }

}
</style>