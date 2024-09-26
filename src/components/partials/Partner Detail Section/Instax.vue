
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
      <div class="_collaboration">
         <img :src="data._collaboration.image" alt="">
         <div>
            <p 
               v-for="item in data._collaboration.text"
               :key="item"
               v-html="item"
            ></p>
         </div>
      </div>


      <!-- discount -->
      <div class="_discount d-md-flex align-items-center">
         <div class="">
            <div class="_text">
               <p
               v-for="item in data.discount.text"
               :key="item"
               v-html="item"
               ></p>
            </div>

            <div class="outer_box d-md-none">
               <p>Usa il codice:</p>
               <div class="inner_box">
                  <p>{{ data.discount.code_discount }}</p>
               </div>
            </div>

            <div class="btn_box">
               <a href="https://instaxshop.fujifilm.it/?utm_source=social&utm_medium=cpc&utm_campaign=utravel&utm_id=UTRAVEL" class="btn btn-warning text-white">Scopri Instax!</a>
            </div>
         </div>
      
         <!-- desktop -->
         <div class="outer_box d-none d-md-block">
            <p>Usa il codice:</p>
            <div class="inner_box">
               <p>{{ data.discount.code_discount }}</p>
            </div>
         </div>
      </div>


      <!-- info -->
      <div class="_info round">
         <h3>{{ data.info.title }}</h3>

         <!-- card -->
         <div
           v-for="(item, index) in data.info.cards"
           :key="item"
           class="card"
           :class="[index % 2 === 0 ? 'flex-md-row' : 'flex-md-row-reverse']"
         >
            <div class="box_img">
               <img
               :src="item.image"
               alt=""
               :class="[index % 2 === 0 ? 'rounded-end-0' : 'rounded-start-0']"
               >
            </div>
            <div class="box_text">
               <h5>{{ item.title }}</h5>
               <p v-html="item.description"></p>
               <a :href="item.href" class="btn btn-warning">{{ item.btn_text }}</a>
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
            font-size: clamp(1rem, 6vw, 4rem);
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
   background-color: rgb(118, 80, 213);
   display: flex;
   flex-direction: column;
   align-items: center;

   img {
      min-width: 200px;
      margin-bottom: 10px;
   }

   p {
      margin-top: 15px;
      line-height: 19px;
   }
   
}





._discount {
   padding: 50px 1rem;

   ._text {
      text-align: center;
      font-size: 14px;

      p {
         margin: 15px;
         line-height: 19px;
      }
   }
   .outer_box {
      background-color: rgb(118, 80, 213);
      padding: 20px;
      margin: 20px 0 20px 0;
      border-radius: 18px;

      p {
         text-align: center;
         color: white;
         font-size: 12px;
         padding-bottom: 14px;
      }

      .inner_box {
         background-color: white;
         padding: 10px;
         border-radius: 15px;

         p {
            color: rgb(118, 80, 213);
            font-weight: 900;
            font-size: 25px;
            padding: 0;
         }
      }

   }
   .btn_box {
      text-align: center;

      a {
         font-size: 15px;
         font-weight: 600;
         padding: 10px 20px;
         border-radius: 10px;
      }
   }
}




._info {
   padding: 50px 1rem;
   background-color: rgb(246, 246, 246);

   h3 {
      color: rgb(118, 80, 213);
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
   }

   .card {
      border-radius: 15px;
      margin-top: 50px;

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
      text-align: center;

      img {
         max-width: 100%;
         height: 100px;
         margin: 0;
      }
   }





   ._discount {
      padding: 80px 5rem;

      ._text {
         width: 80%;
         text-align: start;
         font-size: 17px;

         p {
            margin: 15px;
            line-height: 24px;
         }
      }

      .outer_box {
         width: 40%;
         max-width: 350px;
         height: 150px;
         padding: 20px;
         margin: 20px 0 20px 0;
         border-radius: 18px;

         p {
            font-size: 12px;
            padding-bottom: 14px;
         }

         .inner_box {
            padding: 10px;
            border-radius: 15px;

            p {
               font-size: 25px;
            }
         }
      }

      .btn_box {
         text-align: start;
         margin-left: 13px;
         margin-top: 30px;

         a {
            font-size: 17px;
         }
      }
   }






   ._info {
      padding: 70px 5rem;

      h3 {
         text-align: center;
         font-size: 30px;
      }

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