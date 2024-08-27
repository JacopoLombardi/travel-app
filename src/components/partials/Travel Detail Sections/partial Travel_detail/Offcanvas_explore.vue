
<script>

export default {
   props: {
      data: Object
   },
   
   computed: {
      explore() {
         return this.data?.detail.explore;
      },
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

      <div class="box_edge">
         <div class="_edge"></div>
      </div>

      <!-- up -->
      <div class="box_up">
         <div>
            <img :src="data?.img" :alt="data?.title">
            <button
               type="button"
               class="btn border rounded-5"
               data-bs-dismiss="offcanvas"
               aria-label="Close"
            >
               <i class="fa-solid fa-x"></i>
            </button>
            <p 
               class="_badge"
               :class="data?.detail.badge === 'Esperienza inclusa' ? 'badge_included' : 'badge_not_included'"
            >
               {{ data?.detail.badge }} 
               <i :class="data?.detail.icon"></i>
            </p>
         </div>
      </div>
         
      <!-- down -->
      <div class="box_down">
         <h4>{{ data?.title }}</h4>
         <ul class="_tag d-flex">
            <li
               v-for="item in data?.detail.tag"
               :key="item"
            >
               <p>
                  <i :class="item.icon"></i>
                  {{ item.name }}
               </p>
            </li>
         </ul>

         <ul>
            <li
               v-for="item in data?.detail.text"
               :key="item"
            >
               <p v-html="item"></p>
            </li>
            
            <!-- Mostra only_utravel una volta se esiste -->
            <li>
               <p 
                  v-if="data?.detail.text_only_utravel"
                  class="only_utravel"
                  v-html="data?.detail.text_only_utravel"
               ></p>
            </li>
         </ul>

         <!-- instax -->
         <div 
            v-if="data?.detail.instax"
            class="_instax">
            <img src="/img/instax.png" alt="instax">
         </div>

      </div>

   </div>
</template>




<style lang="scss" scoped>

.offcanvas {
   height: 85vh;
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   padding: 0 0 35px 0;
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
         margin: 1rem auto;
      }
   }

   .box_up {
      margin: 37px 0 20px 0;
      position: relative;

      img {
         width: 100%;
         height: 280px;
         object-fit: cover;
      }

      button {
         background-color: #ededed;
         font-size: 14px;
         position: absolute;
         top: 15px;
         right: 15px;
      }

      ._badge {
         position: absolute;
         bottom: 20px;
         left: 20px;
         background-color: #eefff0;
         color: #26dc0e;
         font-size: 13px;
         padding: 8px 15px;
         border-radius: 20px;
      }

      .badge_included {
         background-color: #eefff0;
         color: #26dc0e;
      }

      .badge_not_included {
         background-color: #ffe7da;
         color: #ff720d;
      }
   }

   .box_down {
      margin: 0 2rem;

      h4 {
         font-size: 22px;
         margin-bottom: 10px;
      }

      ._tag {
         border-bottom: 1px solid rgba(206, 206, 206, 0.613);
         padding-bottom: 20px;
         color: #494949;
         font-weight: 600;

         p {
            margin-right: 2rem;
         }
      }

      ul:last-of-type {
         li {
            p {
               color: #707070;
               font-size: 15px;
               margin-top: 20px;
               line-height: 19px;
            }

            .only_utravel {
               font-weight: 700;
               text-decoration: underline;
            }
         }
      }
   }


   &::-webkit-scrollbar {
      width: 0;
   }
}

</style>