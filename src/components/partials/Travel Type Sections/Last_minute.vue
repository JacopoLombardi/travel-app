
<script>

export default {
   props: {
      data: Object
   },
   data() {
      return {

      };
   },

   methods: {
      saveSlideNameAndNavigate(name) {
         this.$router.push({ name: 'Travel_detail', query: { name: name } });
      }
   },
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
      

      <!-- paragraph -->
      <div class="_paragraph">
         <p v-html="data.paragraph"></p>
      </div>


      <!-- travels -->
      <div class="_travels">
         <div
           v-for="item in data.travels"
           :key="item"
         >
            <!-- head -->
            <div class="_head">
               <h4>{{ item.head }}</h4>
            </div>
   
            <div class="_cards d-flex flex-wrap justify-content-center">
               <!-- card -->
               <div 
                  v-for="item in item.cards"
                  :key="item" 
                  class="card m-3"
               >

                  <a href="#" @click.prevent="saveSlideNameAndNavigate(item.text.name)" class="slide-link text-dark">
                     <img :src="item.image" alt="">
                     
                     <!-- mobile -->
                     <div class="text_mobile d-md-none">
                        <h6>{{ item.text.name }}</h6>
                        <p>Da <span> {{ item.text.price }}€ </span> </p>
                        <button class="btn"><i class="fa-solid fa-chevron-right"></i></button>
                     </div>

                     <!-- desktop -->
                     <div class="text_desktop d-none d-md-block">
                        <h6>{{ item.text.name }}</h6>
                        <p>Da <span> {{ item.text.price }}€ </span> </p>
                        <button class="btn"><i class="fa-solid fa-chevron-right"></i></button>
                     </div>
                     <div class="bg_hidden d-flex d-none d-md-block">
                        <p>7 notti / 8 giorni</p>
                     </div>
                  </a>

               </div>
            </div>
         </div>
      </div>


      <!-- find what looking -->
      <div class="find_what_looking">
         <img src="https://images.prismic.io/blind/654128c30b105250cf53c588_jared-rice-sunbathing.jpg?auto=format%2Ccompress&fit=max&w=3840&q=100" alt="">
         <div class="box_text">
            <h5>non hai trovato quello che cercavi?</h5>
            <p>Dai un'occhiata alla lista completa dei viaggi e scegli quello che fa al caso tuo.</p>
            <router-link to="/">
               <button class="btn">scopri tutti i viaggi</button>
            </router-link>
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
         filter: brightness(75%);
      }

      .box_text {
         width: 90%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         h1 {
            font-size: clamp(2rem, 8vw, 4rem);
            font-weight: 800;
            text-transform: uppercase;
         }

         p {
            font-size: 17px;
            font-weight: 500;
            margin-top: 30px;
         }

         h1,
         p {
            color: white;
            text-align: center;
         }
      }  
   }
}




._paragraph {
   padding: 60px 1rem;
   font-size: 12px;
   background-color: rgb(247, 247, 247);
}





._travels {
   padding: 0px 1rem 50px 1rem;

   h4 {
      font-size: 25px;
      font-weight: 900;
      text-transform: uppercase;
      text-align: center;
      margin-top: 60px;
   }

   .card {
      border-radius: 20px;

      img {
         border-radius: 20px 20px 0 0;
         object-fit: cover;
      }

      .text_mobile {
         color: white;
         padding: 15px;
         position: relative;
         background-color: rgb(255, 94, 0);
         border-radius: 0 0 20px 20px;

         h6 {
            font-size: 18px;
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: 3px;
         }
         
         p {
            font-size: 14px;
            span {
               font-size: 16px;
               font-weight: 700;
            }
         }

         button {
            background-color: white;
            color: rgb(255, 94, 0);
            border-radius: 50%;
            padding: 2px 10px;
            position: absolute;
            bottom: 23px;
            right: 15px;
         }

      }

   }
}



.find_what_looking {
   position: relative;

   img {
      height: 400px;
      width: 100%;
      object-fit: cover;
      filter: brightness(85%);
   }

   .box_text {
      text-align: center;
      width: 70%;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h5 {
         font-size: 23px;
         font-weight: 900;
         text-transform: uppercase;
      }

      p {
         font-size: 14px;
         line-height: 25px;
         margin: 20px 0;
      }

      button {
         color: white;
         font-weight: 700;
         background-color: rgb(255, 98, 0);
         border-radius: 10px;
         padding: 10px 0;
         width: 70%;
         max-width: 300px;
      }
   }
}




/* Media query per dispositivi con larghezza minore o uguale a 400px */
@media (max-width: 400px) {

   ._jumbotron {
      ._box {
         .box_text {
            width: 60%;

            p {
               font-size: 13px;
               font-weight: 500;
            }
         }  
      }
   }




   ._travels {
      h4 {
         font-size: 22px;
         margin-bottom: 0;
      }

      .card {
         .text_mobile {
            padding: 10px;

            h6 {
               font-size: 14px;
               margin: 0;
            }
            
            p {
               font-size: 12px;

               span {
                  font-size: 14px;
                  font-weight: 700;
               }
            }

            button {
               bottom: 17px;
               padding: 0px 9px;
               
               i {
                  font-size: 12px;
               }
            }
         }
      }
   }
}







/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._jumbotron {
      ._box {
         .box_text {
            width: 90%;

            p {
               font-size: 19px;
               font-weight: 500;
            }
         }  
      }
   }




   ._paragraph {
      padding: 80px 5rem;
      font-size: 16px;
   }




   ._travels {
      padding: 0 5rem;
      padding-bottom: 80px;

      h4 {
         font-size: 32px;
         margin-top: 80px;
      }

      .card {
         width: 100%;
         height: 25rem;
         overflow: hidden;

         img {
            height: 500px;
            object-fit: cover;
            border-radius: 20px 20px 0 0;
            filter: brightness(80%);
            position: relative;
            transition: all 0.25s ease-in-out;
         }

         .bg_hidden {
            color: white;
            transition: all 0.25s ease-in-out;
            position: absolute;
            background-color: rgb(255, 94, 0);
            height: 80px;
            width: 100%;
            bottom: -20.1%;

            p {
               position: absolute;
               bottom: 13%;
               margin-left: 20px;
            }
         }

         &:hover .bg_hidden {
            bottom: 0;
         }

         &:hover img {
            filter: brightness(100%);
            transform: translateY(-15%);
         }

         .text_desktop {
            color: white;
            width: 100%;
            position: absolute;
            padding-left: 20px;
            bottom: 0;

            h6 {
               font-size: 21px;
               font-weight: 800;
               width: 80%;
               text-transform: uppercase;
               position: relative;
               z-index: 10;
               margin-bottom: 4px;
            }

            p {
               margin-bottom: 10px;

               span {
                  font-size: 20px;
                  font-weight: 700;
               }
            }

            button {
               background-color: white;
               color: rgb(255, 94, 0);
               border-radius: 50%;
               padding: 7px 15px;
               position: absolute;
               z-index: 12;
               bottom: 20px;
               right: 20px;
            }
         }
      }
   }




   .find_what_looking {
      img {
         height: 500px;
      }

      .box_text {
         width: 70%;

         h5 {
            font-size: 35px;
         }

         p {
            font-size: 16px;
            margin: 40px 0;
         }
      }
   }
}







/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   ._travels {
      .card {
         width: 30%;
         max-width: 400px;
         height: 25rem;
      }
   }
}
</style>