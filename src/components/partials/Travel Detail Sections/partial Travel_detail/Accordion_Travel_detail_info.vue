
<script>

export default {
  props: {
    detail: Object
  },
  data(){
    return{

    };
  },

  methods:{

  },
};
</script>




<template>
  <!-- Accordion -->
  <div class="accordion" id="accordionExample">

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
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>
</template>






<style lang="scss" scoped>

/* Accordion */
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
              line-height: 120%;
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
        margin: 0;
        font-weight: 700;
      }
    }
  }

</style>