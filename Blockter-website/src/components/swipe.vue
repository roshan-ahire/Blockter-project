<template>
    <b-card>
        <b-card-media>
            <!-- swiper -->
            <swiper :options="swiperOption">
                <swiper-slide v-for="card in cards" v-bind:key="card.index">
                    <div>
                                <b-card overlay :img-src="card.cardimg" img-alt="Card" text-variant="white">
                                      <b-card-text class="d-flex flex-column justify-content-end">
                                                <div class="card-img-overlay  d-flex flex-column justify-content-end">
                                                    <div class="text-warning icon text-left  pl-2">
                                                        <font-awesome-icon icon="coffee" alt="placeholder" class="iconh" />
                                                    </div>
                                                    <div class="text-left">
                                                        <div class="text-white"><span class=" btn1 ml-3">{{card.btn1}}</span><span class=" btn2">{{card.btn2}} </span> <span class="btn1">{{card.btn3}} </span></div>
                                                    </div>
                                                    <div class="text-left">
                                                        <div class="font-weight-bold pb-3 pl-3 pt-2">
                                                           {{card.name}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card-text>
                                </b-card>
    
                            </div>
                </swiper-slide>
    
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </b-card-media>
    </b-card>
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
<style>
.swiper-container {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>