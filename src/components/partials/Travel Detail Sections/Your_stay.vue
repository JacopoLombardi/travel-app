
<script>

export default {
  props: {
    data: Object
  },
  data(){
    return{

    };
  },

  computed: {
    // funzioni che abbreviano le chiamate dei dati nel template
    stay() {
      return this.data?.detail.stay;
    },
    stay_special() {
      return this.data?.detail.stay_special;
    }
  },
};
</script>




<template>
  <div
    class="your_stay"
  >

    <!-- stay -->
    <div
      class="_stay"
      v-if="stay"
    >
      <div class="_text">
        <div class="_badge">
          <p>Stay</p>
        </div>
        <h2>dove soggiornerai</h2>
        <p
          class="_intro"
          v-html="stay.intro"
        ></p>
        <p class="_paragraph">{{ stay.paragraph }}</p>
      </div>

      <img :src="stay.img" alt="Hotel">
    </div>


    <!-- stay special -->
    <div
      class="Stay_special"
      v-if="stay_special"
    >

      <div class="_text">
        <div class="_badge">
          <p>Stay</p>
        </div>

        <h2>{{ stay_special.title }}</h2>
        <p
          class="_intro"
          v-html="stay_special.intro"
        ></p>
        <p class="_paragraph">{{ stay_special.paragraph }}</p>
      </div>
      
      <div class="img_menu">
        <div class="img_banner">
          <img :src="stay_special.img" alt="Hotel">
          <div class="_banner">
            <svg
              class="h-8 text-white"
              viewBox="0 0 200 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="stay_special.banner"
            ></svg>
            <p>Questo è un NaoClub, una casa dedicata solo ai viaggiatori Utravel</p>
            <a href="">Scopri di più</a>
          </div>
        </div>

        <!-- badge sevices -->
        <div class="_services">
          <h3>Servizi della struttura:</h3>
          <ul class="d-flex flex-wrap">
            <li
              v-for="item in stay_special.badge"
              :key="item" 
              class="badge_service"
              >
              {{ item }}
            </li>
          </ul>
        </div>

      </div>
    </div>

  </div>
</template>




<style lang="scss" scoped>

.your_stay {
  margin: 50px 1rem;

  ._badge {
    background-color: rgba(255, 224, 206, 0.782);
    color: rgb(255, 89, 0);
    font-size: 15px;
    font-weight: 500;
    padding: 6px 15px;
    border-radius: 20px;
    width: fit-content;
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
    font-size: 14px;
    line-height: 19px;
  }

  img {
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
    height: 450px;
  }



  // special
  .Stay_special {
    ._badge {
      background-color: rgba(215, 249, 255, 0.782);
      color: rgb(0, 217, 255);
    }

    h2 {
      color: rgb(2, 204, 240);
    }

    .img_menu {
      img {
        border-end-start-radius: 0;
        border-end-end-radius: 0;
      }

      ._banner {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(26, 159, 185);
        color: white;
        padding: 30px 20px;
        border-top: 1px solid rgb(46, 217, 223);
        border-radius: 0 0 20px 20px;

        svg {
          width: 50%;
        }

        p {
          font-size: 13px;
          margin: 15px 0;
        }

        a {
          color: white;
          text-decoration: underline;
        }
      }

      h3 {
        font-size: 17px;
        font-weight: 700;
        margin: 20px 0;
      }

      .badge_service {
        background-color: rgba(234, 222, 255, 0.782);
        color: rgb(153, 43, 255);
        font-size: 15px;
        font-weight: 500;
        padding: 6px 15px;
        border-radius: 20px;
        margin: 0 10px 10px 0;
        width: fit-content;
      }
    }
  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 768px */
@media (min-width: 768px) {
  .your_stay {
    margin: 50px 5rem;

    ._stay {
      display: flex;
      align-items: center;
      justify-content: space-between;

      ._text {
        width: 50%;

        ._badge {
          font-size: 16px;
          padding: 6px 15px;
        }

        ._intro {
          font-size: 20px;
        }

        ._paragraph {
          font-size: 18px;
          line-height: 21px;
        }
      }

      img {
        width: 50%;
        height: 350px;
        margin-left: 3rem;
      }
    }



    // special
    .Stay_special {
      ._paragraph {
        font-size: 18px;
        line-height: 21px;
      }

      ._intro {
        font-size: 20px;
      }

      ._badge {
        background-color: rgba(215, 249, 255, 0.782);
        color: rgb(0, 217, 255);
      }
    }
  }
}





/* Media query per dispositivi con larghezza maggiore o uguale a 992px */
@media (min-width: 992px) {
  .your_stay {
    margin: 80px 5rem;

    ._stay {
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
        width: 50%;
        height: 450px;
      }
    }



    // special
    .Stay_special {
      ._paragraph {
        font-size: 19px;
        line-height: 26px;
      }

      ._intro {
        font-size: 22px;
      }

      .img_menu {
        .img_banner {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;

          img {
            width: 68%;
            height: 350px;
            border-radius: 20px;
          }

          ._banner {
            width: 30%;
            text-align: center;
            justify-content: center;
            border-radius: 20px;

            svg {
              width: 70%;
              max-width: 300px;
            }

            p {
              font-size: 15px;
              margin: 20px 0;
            }
          }
        }

        ._services {
          display: flex;
          align-items: center;
          margin-top: 40px;

          h3 {
            font-size: 23px;
            margin-right: 20px;
          }

          .badge_service {
            padding: 8px 18px;
            margin-bottom: 0;
            font-size: 18px;
          }
        }
      }
    }
  }
}

</style>
