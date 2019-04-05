<template>
  <div>
    <div class="iframe-background">
      <div class="pt-5">
        <b-container>
          <b-row class="mx-3">
            <b-col md="8" class="p-0">
              <div class="font-weight-bold text-left pt-5">
                <div class="text-white">IN THEATER</div>
              </div>
              <!--  -->
              <div>
                <div class="py-5">
                  <div>
                    <iframe
                      name="ironman"
                      width="100%"
                      height="428"
                      src="https://www.youtube.com/embed/8hYlB38asDY"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </b-col>

            <b-col md="4" class="p-0">
              <div class="text-right pt-5">
                <div class="text-white pr-5 small view1">
                  VIEW ALL
                  <span>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      class="small text-white"
                    />
                  </span>
                </div>
              </div>
              <!--  -->
              <div class="object-color">
                <swiper :options="swiperOption">
                  <swiper-slide
                    v-for="link in navlinks"
                    v-bind:key="link.index"
                  >
                    <div>
                      <b-media tag="li" class="my-3 text-white pl-3 effect">
                        <b-img
                          slot="aside"
                          height="75"
                          :src="link.img1"
                          alt="placeholder"
                        ></b-img>
                        <p class="mb-0 text-left pt-3 small font-weight-bold">
                          <a
                            :href="link.video"
                            target="ironman"
                            class="text-white decorate"
                          >
                            {{ link.name }}</a
                          >
                        </p>
                      </b-media>
                    </div>
                  </swiper-slide>
                  <div class="swiper-pagination icon" slot="pagination"></div>
                </swiper>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/ironman-trailer.jpeg";
import image2 from "../assets/hulks.jpg";
import image3 from "../assets/ironman2.jpg";
import image4 from "../assets/thor2.jpg";
export default {
  data() {
    return {
      navlinks: [
        {
          img1: image1,
          name: "Iron Man-Trailer",
          video: "https://www.youtube.com/embed/8hYlB38asDY"
        },
        {
          img1: image2,
          name: "[Behine The Scenes] incredible Hulk Featurett",
          video: "https://www.youtube.com/embed/cF_a5TOKLRU"
        },
        {
          img1: image3,
          name: "Iron Man 2 Official Trailer #1(2010)-Marvel Movie HD ",
          video: "https://www.youtube.com/embed/BoohRoVA9WQ"
        },
        {
          img1: image4,
          name: "Thor-Trailer 2 (Official)",
          video: "https://www.youtube.com/embed/npvJ9FTgZbM"
        },
        {
          img1: image1,
          name: "Iron Man-Trailer",
          video: "https://www.youtube.com/embed/8hYlB38asDY"
        },
        {
          img1: image2,
          name: "[Behine The Scenes] The incredible Hulk Featurett",
          video: "https://www.youtube.com/embed/cF_a5TOKLRU"
        }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 0,
        direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.iframe-background {
  background: #06121e !important;
  .view1 {
    color: #8b96a3 !important;
  }
  .object-color {
    background: #051227;
    margin-top: 53px;
    height: 428px;
    overflow: hidden;
  }
  .swiper-slide {
    height: 100% !important;
  }
  .effect:hover {
    background-color: #1c395f !important;
  }
  .decorate {
    text-decoration: none;
  }
  .icon {
    position: relative !important;
    bottom: 450px !important;
    left: 30px;
  }
}
</style>
