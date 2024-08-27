
<script>
import Offcanvas_explore from "./partial Travel_detail/Offcanvas_explore.vue"
import Modale_explore from "./partial Travel_detail/Modale_explore.vue"

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Offcanvas_explore,
    Modale_explore
  },
  props: {
    data: Object
  },
  data() {
    return {
      selectedSlideData: null,
      slidesPerView: 2,
      spaceBetween: 10
    };
  },
  computed: {
    // funzione che abbrevia la chiamata dei dati nel template
    explore() {
      return this.data?.detail.explore;
    },
  },
  methods: {
     // funzione per aprire l'offcanvas
    openOffCanvas(item) {
      this.selectedSlideData = item;
      const offcanvasElement = document.getElementById('offcanvasBottom');
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
      bsOffcanvas.show();
    },

    // funzione per aprire la modale
    openModal(item) {
        this.selectedSlideData = item;
        const modalElement = document.getElementById('exampleModal');
        const bsModal = new bootstrap.Modal(modalElement);
        bsModal.show();
    },

    updateSlidesPerView() {
      const width = window.innerWidth;
      if ( width < 600) {
         this.slidesPerView = 2;
      } else {
         this.slidesPerView = 3;
      }
      this.spaceBetween = 10;
   },

   // Funzione che gestisce il click sulla card in base alla risoluzione dello schermo
   cardClick(item) {
      this.selectedSlideData = item;
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        this.openOffCanvas(item);
      } else {
        this.openModal(item);
      }
    }
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
};
</script>
 



<template>
   <div class="_explore" v-if="explore">
      <div class="_text">
         <div class="_badge">
            <p>Explore</p>
         </div>
         
         <h2>{{ explore.title }}</h2>
   
         <ul>
            <li v-for="item in explore.text" :key="item">
            <p class="_paragraph">{{ item }}</p>
            </li>
         </ul>
      </div>
      
      <!-- swiper -->
      <swiper
         class="_swiper"
         :slides-per-view="slidesPerView"
         :space-between="spaceBetween"
         :loop="true"
      >
         <swiper-slide
            class="_slide d-flex justify-content-center"
            v-for="(item, index) in explore.slide_thumb"
            :key="index"
         >
            <div
            class="card"
            @click="cardClick(item)"
            >
            <img :src="item.img" :alt="item.title">
            <div class="card-body">
               <span :class="item.badge === 'Inclusa' ? 'badge_included' : 'badge_not_included'">
                  {{ item.badge }}
               </span>
               <div class="card-body-title">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
               </div>
            </div>
            </div>
         </swiper-slide>
      </swiper>
   
      <!-- componente offcanvas -->
      <Offcanvas_explore 
         :data="selectedSlideData" 
      />
   
      <!-- componente modale -->
      <Modale_explore 
         :data="selectedSlideData"
      />
 
   </div>
 </template>
 



<style lang="scss" scoped>
._explore {
   padding: 50px 1rem;
   background-color: rgb(55, 31, 134);
   color: white;

   ._badge {
      background-color: rgb(236, 234, 255);
      color: rgb(64, 20, 206);
      font-size: 15px;
      font-weight: 500;
      padding: 6px 15px;
      border-radius: 20px;
      width: fit-content;
   }

   h2 {
      font-size: 20px;
      font-weight: 800;
      text-transform: uppercase;
      margin: 20px 0;
   }

   ul {
      li {
         ._paragraph {
            margin-top: 15px;
            font-size: 13px;
            line-height: 17px;
         }

         &:last-child ._paragraph {
            color: rgba(210, 210, 210, 0.597);
            font-style: oblique;
            font-weight: 500;
            margin-top: 8px;
         }
      }
   }

._swiper {
   margin-top: 40px;

   .card {
      width: 100%;
      height: 220px;
      max-width: 300px;
      background-color: transparent;
      border-radius: 20px;
      border: none;
      position: relative;
      cursor: pointer;

      img {
         border-radius: 20px;
         width: 100%;
         height: 100%;
         object-fit: cover;
         position: absolute;
         filter: brightness(75%);
      }

      .card-body {
         color: white;
         position: absolute;
         width: 100%;
         height: 100%;
         top: 0;
         padding: 15px;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         align-items: flex-start;

         .badge_included,
         .badge_not_included {
            font-size: 14px;
            border-radius: 20px;
            padding: 6px 15px;
            position: relative;
            align-self: flex-end;
         }

         .badge_included {
            background-color: rgb(238, 255, 240);
            color: rgb(38, 220, 14);
         }

         .badge_not_included {
            background-color: rgb(255, 231, 218);
            color: rgb(255, 114, 13);
         }

         .card-body-title {
            align-self: flex-start;

            h5 {
               font-size: 15px;
               font-weight: 700;
               margin: 0;
            }

            p {
               font-size: 14px;
            }
         }
      }
   }
}
}





/* Media query per dispositivi con larghezza minore o uguale a 400px */
@media (max-width: 400px) {
   ._explore {
      ._badge {
         font-size: 15px;
         padding: 6px 14px;
      }


      .card {
         .badge_included,
         .badge_not_included {
            font-size: 10px;
            padding: 4px 10px;
         }

         .card-body-title {
            h5 {
               font-size: 13px;
            }

            p {
               font-size: 11px;
            }
         }
      }
   }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
   ._explore {
      padding: 80px 5rem;

      ._badge {
         font-size: 18px;
         padding: 7px 18px;
      }

      h2 {
         font-size: 25px;
      }

      ul {
         li {
            ._paragraph {
               font-size: 16px;
               line-height: 20px;
            }

            &:last-child ._paragraph {
               margin-top: 14px;
            }
         }
      }

      ._swiper {

      
      .card {
         height: 400px;
         max-width: 500px;

         .card-body {

         .card-body-title {
            h5 {
               font-size: 20px;
            }

            p {
               font-size: 17px;
            }
         }
      }
      }
   }
}
}




/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
   ._explore {
      padding: 120px 5rem;

      display: flex;
      align-items: center;

      ._text {
         width: 30%;
         margin-right: 7rem;
         ul {
            li {
            ._paragraph {
               font-size: 18px;
            }
            }
         }
      }



      ._swiper {
         width: 70%;
         margin-top: 0;
         .card {
            max-width: 500px;

            .card-body {
            .badge_included,
            .badge_not_included {
               font-size: 17px;
               padding: 8px 18px;
               font-weight: 700;
            }

            .card-body-title {
               h5 {
               font-size: 28px;
               }

               p {
               font-size: 18px;
               }
            }
         }
         }
      }
   }
}
</style>
