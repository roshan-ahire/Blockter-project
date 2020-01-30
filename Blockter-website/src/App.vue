<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/Blockter-website">Blockter-website</router-link>|
      <router-link to="/example">example</router-link> |
      <router-link to="/new-modal-page">new-modal-page</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.card-background
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .card
  .card-body {
  padding: 0px;
}
</style>
<script>
export default {
  // lists: [
  //     {
  //       name: "roshan",
  //       rollNo: "1",
  //       address: "bhandup"
  //     },
  //        {
  //       name: "kiran",
  //       rollNo: "2",
  //       address: "mulund"
  //     },
  //        {
  //       name: "vicky",
  //       rollNo: "3",
  //       address: "vikroli"
  //     },
  //        {
  //       name: "dole",
  //       rollNo: "4",
  //       address: "thane"
  //     }
  //   ]
};
</script>
