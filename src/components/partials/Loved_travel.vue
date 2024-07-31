
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        {
          title: 'Thailandia',
          price: 'Da 449 €',
          img: 'https://images.prismic.io/blind/Zqn_GR5LeNNTxpBk_IMG_2301-Large.webp?auto=format,compress'
        },
        {
          title: 'Sharm el-sheikh',
          price: 'Da 349 €',
          img: 'https://images.prismic.io/blind/Zkr-rCol0Zci9Rja_Egitto-Cover.webp?auto=format,compress'
        },
        {
          title: 'Marocco',
          price: 'Da 429 €',
          img: 'https://images.prismic.io/blind/653793210b105250cf53a3c0_Marocco-Merzouga.jpeg?auto=format,compress'
        },
        {
          title: 'Zanzibar',
          price: 'Da 429 €',
          img: 'https://images.prismic.io/blind/ZkYxbiol0Zci9N3K_zanzibar.webp?auto=format,compress'
        },
        {
          title: 'Kenya',
          price: 'Da 569 €',
          img: 'https://images.prismic.io/blind/ZnwhO5bWFbowe4Hb_Kenya-1.webp?auto=format,compress'
        },
        {
          title: 'Rodi',
          price: 'Da 399 €',
          img: 'https://images.prismic.io/blind/ZkyWPSol0Zci9UYe_Rodi.webp?auto=format,compress'
        },
        {
          title: 'Kos',
          price: 'Da 449 €',
          img: 'https://images.prismic.io/blind/Zk4JqSol0Zci9W-7_Grecia.webp?auto=format,compress'
        }
      ],
      slidesPerView: 3
    };
  },
  mounted() {
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateSlidesPerView);
  },
  methods: {
    updateSlidesPerView() {
      if (window.innerWidth < 768) {
        this.slidesPerView = 2;
      } else {
        this.slidesPerView = 3;
      }
    }
  }
};
</script>





<template>
   <div class="_travel_loved container mb-5">
     <div class="row">
       <div class="_title ps-4 ps-md-0 col-md">
         <h2>i viaggi più amati</h2>
         <p>Qui trovi i viaggi preferiti della nostra Community</p>
       </div>
 
       <swiper :slides-per-view="slidesPerView" :space-between="10" :loop="true" pagination>
         <swiper-slide v-for="(slide, index) in slides" :key="index">
           <div class="card" style="width: 14rem;">
             <img :src="slide.img" class="card-img-top" :alt="slide.title">
             <div class="card-body">
               <h5>{{ slide.title }}</h5>
               <p>{{ slide.price }}</p>
             </div>
           </div>
         </swiper-slide>
       </swiper>
 
     </div>
   </div>
 </template>
 



 
 <style lang="scss" scoped>
 ._travel_loved {
   margin-top: 100px;
 
   .row {
     flex-shrink: none !important;
   }
 
   ._title {
     padding-bottom: 25px;
 
     h2 {
       color: rgb(92, 0, 221);
       font-weight: 800;
       text-transform: uppercase;
       margin-bottom: 5px;
     }
 
     p {
       font-size: 14px;
       color: rgb(149, 149, 149);
     }
   }
 
   .card {
     color: white;
      margin: 0 10px;
     border: none;
 
     img {
       height: 200px;
       object-fit: cover;
       border-top-left-radius: 20px;
       border-top-right-radius: 20px;
     }
 
     .card-body {
       background-color: rgb(255, 94, 0);
       border-bottom-left-radius: 20px;
       border-bottom-right-radius: 20px;
 
       h5 {
         font-size: 15px;
         font-weight: 800;
         text-transform: uppercase;
       }
     }
   }
 }
 </style>
 