
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
            <h1>{{ data.jumbotron.title }}</h1>
         </div>
      </div>


      <!-- join & banner -->
      <div class="_join">
         <h2>{{ data.paragraph.title }}</h2>
         <p v-html="data.paragraph.text"></p>
      </div>

      <div class="_banner">
         <h3>{{ data.banner }}</h3>
      </div>


      <!-- travels -->
      <div class="_travels">
         <div
           v-for="item in data.travels"
           :key="item"
         >
            <!-- head -->
            <div class="_head">
               <h4> {{ item.head.title }} <span> {{ item.head.price }}€ </span></h4>
            </div>
   
            <div class="_cards d-flex flex-wrap justify-content-center">
               <!-- card -->
               <div 
                  v-for="item in item.cards"
                  :key="item" 
                  class="card m-2"
               >
                  <a href="#" @click.prevent="saveSlideNameAndNavigate(item.text.name)" class="slide-link text-dark">
                     <img :src="item.image" alt="">
      
                     <div class="_text">
                        <h6>{{ item.text.name }}</h6>
                        <p>A partire da <span> {{ item.text.price }}€ </span> /Persona </p>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </div>


      <!-- find what looking -->
      <div class="find_what_looking">
         <img src="https://d9hhrg4mnvzow.cloudfront.net/viaggi.utravel.it/destinazioni-fasce-di-prezzo/7ab2a362-maldive-11_10000001g30k70000om01o.jpg" alt="">
         <div class="box_text">
            <h5>non hai trovato quello che cerchi?</h5>
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
      height: 300px;
      object-fit: cover;
      filter: brightness(75%);
    }

    h1 {
      color: white;
      text-align: center;
      width: 60%;
      font-size: clamp(2rem, 7vw, 3.5rem);
      font-weight: 800;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}



._join {
   padding: 50px 1rem;

   h2 {
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      color: rgb(86, 0, 177);
      margin-bottom: 15px;
   }

   p {
      font-size: 13px;
      line-height: 22px;
   }
}



._banner {
   padding: 50px 1rem;
   background-color: rgb(75, 11, 195);
   
   h3 {
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
   }
}




._travels {
   ._head {
      padding: 20px 0;
      text-align: center;

      h4 {
         font-size: 20px;
         font-weight: 900;
         text-transform: uppercase;
         color: rgb(69, 0, 172);
         margin: 0;

         span {
            color: rgb(255, 94, 0);
         }
      }
   }

   ._cards {
      padding: 30px 1rem;
      background-color: rgb(236, 236, 255);

      .card {
         width: 46%;
         border-radius: 20px;

         img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 20px 20px 0 0;
         }

         ._text {
            padding: 15px;

            h6 {
               font-size: 16px;
               font-weight: 900;
               text-transform: uppercase;
               color: rgb(69, 0, 172);
               margin: 0;
            }

            p {
               font-size: 12px;
               color: grey;

               span {
                  font-size: 16px;
                  font-weight: 800;
                  color: orangered;
               }
            }

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





/* Media query per dispositivi con larghezza minore o uguale a 435px */
@media (max-width: 435px) {
   ._travels {
      ._cards {
         .card {
            width: 80%;
         }
      }
   }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._jumbotron {
      ._box {
         img {
            height: 450px;
         }
      }
   }





   ._join {
      padding: 70px 5rem;

      h2 {
         font-size: 30px;
         margin-bottom: 20px;
      }

      p {
         font-size: 17px;
      }
   }





   ._banner {
      text-align: center;
      padding: 70px 5rem;
      
      h3 {
         font-size: 35px;
      }
   }





   ._travels {
      ._head {
         padding: 40px 0;

         h4 {
            font-size: 30px;
         }
      }

      ._cards {
         padding: 80px 5rem;

         .card {
            width: 35%;
            max-width: 400px;

            img {
               height: 200px;
            }

            ._text {
               padding: 20px;

               h6 {
                  font-size: 20px;
               }

               p {
                  font-size: 15px;

                  span {
                     font-size: 18px;
                  }
               }

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
</style>