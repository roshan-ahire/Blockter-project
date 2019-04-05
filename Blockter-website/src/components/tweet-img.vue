<template>
  <div>
    <div class="text-white font-weight-bold text-left title-text tweet-content">
      TWEET TO US
      <div class="float-right circle"></div>
    </div>
    <div>
      <figure>
        <!-- <img src="../assets/fanpage.png" class="" alt=""> -->
        <b-img :src="img1" fluid alt="Fluid image"></b-img>
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
.title-text {
  text-transform: uppercase;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #4d555c;
  font-size: 18px;
  .circle {
    height: 10px;
    width: 10px;
    background-color: yellow;
    border-radius: 50%;
  }
}
.tweet-content {
  margin-top: 50px;
}
</style>
