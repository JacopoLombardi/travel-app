<script>

export default {
   data() {
      return {

      };
   },
   methods: {

   },
};
</script>






<template>

   <div class="last_places text-white mb-5">

      <h4>Ultimi posti per la tua estate</h4>
      <img src="https://images.prismic.io/blind/ZpZtLh5LeNNTxMe9_Maiorca-Cover.webp?auto=format,compress" alt="">

      
      <div class="external_card">
         <div class="_card">
            <h2>Maiorca</h2>
            <p>a Partire da 629 &euro;</p>
            <button class="btn"><i class="fa-solid fa-arrow-right"></i></button>
         </div>
      </div>

   </div>

</template>






<style lang="scss" scoped>
.last_places {
   position: relative;
   height: 700px;

   display: flex;
   justify-content: center;

   h4 {
      font-size: 21px;
      font-weight: 800;
      text-transform: uppercase;
      margin-top: 40px;
      position: absolute;
   }

   img {
      height: 100%;
      object-fit: cover;
   }

   .external_card {
      height: 100%;

      display: flex;
      align-items: center;
      position: absolute;

      ._card {
         width: 300px;
         border: 2px solid white;
         border-radius: 25px;
         text-align: center;
         padding: 150px 20px;
         background-color: #ffffff15;
         backdrop-filter: blur(8px);
         position: relative;

         h2 {
            font-size: 40px;
            font-weight: 800;
            text-transform: uppercase;
            margin-bottom: 40px;
         }

         p {
            font-size: 16px;
            font-weight: 700;
         }

         button {
            background-color: white;
            border-radius: 50%;
            position: absolute;
            bottom: 5%;
            right: 7%;

            i {
               color: rgb(112, 50, 219);
            }

            &:hover i {
               transition: all 0.3s ease;
               color: rgb(119, 119, 119);
            }
         }
      }
   }

}
</style>