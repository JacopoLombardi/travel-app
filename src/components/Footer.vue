
<script>
export default {
  data() {
    return {
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
  }
};
</script>





<template>
  <div class="footer_up">
    <!-- newsletter -->
    <div class="_newsletter col">
      <h4>iscriviti alla newsletter!</h4>
      <div class="position-relative">
        <input class="form-control" type="text" placeholder="La tua mail">
        <button class="btn">Invia</button>
      </div>
      <p>
        Cliccando su “Invia” esprimi il tuo consenso a ricevere la newsletter di Utravel.
        <span>Leggi l'informativa privacy Utravel</span>
      </p>
    </div>

    <!-- menu a tendina -->
    <div class="accordion accordion-flush" id="accordionFlushExample">
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
              <li v-for="listItem in item.bodyItems" :key="listItem">
                {{ listItem }}
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>

  </div>
</template>





<style lang="scss" scoped>
.footer_up {
  height: 700px;
  background-color: black;
  color: white !important;
  padding: 50px 20px;

  ._newsletter {
    h4 {
      text-transform: uppercase;
      font-weight: 800;
      font-size: 15px;
    }

    input {
      padding: 13px 20px;
      border-radius: 10px;
      border: none;
      margin: 20px 0;
    }

    button {
      color: white;
      background-color: orangered;
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
    }

    p {
      font-size: 13px;

      span {
        text-decoration: underline;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .accordion {
    margin-top: 20px;
    --bs-accordion-bg: black;
    --bs-accordion-btn-focus-border-color: transparent;
    --bs-accordion-btn-icon: none;
    --bs-accordion-btn-active-icon: none;

    .accordion-item {
      border-bottom: 1px solid white;

      .accordion-button {
        --bs-accordion-btn-color: white !important;
        color: white !important;
        padding: 20px 0 10px 0;
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

        /* Chevron personalizzata */
        .chevron-icon {
          position: absolute;
          right: 1rem; /* Sposta la chevron a destra */
          color: white; /* Colore della chevron */
          transition: transform 0.35s ease; /* Anima la rotazione */
        }

        /* Ruota la chevron quando l'accordion è aperto */
        &[aria-expanded="true"] .chevron-icon {
          transform: rotate(180deg);
        }
      }

      .accordion-body {
        padding: 0;

        ul {
          padding-bottom: 15px;
        }

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
</style>
