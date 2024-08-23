
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
  <div class="your_stay">

    <!-- text -->
    <div class="_text">
      <div class="_badge">
        <p>Stay</p>
      </div>

      <h2>dove soggiornerai</h2>

      <p class="_intro"> <strong>The Aim Patong</strong> - o similare</p>

      <p class="_paragraph">Quindi, in pratica, stai cercando un hotel vicino alla spiaggia, non troppo lontano dall'Aeroporto di Phuket, che abbia la colazione inclusa e, perché no, anche una piscina all'aperto? Praticamente stai parlando dell'Aim Patong Hotel! A meno di 10 minuti dalla famosa spiaggia di Patong, questo residence sarà il punto di partenza perfetto per te e per i tuoi compagni di viaggio. La simpatia dello staff ti farà capire velocemente perché la Thailandia è chiamata “Il paese dei sorrisi!
      </p>
    </div>

    <!-- img -->
    <img src="https://utravelprod.blob.core.windows.net/clubs/hotel/new-hotel/1719397035857.jpg?sv=2023-08-03&se=2074-06-14T10%3A17%3A16Z&sr=b&sp=rade&sig=whhouVVbWRGSk85GTqRbou6n5ljFqE5TVUSQ54TeW1I%3D&rsct=image%2Fjpg" alt="">

  </div>
</template>




<style lang="scss" scoped>

.your_stay {
  margin: 50px 1rem;


  ._badge {
    background-color: rgba(255, 224, 206, 0.782);
    color: rgb(255, 89, 0);
    width: fit-content;
    font-weight: 500;
    padding: 6px 15px;
    border-radius: 20px;
    font-size: 15px;
  }

  h2 {
    color: rgb(255, 89, 0);
    font-weight: 800;
    text-transform: uppercase;
    margin: 15px 0;
  }

  ._paragraph {
    margin: 15px 0 40px 0;
    color: rgb(100, 100, 100);
    font-size: 17px;
    line-height: 23px;
  }

  img {
    border-radius: 20px;
    object-fit: cover;
    height: 450px;
    width: 100%;
  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
  
.your_stay {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px 5rem;

    ._text {
      width: 50%;

      ._badge {
        padding: 6px 15px;
        font-size: 16px;
      }

      ._intro {
        font-size: 20px;
      }

      ._paragraph {
        font-size: 18px;
      }
    }

    img {
      margin-left: 3rem;
      height: 350px;
      width: 50%;
    }
  }
}




/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {

  .your_stay {
  margin: 80px 5rem;

    ._text {
      
      ._badge {
        font-size: 18px;
      }

      ._paragraph {
        font-size: 19px;
        line-height: 26px;
      }
    }

    img {
      height: 50%;
      width: 30%;
    }
  }
}

</style>