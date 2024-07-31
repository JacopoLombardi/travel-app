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

   <div class="_travel_loved container">
      <div class="row">

         <div class="_title col-md">
            <h2>i viaggi piu amati</h2>
            <p>Qui trovi i viaggi preferiti della nostra Community</p>
         </div>


         <div class="_card col">
            <h2>foto</h2>
            <p>Qui trovi i viaggi preferiti della nostra Community</p>
         </div>

         <div class="_card col">
            <h2>foto</h2>
            <p>Qui trovi i viaggi preferiti della nostra Community</p>
         </div>

         <div class="_card col">
            <h2>foto</h2>
            <p>Qui trovi i viaggi preferiti della nostra Community</p>
         </div>

      </div>
   </div>

</template>





<style lang="scss" scoped>

._travel_loved {
   margin-top: 100px;

   .row {
      flex-shrink: none !important;
   }

   ._title {
      margin: 0 20px;
      padding-bottom: 25px;
   }

   ._card {
      margin: 0 20px;
      border: 1px solid rgb(154, 154, 154);
      border-radius: 20px;
   }

   h2 {
      color: rgb(92, 0, 221);
      font-weight: 800;
      text-transform: uppercase;
      margin-bottom: 5px;
   }

   p {
      font-size: 14px;
      color: rgb(149, 149, 149);
   }
}

</style>