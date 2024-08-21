
<script>

export default {
  data(){
    return{

    };
  },
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
      <p>Cliccando su “Invia” esprimi il tuo consenso a ricevere la newsletter di Utravel. <span>Leggi l'informativa
          privacy Utravel</span></p>
    </div>


    <!-- menu a tendina -->
    <div 
      class="accordion accordion-flush" 
      id="accordionFlushExample"
    >

      <!-- contattaci -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            contattaci
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">

          </div>
        </div>
      </div>


      <!-- about us -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            about us
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">

          </div>
        </div>
      </div>


      <!-- informazioni -->
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            informazioni
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            
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
  color: white;
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
    margin-top: 40px;
    --bs-accordion-bg: black;

    .accordion-item {
      border-bottom: 1px solid white;

      .accordion-button::after {
        content: none;
      }

      h2 {

      }

      button {
        color: white;
        padding: 20px 0 10px 0;
        
      }
    }

  }







}


</style>