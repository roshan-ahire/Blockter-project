<template>
  <div>
    <div class="py-5">
      <b-container>
        <div class="card-background ml-3 pr-3">
          <!-- swiper -->
          <swiper :options="swiperOption">
            <swiper-slide v-for="card in cards" v-bind:key="card.index">
              <b-card class="card-body-content" text-variant="white">
                <div>
                  <b-img
                    :src="card.cardimg"
                    class="swiper-image"
                    fluid
                    alt="Responsive image"
                  >
                  </b-img>
                </div>

                <b-card-text class="d-flex flex-column justify-content-end">
                  <div
                    class="card-img-overlay d-flex flex-column justify-content-end text-left"
                  >
                    <div class="text-white ml-2">
                      <span class="btn1  p-1">{{ card.btn1 }}</span>
                      <span class="btn2 p-1">{{ card.btn2 }}</span>
                      <span class="btn1 p-1">{{ card.btn3 }}</span>
                    </div>

                    <div class="font-weight-bold">
                      <div class=" pb-2 ml-2 pt-2">
                        {{ card.name }}
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
            </swiper-slide>
          </swiper>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
      </b-container>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/ant-man.jpg";
import image2 from "../assets/Iron-Man1.jpg";
import image3 from "../assets/hulk.jpg";
import image4 from "../assets/black-panther.jpg";
import image5 from "../assets/captain-marve.jpg";

export default {
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
          cardimg: image4,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "FANTASY",
          name: "BLACK PANTHER"
        },
        {
          cardimg: image5,
          btn1: "ACAO",
          btn2: "ADVENTURE",
          btn3: "SIENCE FICTION",
          name: "CAPTAIN MARVEL"
        }
        //   {
        //   cardimg: image6,
        //   btn1: "ACAO",
        //   btn2: "ADVENTURE",
        //   btn3: "SIENCE FICTION",
        //   name: "CAPTAIN AMERICA"
        // },
        //   {
        //   cardimg: image7,
        //   btn1: "ACAO",
        //   btn2: "ADVENTURE",
        //   btn3: "SIENCE FICTION",
        //   name: "CIVIL WAR"
        // },
      ],

      swiperOption: {
        // direction:"vertical",

        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false
        // }
      }
    };
  }
};
</script>

<!-- Demo styles -->
<style lang="scss">
@import "../assets/scss/_variables.scss";
.card-background {
  background-color: rgba(0, 0, 0, 0.5);

  .card-body-content {
    background-color: transparent;
    .swiper-image {
      opacity: 0.6;
      height: 340px;
      width: 250px;
    }
    .btn1 {
      background-color: $last-text;
      border-radius: 2px;
      font-size: 10px;
      font-weight: bold;
    }
    .btn2 {
      background-color: orangered;
      border-radius: 2px;
      margin: 3px;
      font-size: 10px;
      font-weight: bold;
    }
  }
}

.swiper-pagination {
  /* position: absolute; */
  text-align: center;
  -webkit-transition: 300ms opacity;
  -o-transition: 300ms opacity;
  transition: 300ms opacity;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 10;
  float: right;
  position: relative !important;
  margin-top: 20px;
  margin-right: 40px;
}

.swiper-pagination-bullet-active {
  opacity: 1;
  /* font-size: 20px; */
  background: $circle-color !important;
}

.swiper-pagination-bullet {
  width: 11px;
  height: 11px;
  display: inline-block;
  /* padding: 5px; */
  border-radius: 100%;
  background: rgb(245, 242, 242);
  opacity: 1;
  position: relative;
  margin-right: 5px;
  /* padding-left: 10px; */
}
</style>
