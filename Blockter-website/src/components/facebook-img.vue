<template>
  <div>
    <div class="text-white font-weight-bold text-left title-text-fb">
      FIND US ON FACEBOOK
    </div>
    <div>
      <figure>
        <div>
        <!-- <img src="../assets/fanpage.png" class="" alt=""> -->
        <b-img :src="img" fluid alt="Fluid image"></b-img>
        </div>
      </figure>
      <!-- <b-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" name="iframe_a" allowfullscreen></b-embed> -->
    </div>
  </div>
</template>
<script>
import images1 from "../assets/fb1.png";
export default {
  data() {
    return {
      img: images1
    };
  }
};
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.title-text-fb {
  text-transform: uppercase;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #4d555c;
  font-size: 16px;
}
</style>
