
<template>
  <div>
    <div>
      <!-- <b-button
        v-for="cardcontents in cartscontentsData"
        v-bind:key="cardcontents.index"
        v-b-modal.modal-1
      >Launch demo modal</b-button>-->
      <b-button v-b-modal="cartscontentsData.id">Launch demo modal</b-button>
      <b-modal :id="cartscontentsData.id" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cartscontentsData"],
  data() {
    return {
      cardcontents: [
        {
          img: image1
        },
        {
          img: image2
        },
        {
          img: image3
        },
        {
          img: image4
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>

</style>
