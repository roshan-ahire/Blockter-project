<template>
  <div>
    <div class="text-white">
      <div class="pt-3">
        <b-media tag="li" class="my-5 main-media">
          <b-img
            slot="aside"
            :src="img1"
            width="180"
            height="100"
            alt="placeholder"
          ></b-img>
          <div class="text-left pt-5  title-1-media">
            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr O’Shea Jackson
            Jr O’Shea Jackson Jr
          </div>
          <div class="text-left small py-3 year-text">
            1 year ago
          </div>
          <div class="text-left small pb-5 text2">
            Joss Whedon has a little bit of a history with superhero movies, and
            for creating layered female characters. After his documented
            frustrations with Wonder Woman, he’s getting
          </div>
        </b-media>
      </div>
    </div>
    <div class="my-5">
      <b-row>
        <b-col class="pr-0">
          <div class="text-left text-white font-weight-bold ">
            More news on Blockbuster
          </div>
          <div class="mt-5 title-1-content text-left">
            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr O’Shea Jackson
            Jr O’Shea Jackson Jr span
          </div>
          <div class="small text-left text-white year-text">1 year ago</div>
        </b-col>
        <b-col>
          <div class="text-right small textc pr-3">
            SEE ALL MOVIES NEWS
            <span>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="small text-white"
            /></span>
          </div>
          <div class="mt-5 title-1-content text-left">
            Magnolia Nabs ‘Lucky’ Starring Harry Dean Stanton
          </div>
          <div class="small text-left text-white year-text">1 year ago</div>
        </b-col>
      </b-row>
      <!-- ************ -->
      <b-row>
        <b-col class="pr-0">
          <div class="mt-4 title-1-content text-left">
            ‘Going in Style’ Tops ‘Smurfs: The Lost Village’ at Thursday Box
            Office
          </div>
          <div class="small text-left text-white year-text">1 year ago</div>
        </b-col>
        <b-col>
          <div class="mt-4 title-1-content text-left">
            India’s National Film Awards: ‘Kaasav’ Wins Best Picture
          </div>
          <div class="small text-left text-white year-text">1 year ago</div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/thor3.jpg";
export default {
  data() {
    return {
      img1: image1
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_mixin.scss";

.main-media {
  img {
    margin-top: 45%;
    border-radius: 10px;
  }
  .title-1-media {
    @include title-media(14px);
  }
  .year-text {
    color: $para-text;
  }
  .text2 {
    line-height: $line-space;
    color: $para-text;
  }
}

// ****************** tow columns of media
.textc {
  color: $para-text;
  font-weight: bold;
}

.title-1-content {
  @include title-media(12px);
}

.year-text {
  color: $para-text !important;
}
</style>
