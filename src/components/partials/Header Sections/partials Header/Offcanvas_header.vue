
<script>
export default {
  data() {
    return {
      sections: [
        {
          id: "flush-headingOne",
          name: "Partenze",
          icon: "fa-regular fa-calendar-days",
          items: ["Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre", "Gennaio", "Febbraio"]
        },
        {
          id: "flush-headingTwo",
          name: "Destinazioni",
          icon: "fa-solid fa-plane-up",
          items: ["Africa", "America", "Asia", "Europa", "Tutte le Destinazioni"]
        },
        {
          id: "flush-headingThree",
          name: "Tipi di Viaggio",
          icon: "fa-solid fa-tree",
          items: ["Club", "Short Club", "Viaggi in Africa", "Viaggi in Europa", "Viaggi in Spagna", "Viaggi in Grecia", "Viaggi ai Caraibi", "Beach and Fun", "Viaggi per Universitari"]
        },
        {
          id: "flush-headingFour",
          name: "Promo",
          icon: "fa-solid fa-tags",
          items: ["Offerta Lampo", "Partenze Last Minute", "Gift Card"]
        },
        {
          id: "flush-headingFive",
          name: "Info Utili",
          icon: "fa-solid fa-circle-info",
          items: ["I Coach", "La nostra Community", "Viaggia a Rate con Scalapay", "Help center", "Benefit per Utravelers"]
        }
      ]
    };
  },
  methods: {}
};
</script>





<template>
   <div class="offcanvas offcanvas-top" id="offcanvasRight">

      <!-- header offcanvas -->
      <div class="offcanvas-header mx-3">
         <div>
            <img class="logo w-25"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpIRv09FABDhPNrwXfHg3_2CS_nqm-bBaGmw&s"
               alt="logo" />
         </div>
         <button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <!-- body offcanvas -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
         <div v-for="section in sections" :key="section.id" class="accordion-item rounded-5 mx-4 mt-2 shadow">
            <h2 class="accordion-header" :id="section.id">
            <button
              class="accordion-button collapsed rounded-5"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + section.id + 'Collapse'"
              aria-expanded="false"
              :aria-controls="section.id + 'Collapse'">
               <i :class="section.icon"></i>
               <p>{{ section.name }}</p>
            </button>
            </h2>
            <div :id="section.id + 'Collapse'" class="accordion-collapse collapse" :aria-labelledby="section.id"
               data-bs-parent="#accordionFlushExample">
               <div class="accordion-body">
                  <ul>
                     <li
                       v-for="item in section.items"
                       :key="item"
                     >
                        <span>{{ item }}</span>
                     </li>
                  </ul>
               </div>
            </div>
            
         </div>
      </div>

   </div>
 </template>
 





<style lang="scss" scoped>

.offcanvas {
   height: 100%;

   i {
      font-size: 24px;
      margin-right: 15px;
   }

   p {
      font-size: 20px;
      font-weight: 800;
   }

   li {
      color: rgb(126, 126, 126);
      margin-top: 5px;
      
      span:hover {
         cursor: pointer;
         text-decoration: underline;
      }
   }
}




// Media query per dispositivi con larghezza maggiore o uguale a 992px
@media (min-width: 992px) {
   
   .offcanvas {
      height: 80%;
      overflow: auto;
      .offcanvas-header{
         margin: 1rem 3rem 0 3rem;
      }
      .accordion {
         margin: 0 10rem;   
      }
   }
}
</style>