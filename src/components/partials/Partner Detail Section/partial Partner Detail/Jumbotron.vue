
<script>

export default {
   props: {
      data: Object
   },
};
</script>




<template>
  <!-- jumbotron -->
  <div class="_jumbotron">
      <div class="_box">
         <img :src="data.jumbotron.image" alt="jumbotron">
         <div class="box_text">
            <h1>{{ data.jumbotron.title }}</h1>
            <p>{{ data.jumbotron.text }}</p>
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
         filter: brightness(70%);
      }

      .box_text {
         color: white;
         text-align: center;
         width: 90%;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);

         h1 {
            font-size: clamp(1.8rem, 6vw, 4rem);
            text-transform: uppercase;
         }

         p {
            font-size: 15px;
            font-weight: 500;
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

}
</style>