
<script>

export default {
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
   <div v-if="data">

      <!-- jumbotron -->
      <div class="_jumbotron">
         <div class="_box">
            <img
               :src="data.jumbotron.image"
               alt="jumbotron">
            <div class="box_text">
               <h1>{{ data.jumbotron.title }}</h1>
               <p>{{ data.jumbotron.text }}</p>
            </div>
         </div>
      </div>


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
      </div>


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
               <a v-if="item.btn_text != false" :href="item.href" class="btn btn-dark">{{ item.btn_text }}</a>
            </div>
         </div>
      </div>

   </div>
</template>




<style lang="scss" scoped>

._jumbotron {
   ._box {
      position: relative;

      img {
         width: 100%;
         height: 450px;
         object-fit: cover;
         filter: brightness(65%);
      }

      .box_text {
         width: 90%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         h1 {
            font-size: clamp(1.8rem, 6vw, 4rem);
            font-weight: 800;
            text-transform: uppercase;
         }

         p {
            font-size: 15px;
            font-weight: 500;
         }

         h1,
         p {
            color: white;
            text-align: center;
         }
      }  
   }
}




._collaboration {
   color: white;
   padding: 50px 1rem;
   font-size: 14px;
   background-color: rgb(32, 32, 32);
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
}




._cards {
   padding: 50px 1rem;
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
            font-size: 20px;
            font-weight: 900;
         }

         p {
            font-size: 14px;
            line-height: 19px;
            margin: 25px 0;
         }

         a {
            color: white;
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

   ._jumbotron {
      ._box {
         img {
            height: 550px;
         }
         .box_text {
            width: 90%;

            p {
               font-size: 20px;
               font-weight: 500;
            }
         }  
      }
   }




   ._collaboration {
      padding: 60px 5rem 80px 5rem;
      font-size: 17px;

      img {
         max-width: 100%;
         height: 100px;
         margin: 0;
      }
   }




   ._cards {
      padding: 70px 5rem;

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

            a {
               font-size: 17px;
            }
         }
      }
   }
}








/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   ._discount {
      padding: 80px 20rem;
   }
}

</style>