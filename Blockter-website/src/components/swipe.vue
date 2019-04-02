<template>
  <div>
    <div class="py-5">
      <b-container>
        <div class="card-background mx-3 ">
    <!-- swiper -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="card in cards" v-bind:key="card.index">
        <b-card overlay :img-src="card.cardimg" img-alt="Card" text-variant="white">
          <b-card-text class="d-flex flex-column justify-content-end">
            <div class="card-img-overlay d-flex flex-column justify-content-end">
              <div class="text-warning icon text-left pl-2">
                <font-awesome-icon icon="coffee" alt="placeholder" class="iconh"/>
              </div>
              <div class="text-left">
                <div class="text-white">
                  <span class="btn1 ml-3">{{card.btn1}}</span>
                  <span class="btn2">{{card.btn2}}</span>
                  <span class="btn1">{{card.btn3}}</span>
                </div>
              </div>
              <div class="text-left">
                <div class="font-weight-bold pb-3 pl-3 pt-2">{{card.name}}</div>
              </div>
            </div>
          </b-card-text>
        </b-card>
      </swiper-slide>

    
    </swiper>
      
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
    </b-container>
    </div>
  </div>
</template>

<script>
import CardImg from "@/components/card-carousel.vue";
import image1 from "../assets/ant-man.jpg";
import image2 from "../assets/Iron-Man1.jpg";
import image3 from "../assets/hulk.jpg";
import image4 from "../assets/black-panther.jpg";

export default {
  components: {
    CardImg
  },
  data() {
    return {
      cards: [
        {
          cardimg: image1,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "SIENCE FICTION",
          name: "ANT MAN"
        },
        {
          cardimg: image2,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "SIENCE FICTION",
          name: "IRON MAN"
        },
        {
          cardimg: image3,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "SIENCE FICTION",
          name: "HULK"
        },
        {
          cardimg: image3,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "SIENCE FICTION",
          name: "HULK"
        },
        {
          cardimg: image4,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "FANTASY",
          name: "BLACK PANTHER"
        }
      ],

      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<!-- Demo styles -->
<style lang="scss">

.card-background {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  padding-right: 20px;
  .card-img-overlay {
    padding: 5px;
  }
  .card {
    background-color: black;
    img {
      opacity: 0.6;
      height: 350px;
    }
    .btn1 {
      background-color: rgb(245, 3, 52);
      border-radius: 2px;
      padding: 2px;
      font-size: 11px;
    }
    .btn2 {
      background-color: orangered;
      padding: 2px;
      border-radius: 2px;
      margin: 3px;
      font-size: 11px;
    }
  }
}
.swiper-pagination-bullet-active {
    opacity: 1;
    /* font-size: 20px; */
    background: #ffc107;
    /* padding: 5px; */
    /* right: 50px; */
    /* float: right; */
}
.swiper-pagination-bullet-active {
    opacity: 1;
    /* font-size: 20px; */
    background: #ffc107 !important;
    /* padding: 5px; */
    /* right: 50px; */
    /* float: right; */
}
    .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    display: inline-block;
    /* padding: 5px; */
    border-radius: 100%;
    background: #000;
    opacity: 1;
    position: relative;
    
    /* padding-left: 10px; */
}
</style>