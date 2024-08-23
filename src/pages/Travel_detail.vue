
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
          <div
            class="badge_box mt-2"
            v-for="item in slideData.detail.badge"
            :key="item"
          >
            <p>{{ item.name }}</p>
          </div>
        </div>


        <!-- text -->
        <div class="_text">
          <p
            v-for="item in slideData.detail.paragraph"
            :key="item"
            v-html="item.text"
          ></p>
        </div>


        <!-- add flight -->
        <div class="add_flight">
          <div class="_title d-flex align-items-center">
            <i class="fa-solid fa-plane"></i>
            <h4>{{ slideData.detail.flight.title }}</h4>
          </div>
          <p 
            v-html="slideData.detail.flight.text"
          ></p>
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





  }




}




</style>
