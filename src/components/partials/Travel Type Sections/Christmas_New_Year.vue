
<script>

export default {
  props: {
    data: Object
  },
  data(){
    return{

    };
  },

  methods:{
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
        <ul>
           <li
              v-for="item in data.paragraph"
              :key="item"
           >
              <p v-html="item"></p>
           </li>
        </ul>
     </div>


     <!-- travels -->
    <div class="_travels">
      <div
        v-for="(item, index) in data.travels"
        :key="item"
        :class="{ 'pt-5': index % 2 !== 0 }"
      >
        <!-- head -->
        <div class="_head mb-4">
          <h4>{{ item.head.title }}</h4>
        </div>
      
        <div class="box_cards d-flex flex-wrap justify-content-between justify-content-lg-center py-3">

          <!-- card -->
          <div 
            class="card"
            v-for="item in item.cards"
            :key="item"
          >
            <a href="#" @click.prevent="saveSlideNameAndNavigate(item.text.name)" class="slide-link text-dark">
              <img :src="item.image" :alt="item.name">
              <div class="box_text">
                  <h5>{{ item.text.name }}</h5>
                  <span>{{ item.text.departure }}</span>
                  <p>Da <b> {{ item.text.price }}€ </b> 
                    <span v-if="item.text.deleted_price">
                      <del>{{ item.text.deleted_price }}€</del>
                    </span>
                  </p>
              </div>
            </a>
          </div>
          
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

    .box_text {
      width: 90%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h1 {
        font-size: clamp(2rem, 8vw, 4rem);
        text-transform: uppercase;
      }

      p {
        font-size: 17px;
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




._paragraph {
  padding: 50px 1rem;
  font-size: 12px;
  background-color: rgb(247, 247, 247);
  
  p {
    margin: 15px 0;
  }
}




._travels {
  padding: 50px 1rem;

  h4 {
    font-size: 25px;
    text-transform: uppercase;
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
          font-weight: 800;
          font-family: Poppins;
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






   ._travels {
      padding: 50px 5rem;

      h4 {
         font-size: 30px;
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





  ._travels {
      padding: 70px 5rem;

      h4 {
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