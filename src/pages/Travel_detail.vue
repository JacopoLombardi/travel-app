
<script>
export default {
  data() {
    return {
      slideData: null
    };
  },
  mounted() {
    // ricevo i dati della slide selezzionata tramite query
    const slideDataString = this.$route.query.slideData;
    if (slideDataString) {
      try {
        this.slideData = JSON.parse(slideDataString);
        console.log(this.slideData);
      } catch (error) {
        console.error('Failed to parse slideData:', error);
      }
    }
  }
};
</script>


<template>
  <div class="travel_detail">

    <div v-if="slideData">

      <!-- jumbotron -->
      <div class="_jumbotron">
        <img :src="slideData.detail.img" :alt="slideData.title">
        <h1>{{ slideData.title }}</h1>
      </div>


      <!-- info -->
      <div class="_info">
        <h2>{{ slideData.detail.title }}</h2>


        <!-- badge -->
        <div class="_badge d-flex flex-wrap">
          <div class="badge_box mt-2" v-for="item in slideData.detail.badge" :key="item">
            <p>{{ item.name }}</p>
          </div>
        </div>


        <!-- text -->
        <div class="_text">
          <p v-for="item in slideData.detail.paragraph" :key="item" v-html="item.text"></p>
        </div>


        <!-- add flight -->
        <div class="add_flight">
          <div class="_title d-flex align-items-center">
            <i class="fa-solid fa-plane"></i>
            <h4>{{ slideData.detail.flight.title }}</h4>
          </div>
          <p v-html="slideData.detail.flight.text"></p>
        </div>


        <!-- accordion -->
        <div class="_accordions">


          <div class="accordion" id="accordionExample">

            <!-- included -->
            <div class="accordion-item mb-3">
              <h2 class="accordion-header m-0">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                  aria-expanded="true" aria-controls="collapseOne">
                  <i class="fa-regular fa-circle-check"></i>
                  Cosa è incluso
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                  <ul>
                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-regular fa-moon"></i>
                      </div>
                      <p>7 notti in hotel</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-mug-saucer"></i>
                      </div>
                      <p>Colazione</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <p>Esperienza inclusa: full day Phuket tour</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-regular fa-circle-user"></i>
                      </div>
                      <p>Coach in lingua italiana</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-bus-simple"></i>
                      </div>
                      <p>Trasferimenti da/per aeroporto (se acquisti il volo con noi)</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-gift"></i>
                      </div>
                      <p>Braccialetto da Dao Ethical Gifts</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-headset"></i>
                      </div>
                      <p>Assistenza Utravel</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-tablet-screen-button"></i>
                      </div>
                      <p>App dedicata</p>
                    </li>

                    <li class="_box d-flex align-items-center">
                      <div class="icon_box">
                        <i class="fa-solid fa-users"></i>
                      </div>
                      <p>Assicurazione base: copertura spese mediche fino a 5.000€ e fino a 1.000€ per il bagaglio oltre ad un massimo di 310€ per acquisti di prima necessità</p>
                    </li>
                  </ul>


                  <h3>La quota viaggio non comprende</h3>
                  <ul>
                    <li class="d-flex">
                      <div class="icon_box">
                        <i class="fa-solid fa-xmark text-danger"></i>
                      </div>
                      <p>Volo a/r (puoi aggiungerlo in fase di prenotazione)</p>
                    </li>

                    <li class="d-flex">
                      <div class="icon_box">
                        <i class="fa-solid fa-xmark text-danger"></i>
                      </div>
                      <p>Pranzi e cene</p>
                    </li>

                    <li class="d-flex">
                      <div class="icon_box">
                        <i class="fa-solid fa-xmark text-danger"></i>
                      </div>
                      <p>Tassa di soggiorno</p>
                    </li>

                    <li class="d-flex">
                      <div class="icon_box">
                        <i class="fa-solid fa-xmark text-danger"></i>
                      </div>
                      <p>Tutto quello che non è indicato in "Cosa è incluso"</p>
                    </li>
                  </ul>

                </div>
              </div>
            </div>


            <!-- Things to know -->
            <div class="accordion-item">
              <h2 class="accordion-header m-0">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Cose da sapere
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <ul>
                    <li>ssasd</li>
                    <li>ssasd</li>
                    <li>ssasd</li>
                    <li>ssasd</li>
                    <li>ssasd</li>
                  </ul>
                </div>
              </div>
            </div>


          </div>


        </div>

        
      </div>


    </div>

  </div>
</template>



<style lang="scss" scoped>

.travel_detail {





  ._jumbotron{
    position: relative;

    img {
      object-fit: cover;
      height: 400px;
      width: 100vW;
      filter: brightness(80%);
    }

    h1 {
      color: white;
      text-align: center;
      width: 100%;
      font-size: clamp(2rem, 12vw, 4.5rem);
      font-weight: 700;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }







  ._info {
    padding: 40px 1rem;
    background-color: rgba(247, 247, 247, 0.935);

    h2 {
      color: orangered;
      font-weight: 800;
      font-size: 22px;
      margin-bottom: 20px;
      text-transform: uppercase;
    }

    ._badge {
      margin-bottom: 20px;
    
      .badge_box {
        width: fit-content;
        background-color: rgba(230, 221, 255, 0.782);
        color: rgb(107, 44, 255);
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 13px;
        margin-right: 10px;
      }
    }

    ._text {
      font-size: 14px;
      line-height: 110%;

      p {
        margin-bottom: 15px;
      }
    }







    .add_flight {
      background-color: rgba(228, 218, 255, 0.798);
      color: rgb(107, 44, 255);
      padding: 20px;
      margin-top: 30px;
      border-radius: 20px;

      ._title {
        border-bottom: 1px solid rgba(107, 44, 255, 0.446);
        padding-bottom: 10px;
        margin-bottom: 10px;

        i {
          margin-right: 10px;
          font-size: 20px;
        }

        h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
        }
      }

      p {
        font-size: 13px;
      }
    }






    ._accordions {
      margin-top: 30px;

      .accordion {

        .accordion-item {
          border-radius: 20px;
          border: 1px solid rgb(224, 224, 224);
          padding: 10px 10px;

          .accordion-button {
            position: relative;
            font-size: 16px;
            border-radius: 20px;
            font-weight: 700;

            &:not(.collapsed) {
              background-color: transparent;
              box-shadow: none;
            }

            &:focus {
              box-shadow: none;
            }

            i {
              color: rgb(33, 219, 33);
              margin-right: 10px;
              font-size: 20px;
            }
          }

          .accordion-body {
            padding: 10px 15px 0 15px;

            ul {
              li {
                margin-bottom: 15px;

                .icon_box {
                  display: flex;
                  width: 30px;
                  margin-right: 10px;

                  i {
                    text-align: center;
                    color: rgb(58, 58, 58);
                    width: 100%;
                    font-size: 1.2rem;
                  }
                }
               
                p {
                  font-size: 13px;
                  line-height: 140%;
                }
                
              }
            }

            h3 {
              font-size: 17px;
              font-weight: 700;
              margin-top: 30px;
              margin-bottom: 15px;
            }

          }
        }
      }
    }










  }




}




</style>
