<template>
    <div>
      <div class="footer-back">
          <b-container>
          <div class="text-white text-left small text-l">
              © 2018 Blockter. All Rights Reserved. Designed by <span> <a href="#">Haintheme.</a></span> 
<div class="float-right"> <a href="#" class="lastlink"> Back to top</a> <span> <font-awesome-icon :icon="['fas', 'arrow-up']" class="small" /></span></div>
          </div>
          
          </b-container>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.footer-back{
  background-color: #020d18;;
  height: 50px;
  line-height: 50px; 
  .text-l{
      color: #8b96a3 !important;
      .lastlink{
          color:#8b96a3;
          text-decoration: none;
      }
      .lastlink:hover{
          color:yellow;
      }
  }
}
</style>


