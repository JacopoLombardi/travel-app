

<script>

import Footer from "../components/Footer.vue";

export default {
  components: {
 
    Footer
  },
  data() {
    return {

    };
  },
};
</script>




<template>

  <!-- jumbotron -->
  <div class="_jumbotron">
    <div class="_box">
      <img src="https://images.prismic.io/blind/Zkxm9iol0Zci9T8n_hero-1.webp?auto=format%2Ccompress&fit=max&w=1080&q=100" alt="">
      <h1>offerte lampo</h1>
    </div>
  </div>




  <!-- paragraph -->
  <div class="_paragraph">

    <p>C'è chi si organizza mesi prima, c'è chi ama il brivido dell'ultimo minuto e c'è chi è ancora indeciso sulla date delle prossime vacanze.</p>

    <p>Tu fai parte di questa terza categoria, ecco perché meriti <b> un viaggio ad un prezzo scontatissimo! </b></p>

    <p>In questa pagina trovi tutte le nostre partenze con date a prezzi <b> scontato! </b> Prenota subito se vuoi perderti l'occasione di <b> andare dall'altra parte del mondo ad un prezzo incredibile </b>.</p>

  </div>
  




  <!-- travels -->
  <div class="_travels">
    <h2>Scegli la meta che fa per te e inizia a fare la valigia!</h2>

    <div class="box_cards d-flex flex-wrap justify-content-between">


      <div class="card">
        <img src="https://images.prismic.io/blind/Zk38jCol0Zci9W1S_Messico.webp?auto=format,compress" alt="">
        <div class="box_text">
          <h5>Messico</h5>
          <span>Dal 12 Set al 19 Set</span>
          <p>Da <b> 559€ </b> 699€</p>
        </div>
      </div>
  
  
  
      <div class="card">
        <img src="https://images.prismic.io/blind/Zl3exJm069VX1ame_Cuba-Cover.webp?auto=format,compress" alt="">
        <div class="box_text">
          <h5>Cuba</h5>
          <span>Partenze di Settembre e Ottobre</span>
          <p>Da <b> 499€ </b> 699€</p>
        </div>
      </div>



      <div class="card">
        <img src="https://images.prismic.io/blind/ZqesFx5LeNNTxkbN_fuerte-Large.webp?auto=format,compress" alt="">
        <div class="box_text">
          <h5>Fuerteventura</h5>
          <span>Partenze di Settembre e Ottobre</span>
          <p>Da <b> 419€ </b> 449€</p>
        </div>
      </div>


    </div>







  </div>








  <Footer />

</template>




<style lang="scss" scoped>

._jumbotron {
  ._box {
    position: relative;

    img {
      width: 100%;
      object-fit: cover;
      filter: brightness(75%);
    }

    h1 {
      color: white;
      text-align: center;
      width: 100%;
      font-size: clamp(1.7rem, 8vw, 4rem);
      font-weight: 800;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}







._paragraph {
  padding: 50px 1rem;
  font-size: 12px;
  background-color: rgb(247, 247, 247);
  
  p {
    margin: 15px 0;
  }
}





._travels {
  padding: 50px 1rem;

  h2 {
    color: rgb(105, 13, 226);
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .box_cards {
    .card {
      width: calc(100% - 53%);
      margin-bottom: 30px;
      border: none;

      img {
        aspect-ratio: 1;
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
      }

      .box_text {
        line-height: 18px;
        margin-top: 10px;
        margin-left: 3px;

        h5 {
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }

        span {
          font-size: 12px;
          color: rgb(125, 125, 125);
        }

        p {
          font-size: 13px;
          margin-top: 8px;

          b {
            color: rgb(5, 192, 5);
            font-size: 15px;
          }
        }
        
      }
    }
  }

}




</style>