<template>
  <div>
    <div class="text-white text-left tweet-content">
      <div class= "title-text-tweet font-weight-bold ">
      TWEET TO US
      </div>
      <div class="float-right circle"></div>
    </div>
    <div>
      <figure>
        <div>
          <!-- <img src="../assets/fanpage.png" class="" alt=""> -->
          <b-img :src="img1" class="tweet-img" fluid alt="Fluid image"></b-img>
        </div>
      </figure>
      <!-- <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" name="iframe_a" allowfullscreen></b-embed> -->
    </div>
  </div>
</template>
<script>
import images1 from "../assets/twiteer1.jpg";
export default {
  data() {
    return {
      img1: images1
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.tweet-content {
  margin-top: 50px;
}
.title-text-tweet {
  text-transform: uppercase;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #4d555c;
  font-size: 16px;
  .circle {
    height: 10px;
    width: 10px;
    background-color: $circle-color;
    border-radius: 50%;
  }
}
.tweet-img {
  border-radius: 5px;
}
</style>
