
<script>
export default {
  data(){
    return{
      Items: [
        {
          id: 'flush-collapseOne',
          title: 'contattaci',
          bodyItems: [
            'Scrivici su whatsapp',
            'Prenota una chiamata',
            'Visita l\'Help Center',
            'Leggi il Blog'
          ]
        },
        {
          id: 'flush-collapseTwo',
          title: 'about us',
          bodyItems: [
            'Il mondo Utravel',
            'Come funziona un Club?',
            'Viaggi per Universitari',
            'La nostra Community',
            'I nostri Partner',
            'Lavora con noi'
          ]
        },
        {
          id: 'flush-collapseThree',
          title: 'informazioni',
          bodyItems: [
            'Area Privacy',
            'Privacy Policy',
            'Cookie policy',
            'Gestisci preferenze Cookie',
            'Whistleblowing',
            'Termini e condizioni',
            'Assicurazioni'
          ]
        }
      ]
    };
  },
};
</script>





<template>
  
  <!-- menu a tendina mobile -->
  <div
      class="accordion accordion-flush d-md-none"
      id="accordionFlushExample"
    >
      <div v-for="item in Items" :key="item.id" class="accordion-item">

        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            :data-bs-toggle="'collapse'"
            :data-bs-target="'#' + item.id"
            aria-expanded="false"
            :aria-controls="item.id"
          >
            {{ item.title }}
            <i class="chevron-icon fas fa-chevron-down"></i>
          </button>
        </h2>

        <div
          :id="item.id"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <ul class="_list text-white">
              <li
                v-for="listItem in item.bodyItems"
                :key="listItem"
              >
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>


    <!-- menu desktop -->
    <div class="accordion-body-desk d-none d-md-flex">
      <div
        class="_list"
        v-for="item in Items"
        :key="item.id"
      >
        <h4 class="mb-3">{{ item.title }}</h4>
        <ul
          v-for="listItem in item.bodyItems"
          :key="listItem"
        >
          <li>{{ listItem }}</li>
        </ul>
      </div>
    </div>
  
</template>




<style lang="scss" scoped>
h4 {
   text-transform: uppercase;
   font-weight: 800;
   font-size: 17px;
   margin: 0;
}


.accordion {
   margin-top: 20px;
   --bs-accordion-bg: rgb(33, 33, 33);
   --bs-accordion-btn-focus-border-color: transparent;
   --bs-accordion-btn-icon: none;
   --bs-accordion-btn-active-icon: none;

   .accordion-item {
      border-bottom: 1px solid white;

      .accordion-button {
         --bs-accordion-btn-color: white !important;
         color: white !important;
         padding: 20px 0 10px;
         position: relative;
         font-size: 22px;
         font-weight: 800;

         &:not(.collapsed) {
            background-color: transparent;
            box-shadow: none;
         }

         &:focus {
            box-shadow: none;
         }

         .chevron-icon {
            position: absolute;
            font-size: 15px;
            right: 1rem;
            color: white;
            transition: transform 0.35s ease;
         }

         &[aria-expanded="true"] .chevron-icon {
            transform: rotate(180deg);
         }
      }

      .accordion-body {
         padding: 0;

         ul {
            padding-bottom: 15px;

            li {
               font-size: 13px;
               line-height: 200%;

               &:hover {
                  cursor: pointer;
                  text-decoration: underline;
               }
            }
         }
      }
   }
}



// Media query per dispositivi con larghezza maggiore o uguale a 768px
@media (min-width: 768px) {

   .accordion-body-desk {
      display: flex;
      justify-content: space-between;
      width: 45%;

      ._list {
         width: 33%;

         ul {
            padding-bottom: 15px;

            li {
               font-size: 15px;
               line-height: 70%;

               &:hover {
                  cursor: pointer;
                  text-decoration: underline;
               }
            }
         }
      }
   }
}
</style>