
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
        <img src="https://utravelprod.blob.core.windows.net/clubs/club/new-club/1719396141459.webp?sv=2023-08-03&se=2074-06-14T10%3A02%3A22Z&sr=b&sp=rade&sig=X7GZ5a6UjrzaQ49a3ZmEiqozX2dLaYHewfYP2Fom%2Fac%3D&rsct=image%2Fjpg" :alt="slideData.title">
        <h1>{{ slideData.title }}</h1>
      </div>


      <!-- info -->
      <div class="_info">
        <h2>cfsgegwsgdfhg</h2>

        <!-- badge -->
        <div class="_badge d-flex">
          <div class="badge_box">
            <i></i>
            <p>ssddfdsfe</p>
          </div>

          <div class="badge_box">
            <i></i>
            <p>ssddfdsfe</p>
          </div>

          <div class="badge_box">
            <i></i>
            <p>ssddfdsfe</p>
          </div>
        </div>



        <!-- text -->
        <div class="_text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium at inventore placeat odit neque soluta aliquid delectus voluptatem, dolores sint, tempora labore, optio similique.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium at inventore placeat odit neque soluta aliquid delectus voluptatem, dolores sint, tempora labore, optio similique.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium at inventore placeat odit neque soluta aliquid delectus voluptatem, dolores sint, tempora labore, optio similique.
          </p>
        </div>


        <!-- add flight -->
        <div class="add_flight">
          <h4>asffgfd</h4>

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
      font-size: 60px;
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
      margin-bottom: 20px;
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
      padding: 15px;
      border-radius: 20px;

      h4 {
        border-bottom: 1px solid rgba(107, 44, 255, 0.446);
        padding-bottom: 15px;
      }
    }

  }




}




</style>
