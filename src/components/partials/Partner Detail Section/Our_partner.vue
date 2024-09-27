
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
   padding: 50px 1rem;
   font-size: 14px;
   display: flex;
   flex-direction: column;
   align-items: center;

   h3 {
      color: rgb(114, 46, 231);
      text-transform: uppercase;
      font-weight: 900;
      font-size: 23px;
   }

   p {
      margin-top: 15px;
      line-height: 19px;
   }
   
}













</style>