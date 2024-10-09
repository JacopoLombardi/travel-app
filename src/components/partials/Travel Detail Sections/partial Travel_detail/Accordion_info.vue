
<script>

export default {
  props: {
    detail: Object
  },
  data(){
    return{
    };
  },
};
</script>




<template>
  <!-- Accordion Mobile -->
  <div class="accordion d-lg-none" id="accordionExample">

    <!-- Included -->
    <div class="accordion-item mb-3">
      <h2 class="accordion-header m-0">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <i class="fa-regular fa-circle-check"></i>
          Cosa è incluso
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <ul>
            <li
              v-for="(item, index) in detail.included"
              :key="index"
              class="_box d-flex align-items-center"
            >
              <div class="icon_box">
                <i :class="item.icon"></i>
              </div>
              <p>{{ item.text }}</p>
            </li>
          </ul>


          <!-- Not Included -->
          <h3>La quota viaggio non comprende</h3>
          <ul>
            <li
              v-for="(item, index) in detail.notIncluded"
              :key="index"
              class="d-flex align-items-center"
            >
              <div class="icon_box">
                <i class="fa-solid fa-xmark text-danger"></i>
              </div>
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>

      </div>

    </div>


    <!-- Things to Know -->
    <div class="accordion-item things_to_know">
      <h2 class="accordion-header m-0">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <i class="fa-regular fa-circle-question"></i>
          Cose da sapere
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <ul>
            <li
              v-for="(item, index) in detail.thingsToKnow"
              :key="index"
            >
              <h4>{{ item.title }}</h4>
              <p v-html="item.text"></p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>



  <!-- Desktop -->
  <div class="box_cards d-none d-lg-flex">

    <!-- Included -->
    <div class="accordion-body me-5">

      <div class="_title d-flex align-items-center mb-4">
        <i class="fa-regular fa-circle-check me-3"></i>
        <p>Cosa è incluso</p>
      </div>

      <ul>
        <li
          v-for="(item, index) in detail.included"
          :key="index"
          class="_box d-flex align-items-center"
        >
          <div class="icon_box">
            <i :class="item.icon"></i>
          </div>
          <p>{{ item.text }}</p>
        </li>
      </ul>


      <!-- Not Included -->
      <h3>La quota viaggio non comprende</h3>
      <ul>
        <li
          v-for="(item, index) in detail.notIncluded"
          :key="index"
          class="d-flex align-items-center"
        >
          <div class="icon_box">
            <i class="fa-solid fa-xmark text-danger"></i>
          </div>
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>


    <!-- Things to Know -->
    <div class="things_to_know">
      <div class="accordion-body">

        <div class="_title d-flex align-items-center mb-4">
          <i class="fa-regular fa-circle-question me-3"></i>
          <p>Cose da sapere</p>
        </div>

        <ul>
          <li
            v-for="(item, index) in detail.thingsToKnow"
            :key="index"
          >
            <h4>{{ item.title }}</h4>
            <p>{{ item.text }}</p>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>






<style lang="scss" scoped>

h2,
h3,
h4 {
  font-family: Poppins;
}



// mobile
.accordion {
  --bs-accordion-active-color: black;
  margin-top: 30px;

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
        margin-right: 10px;
        font-size: 20px;
        color: rgb(33, 210, 33);
      }
    }

    .accordion-body {
      padding: 5px 15px 0 15px;

      ul {
        li {
          margin-bottom: 15px;

          .icon_box {
            display: flex;
            width: 30px;
            margin-right: 5px;

            i {
              text-align: center;
              color: rgb(58, 58, 58);
              width: 100%;
              font-size: 1.2rem;
            }
          }

          p {
            font-size: 13px;
            line-height: 17px;
            width: 80%;
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

  .things_to_know {
    .accordion-button {
      i {
        color: red;
      }
    }

    h4 {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 3px;
    }
  }
}






// desktop
.box_cards {
  margin-top: 50px;

  .accordion-body {
    background-color: white;
    border-radius: 20px;
    border: 1px solid rgb(203, 203, 203);
    padding: 30px;
    height: 100%;

    ._title {
      i {
        font-size: 27px;
        color: rgb(33, 210, 33);
      }

      p {
        font-size: 25px;
        font-weight: 700;
      }
    }

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
              font-size: 1.4rem;
            }
          }

          p {
            font-size: 15px;
            line-height: 20px;
            width: 80%;
          }
        }
      }

      h3 {
        font-size: 20px;
        font-weight: 700;
        margin-top: 30px;
        margin-bottom: 15px;
      }
    }


    .things_to_know {
      .accordion-body {
        ._title {
          i {
            color: red;
          }
        }

        h4 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 3px;
        }
      }
    }
}
</style>
