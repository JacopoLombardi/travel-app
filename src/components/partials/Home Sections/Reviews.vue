
<script>
export default {
  data(){
    return{

    };
  },

  methods:{

  },
};
</script>




<template>
  
  <div class="_reviews">

    <h4>cosa dice chi è partito con noi?</h4>

    <div class="_rate d-flex justify-content-between">
      <div class="col-lg-1 d-none d-lg-block">
      </div>

      <div class="col-lg-1">
        <p>4.6</p>
      </div>

      <div class="col-lg-1">
        <img src="https://images.prismic.io/blind/65c4b6eb9be9a5b998b58a7c_Feefo_logo_white%26yellow17.55.54.png?auto=format%2Ccompress&fit=max&w=256" alt="">
      </div>
    </div>

    <div class="_info col">
      <div class="_stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>

      <div class="_text">
        <p>Oltre 25 mila persone sono già partite con noi, scopri come la pensano.</p>
      </div>

      <div class="all_reviews">
        <a 
          href="https://www.feefo.com/it-IT/reviews/utravel?displayFeedbackType=PRODUCT&timeFrame=YEAR" 
          class="btn"
        >
          Leggi tutte le recensioni 
          <i class="fa-solid fa-circle-chevron-right ms-2"></i>
        </a>
      </div>
    </div>

  </div>
  
</template>




<style lang="scss" scoped>

  ._reviews {
    color: white;
    padding: 50px 20px;
    background-color: rgb(98, 63, 255);

    h4 {
      text-transform: uppercase;
      font-size: 23px;
      margin: 0;
    }

    ._rate {
      p {
        font-size: 80px;
        font-weight: 800;
        margin-bottom: 10px;
      }

      img {
        margin-top: 35px;
        max-width: 130px;
        max-height: 30px;
      }
    }

    ._info {
      ._stars {
        i {
          font-size: 20px;
          margin: 1.5px;
        }
      }

      ._text {
        font-size: 13px;
        margin: 20px 0;
      }

      .btn {
        background-color: white;
        border-radius: 10px;
        font-size: 14px;
        padding: 8px 17px;
        color: orangered;

        &:hover {
          background-color: rgb(228, 228, 228);
        }
      }
    }
  }





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  ._reviews {
    padding: 80px 5rem;
    
    h4 {
      font-size: 30px;
      text-align: center;
    }

    ._rate {
      justify-content: center !important;

      p {
        font-size: 90px;
      }

      img {
        margin-left: 30%;
        width: 100%;

        &:nth-child(2) {
          text-align: center;
        }
      }
    }

    ._info {
      text-align: center;

      ._stars {
        i {
          font-size: 26px;
          margin: 1.5px;
        }
      }

      ._text {
        font-size: 16px;
      }

      .btn {
        font-size: 16px;
      }
    }
  }

}


</style>