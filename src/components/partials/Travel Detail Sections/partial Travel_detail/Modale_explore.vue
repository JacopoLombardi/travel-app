
<script>

export default {
   props: {
      data: Object,
      id: String
   },

   computed: {
      explore() {
         return this.data?.detail.explore;
      },
   }
};
</script>




<template>
  <!-- modale -->
  <div
    class="modal fade _modale"
    :id="id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
   >
      <div class="modal-dialog modal-dialog-centered custom-modal-width">
         <div class="modal-content rounded-5">

            <!-- box img -->
            <div class="box_img">
               <img :src="data?.img" alt="Image" class="img-fluid">
               <p 
                  class="_badge"
                  :class="data?.detail.badge === 'Esperienza inclusa' ? 'badge_included' : 'badge_not_included'"
               >
                  {{ data?.detail.badge }} 
                  <i :class="data?.detail.icon"></i>
               </p>
            </div>

            <div>
               <!-- box header -->
               <div class="box_header">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               
                  <h4 class="modal-title" id="exampleModalLabel">{{ data?.title }}</h4>
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
               </div>

               <!-- box text -->
               <div class="box_text">
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

         </div>
      </div>
   </div>
</template>




<style lang="scss" scoped>

.custom-modal-width {
   max-width: 80%; 
}

.modal-content {
   margin: auto;
   color: black;
   display: flex;
   flex-direction: row;
   height: 500px;
   position: relative;

   .box_img {
      img {
         height: 100%;
         object-fit: cover;
         border-radius: 20px 0 0 20px;
      }

      ._badge {
         position: absolute;
         top: 20px;
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


   .box_header {
      padding: 20px 20px 0;

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

      h4 {
         margin-bottom: 5px;
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
   }
   

   .box_text {
      margin: 0 1.4rem 2rem;
      overflow-y: auto;
      max-height: 365px;

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
}



/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
   .custom-modal-width {
      max-width: 80%; 
   }

   .modal-content {
      .box_img {
         width: 150%;

         ._badge {
            font-size: 14px;
         }
      }
   }
}



/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
   .custom-modal-width {
      max-width: 50%; 
   }

   .modal-content {
      .box_img {
         width: 300%;
         max-width: 400px;

         ._badge {
            font-size: 15px;
         }
      }

      .box_text {
         margin: 0 2rem 2rem;

         ul:last-of-type {
            li {
               p {
                  font-size: 16px;
                  line-height: 21px;
               }
            }
         }
      }
   }
}
</style>
