
<script>
import Jumbotron from './partial Partner Detail/Jumbotron.vue';

export default {
   components: {
      Jumbotron
   },
   props: {
      data: Object
   },
  data(){
    return{

    };
  },

  methods:{
   saveSlideNameAndNavigate(name) {
      console.log(name)
      this.$router.push({ name: 'Partner_detail', query: { name: name } });
   }
  },
};
</script>




<template>
   <div v-if="data">

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
      </div>


      <!-- cards -->
      <div class="_cards">
         <h3>I partner di Utravel</h3>

         <div class="box_cards">
            <div
            v-for="item in data.cards"
            :key="item"
            class="card"
            >
               <img :src="item.image" alt="">
               <div class="box_text">
                  <div>
                     <span>{{ item.tag }}</span>
                     <h4>{{ item.title }}</h4>
                     <p>{{ item.description }}</p>
                  </div>
                  <div class="box_btn mt-3">
                     <button @click="saveSlideNameAndNavigate(item.name_push)" class="btn btn-warning">{{ item.btn_text }}</button>
                  </div>
               </div>
            </div>
         </div>

      </div>


      <!-- find what looking -->
      <div class="find_what_looking">
         <img src="https://images.prismic.io/blind/Zk32PSol0Zci9Wuq_Caraibi-1.webp?auto=format%2Ccompress&fit=max&w=640&q=100" alt="">
         <div class="box_text">
            <h5>Vuoi collaborare insieme a noi?</h5>
            <p>Vogliamo creare una e propria rete di brand uniti dagli stessi valori e da obiettivi similari. Se vuoi creare un progetto insieme a noi e salire a bordo, scrivici!</p>
            <router-link to="/">
               <button class="btn">Diventa Partner</button>
            </router-link>
         </div>
      </div>


      <!-- general partner -->
      <div class="general_partner ">
         <div class="box_text">
            <h3>{{ data.general_partner.title }}</h3>
            <p>{{ data.general_partner.description }}</p>
         </div>

         <div class="box_logo">
            <div
               v-for="item in data.general_partner.partner_logo"
               :key="item"
               class="box_img"
            >
               <img :src="item" alt="logo">
            </div>
         </div>
      </div>

   </div>
</template>




<style lang="scss" scoped>

._collaboration {
   padding: 50px 1rem;
   background-color: rgb(246, 246, 246);

   h3 {
      color: rgb(62, 16, 190);
      text-transform: uppercase;
      font-size: 23px;
   }

   p {
      margin-top: 15px;
      line-height: 19px;
      font-size: 13px;
   }
}




._cards {
   padding: 50px 1rem;
   background-color: rgb(246, 246, 246);

   h3 {
      color: rgb(62, 16, 190);
      text-transform: uppercase;
      font-size: 23px;
   }

   .card {
      border-radius: 15px;
      margin-top: 40px;
      border: none;
      box-shadow: 0px 0px 10px rgb(176, 176, 176);
      
      img {
         height: 180px;
         object-fit: cover;
         border-radius: 15px 15px 0 0;
      }

      .box_text {
         padding: 15px;

         span {
            display: block;
            width: fit-content;
            font-size: 12px;
            background-color: rgb(255, 238, 222);
            color: orangered;
            padding: 8px 15px;
            border-radius: 20px;
         }

         h4 {
            color: rgb(62, 16, 190);
            text-transform: uppercase;
            font-size: 20px;
            margin: 10px 0;
         }

         p {
            font-size: 14px;
         }
         
         button {
            color: white;
            background-color: rgb(255, 92, 33);
            font-size: 14px;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 10px;
         }
      }
   }
}




.find_what_looking {
   position: relative;

   img {
      height: 350px;
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
         text-transform: uppercase;
      }

      p {
         font-size: 14px;
         line-height: 18px;
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




.general_partner {
   padding: 50px 1rem;
   color: white;
   background-color: rgb(56, 22, 149);

   .box_text {
      text-align: center;

      h3 {
         font-size: 23px;
         text-transform: uppercase;
      }

      p {
         font-size: 14px;
      }
   }

   .box_logo {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 40px;

      .box_img {
         display: flex;
         justify-content: center;
         width: 30%;

         img {
            width: 60%;
         }
      }
   }
}







/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {

   ._collaboration {
      padding: 80px 5rem;
      text-align: center;

      h3 {
         font-size: 35px;
      }

      p {
         margin-top: 30px;
         line-height: 22px;
         font-size: 17px;
      }
   }




   ._cards {
      padding: 50px 5rem 80px 5rem;

      h3 {
         font-size: 35px;
         text-align: center;
      }

      .box_cards {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;

         .card {
            margin: 40px 10px 0 10px;
            width: calc(100% - 70%);
            max-width: 500px;

            img {
               min-height: 180px;
            }

            .box_text {
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               height: 100%;

               span {
                  font-size: 14px;
                  padding: 8px 20px;
               }

               h4 {
                  font-size: 23px;
                  margin: 13px 0;
               }

               p {
                  font-size: 16px;
                  line-height: 20px;
               }
               
               button {
                  font-size: 16px;
               }
            }
         }
      }
   }




   .find_what_looking {
      img {
         height: 400px;
      }

      .box_text {
         width: 50%;

         h5 {
            font-size: 35px;
         }

         p {
            font-size: 16px;
            margin: 40px 0;
         }
      }
   }




   .general_partner {
      padding: 80px 5rem;
      display: flex;
      justify-content: center;

      .box_text {
         display: flex;
         flex-direction: column;
         justify-content: center;
         text-align: start;
         border-right: 1px solid white;
         padding-right: 70px;
         
         h3 {
            font-size: 35px;
         }

         p {
            font-size: 17px;
            margin-top: 20px;
         }
      }

      .box_logo {
         margin-top: 0px;

         .box_img {
            width: 16%;

            img {
               width: 60%;
               object-fit: contain;
            }
         }
      }
   }

}

</style>