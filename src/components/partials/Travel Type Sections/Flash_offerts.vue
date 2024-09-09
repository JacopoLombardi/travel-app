
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


      <!-- paragraph -->
      <div class="_paragraph">
         <ul>
            <li
               v-for="item in data.paragraph"
               :key="item"
            >
               <p v-html="item"></p>
            </li>
         </ul>
      </div>


      <!-- cards -->
      <div class="_cards">
         <h2>Scegli la meta che fa per te e inizia a fare la valigia!</h2>

         <div class="box_cards d-flex flex-wrap justify-content-between justify-content-lg-center">
            <div 
               v-for="item in data.card"
               :key="item"
               class="card"
            >
               <a href="#" @click.prevent="saveSlideNameAndNavigate(item.name)" class="slide-link text-dark">
                  <img :src="item.image" :alt="item.name">
                  <div class="box_text">
                     <h5>{{ item.name }}</h5>
                     <span>{{ item.departure }}</span>
                     <p>Da <b> {{ item.price }}€ </b> <span><del> {{ item.deleted_price }}€ </del></span></p>
                  </div>
               </a>
               
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
      filter: brightness(75%);
    }

    h1 {
      color: white;
      text-align: center;
      width: 100%;
      font-size: clamp(1.7rem, 8vw, 4rem);
      font-weight: 800;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}





._paragraph {
  padding: 50px 1rem;
  font-size: 12px;
  background-color: rgb(247, 247, 247);
  
  p {
    margin: 15px 0;
  }
}





._cards {
  padding: 50px 1rem;

  h2 {
    color: rgb(105, 13, 226);
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .box_cards {
    .card {
      width: calc(100% - 53%);
      margin-bottom: 30px;
      border: none;

      img {
        aspect-ratio: 1;
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
      }

      .box_text {
        line-height: 18px;
        margin-top: 10px;
        margin-left: 3px;

        h5 {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }

        span {
         display: inline-block;
          font-size: 12px;
          line-height: 14px;
          color: rgb(117, 117, 117);
        }

        p {
          font-size: 13px;
          margin-top: 8px;

          b {
            color: rgb(5, 192, 5);
            font-size: 15px;
          }
        }
        
      }
    }
  }

}







/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._paragraph {
      padding: 50px 5rem;
      font-size: 14px;
      
      p {
         margin: 25px 0;
      }
   }





   ._cards {
      padding: 70px 5rem;

      h2 {
         font-size: 30px;
         font-weight: 900;
         margin-bottom: 40px;
      }

      .box_cards {
         .card {
            width: calc(100% - 53%);
            margin-bottom: 40px;

            .box_text {
               line-height: 20px;

               h5 {
                  font-size: 17px;
               }

               span {
                  font-size: 13px;
               }

               p {
                  font-size: 14px;

                  b {
                     font-size: 16px;
                  }
               }
            
            }
         }
      }

   }

}







/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

   ._jumbotron {
      ._box {
         img {
            height: 550px;
         }
      }
   }





   ._paragraph {
      padding: 70px 5rem;
      text-align: center;
      font-size: 16px;
   }





   ._cards {
      padding: 70px 5rem;

      h2 {
         font-size: 35px;
         text-align: center;
      }

      .box_cards {
         .card {
            width: calc(100% - 80%);
            margin: 15px;

            .box_text {
               line-height: 20px;

               h5 {
                  font-size: 20px;
               }

               span {
                  font-size: 15px;
               }

               p {
                  font-size: 16px;

                  b {
                     font-size: 20px;
                  }
               }
            }
         }
      }
   }

}


</style>