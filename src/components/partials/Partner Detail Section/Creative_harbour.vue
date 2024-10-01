
<script>
import Jumbotron from './partial Partner Detail/Jumbotron.vue';
import DoubleSwiper from './partial Partner Detail/DoubleSwiper.vue';

export default {
   components: {
      Jumbotron,
      DoubleSwiper
   },
   props: {
      data: Object
   },
   data() {
      return {
         windowWidth: window.innerWidth,
      };
   },
   methods: {
      handleResize() {
         this.windowWidth = window.innerWidth;
      }
   },
   created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); // Per impostare la larghezza all'inizio
   },
   beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
   }
};
</script>




<template>

   <!-- componente jumbotron -->
   <Jumbotron
      :data="data" 
   />


   <!-- collaboration -->
   <div class="_collaboration">
      <h3>{{ data.collaboration.title }}</h3>
      <div>
         <p 
            v-for="item in data.collaboration.text"
            :key="item"
            v-html="item"
         ></p>
      </div>

      <a href="https://creativeharbour.io/" class="btn">Lavora in giro per il mondo!</a>
   </div>


   <!-- componente swiper -->
   <DoubleSwiper
      :data="data"
   />


    <!-- cards -->
    <div class="_cards round">
      <div
         v-for="(item, index) in data.cards"
         :key="item"
         class="card"
         :class="[index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse']"
      >
         <div class="box_img">
            <img
               :src="item.image"
               alt=""
               :class="(windowWidth > 768) ? (index % 2 === 0 ? 'rounded-end-0' : 'rounded-start-0') : ''"
            >
         </div>
         <div class="box_text">
            <h5>{{ item.title }}</h5>
            <p v-html="item.description"></p>
            <ul>
               <li
                  v-for="item in item.list"
                  :key="item"
               >
                  {{ item }}
               </li>
            </ul>
            <a v-if="item.btn_text != false" :href="item.href" class="btn">{{ item.btn_text }}</a>
         </div>
      </div>
   </div>

</template>




<style lang="scss" scoped>

._collaboration {
   color: white;
   padding: 50px 1rem;
   font-size: 13px;
   background-color: rgb(5, 19, 31);
   text-align: center;

   h3 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: clamp(1.8rem, 6vw, 3rem);
   }

   p {
      margin-top: 15px;
      line-height: 19px;
   }

   a {
      color: white;  
      background-color: rgb(255, 145, 0);
      font-size: 14px;
      font-weight: 600;
      padding: 8px 15px;
      margin-top: 40px;
   }
}




._cards {
   padding: 10px 1rem 50px 1rem;
   background-color: rgb(246, 246, 246);

   .card {
      border-radius: 15px;
      margin-top: 50px;
      border: none;
      box-shadow: 0px 0px 10px rgb(176, 176, 176);

      .box_img {
         img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 15px 15px 0 0;
         }
      }

      .box_text {
         padding: 20px;

         h5 {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 900;
         }

         p {
            color: rgb(129, 129, 129);
            font-size: 13px;
            line-height: 19px;
            margin: 20px 0;
         }

         ul {
            list-style: disc;
            margin-left: 20px;
            margin-bottom: 20px;

            li {
               font-size: 14px;
               color: rgb(129, 129, 129);
            }
         }

         a {
            color: white;
            background-color: rgb(255, 136, 0);
            font-size: 15px;
            font-weight: 600;
            padding: 8px 17px;
            border-radius: 10px;
         }
      }
   }
}








/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._collaboration {
      padding: 80px 5rem 100px 5rem;
      font-size: 17px;

      img {
         max-width: 100%;
         height: 100px;
         margin: 0;
      }
   }




   ._cards {
      padding: 50px 5rem 120px 5rem;

      .card {
         height: auto;
         max-width: 1800px;
         margin-top: 70px;

         .box_img {
            width: 50%;
            position: relative;

            img {
               height: 100%;
               max-height: 100%;
               border-radius: 15px;
               position: absolute;
            }
         }

         .box_text {
            width: 50%;
            padding: 30px;

            h5 {
               font-size: 28px;
            }

            p {
               font-size: 15px;
               line-height: 19px;
               margin: 25px 0;
            }

            ul {
               li {
                  font-size: 16px;
               }
            }

            a {
               font-size: 17px;
            }
         }
      }
   }

}

</style>