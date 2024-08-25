
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    data: Object
  },
  data() {
    return {
      selectedSlideData: null, // Dati della slide selezionata
    };
  },
  computed: {
    // funzione che abbrevia la chiamata dei dati nel template
    explore() {
      return this.data?.detail.explore;
    },
  },
  methods: {
    openOffCanvas(item) {
      this.selectedSlideData = item; // Imposta i dati della slide selezionata
      // Codice per aprire l'offcanvas
      const offcanvasElement = document.getElementById('offcanvasBottom');
      const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);
      bsOffcanvas.show();
    }
  }
};
</script>





<template>
  <div
     class="_explore"
     v-if="explore"
   >
      <div class="_text">
         <div class="_badge">
            <p>Explore</p>
         </div>
         
         <h2>{{ explore.title }}</h2>

         <ul>
            <li
              v-for="item in explore.text"
              :key="item"
            >
               <p class="_paragraph">{{ item }}</p>
            </li>
         </ul>
      </div>
      
      <!-- swiper -->
      <swiper
         class="_swiper"
         :slides-per-view="1"
         :space-between="-130"
         :loop="true"
         pagination
         @swiper="onSwiper"
      >
         <swiper-slide
            class="_slide"
            v-for="(item, index) in explore.slide_thumb"
            :key="index"
         >
            <div
              class="card"
              @click="openOffCanvas(item)"
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
            <img :src="selectedSlideData?.detail.img" :alt="selectedSlideData?.title">
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
               :class="selectedSlideData?.detail.badge === 'Esperienza inclusa' ? 'badge_included' : 'badge_not_included'"
            >
               {{ selectedSlideData?.detail.badge }} 
               <i :class="selectedSlideData?.detail.icon"></i>
            </p>
         </div>
         
         <!-- down -->
         <div class="box_down">
            <h4>{{ selectedSlideData?.title }}</h4>
            <ul class="_tag d-flex">
               <li
                  v-for="item in selectedSlideData?.detail.tag"
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
                  v-for="item in selectedSlideData?.detail.text"
                  :key="item"
               >
                  <p v-html="item"></p>
               </li>
               
               <!-- Mostra solo_utravel una volta se esiste -->
               <li>
                  <p 
                     v-if="selectedSlideData?.detail.text_only_utravel"
                     class="only_utravel"
                     v-html="selectedSlideData?.detail.text_only_utravel"
                  ></p>
               </li>
            </ul>
         </div>

      </div>

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

         &:last-child ._paragraph{
            color: rgba(210, 210, 210, 0.597);
            font-style: oblique;
            font-weight: 500;
            margin-top: 8px;
         }

      }
   }




   ._slide {
   
      // card
      .card {
         width: 50%;
         max-width: 300px;
         aspect-ratio: 1;
         background-color: transparent;
         border-radius: 20px;
         margin-top: 40px;
         border: none;
         position: relative;

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
         }

         .badge_included {
            background-color: rgb(238, 255, 240);
            color: rgb(38, 220, 14);
            font-size: 14px;
            border-radius: 20px;
            padding: 6px 15px;
            position: relative;
            align-self: flex-end;
         }

         .badge_not_included {
            background-color: rgb(255, 231, 218);
            color: rgb(255, 114, 13);
            font-size: 14px;
            border-radius: 20px;
            padding: 6px 15px;
            position: relative;
            align-self: flex-end;
         }

         .card-body .card-body-title {
            h5 {
               font-size: 15px;
               font-weight: 700;
               margin: 0;
            }

            p {
               font-size: 14px;
            }
         }

         .card-body .card-body-title {
            align-self: flex-start;
         }

         &:hover {
            cursor: pointer;
         }
      }
   }


   .offcanvas {
      height: 85vh;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      padding: 0 0 35px 0;
      overflow: auto;

      .box_edge {
         display: flex;
         justify-content: center;
         margin: 15px 0;
         ._edge {
            background-color: rgb(226, 226, 226);
            width: 50px;
            height: 6px;
            border-radius: 20px;
         }
      }

      .box_up {
         margin-bottom: 20px;
         position: relative;

         img {
            width: 100%;
            height: 280px;
            object-fit: cover;
         }

         button {
            background-color: white;
            font-size: 14px;
            position: absolute;
            top: 15px;
            right: 15px;
         }

         ._badge {
            position: absolute;
            bottom: 20px;
            left: 20px;
            background-color: rgb(238, 255, 240);
            color: rgb(38, 220, 14);
            font-size: 13px;
            padding: 8px 15px;
         }

         .badge_included {
            background-color: rgb(238, 255, 240);
            color: rgb(38, 220, 14);
         }

         .badge_not_included {
            background-color: rgb(255, 231, 218);
            color: rgb(255, 114, 13);
         }
      }




      .box_down {
         margin: 0 2rem 0 2rem;

         h4 {
            font-size: 22px;
            margin-bottom: 10px;

         }

         ._tag {
            border-bottom: 1px solid rgba(206, 206, 206, 0.613);
            padding-bottom: 20px;
            color: rgb(73, 73, 73);
            font-weight: 600;

            p {
               margin-right: 2rem;
            }
         }

         ul:last-child {
            li {
               p {
                  color: rgb(112, 112, 112);
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
         width: 0px;
      }
   }
   
}
</style>