<template>
  <div>
    <b-container>
      <div class=" content-border mx-3 ">
        <b-row class="mx-auto">
          <b-col md="2" class="p-0">
            <div class="border-l">
              <!-- <div class="text-white pl-2"> MOVIE</div> -->
              <div class="text-white pl-2 pt-1">
                <!-- <b-dropdown
                  id="dropdown-1"
                  text="MOVIE"
                  class="m-md-2 droplist"
                >
                  <b-dropdown-item>First Action</b-dropdown-item>
                  <b-dropdown-item>Second Action</b-dropdown-item>
                  <b-dropdown-item>Third Action</b-dropdown-item>
                  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                </b-dropdown>

                <div class="float-right">
                  <font-awesome-icon
                    :icon="['fas', 'chevron-down']"
                    class="small text-white icona"
                  />
                </div> -->
                <div>
                  <b-dropdown id="dropdown-1" text="MOVIES" class="m-md-2">
                    <b-dropdown-item>First Action</b-dropdown-item>
                    <b-dropdown-item>Second Action</b-dropdown-item>
                    <b-dropdown-item>Third Action</b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item active>Active action</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </div>
              
              </div>
            </div>
          </b-col>
          <b-col md="10" class="p-0 ">
            <div class="d-flex p-2">
              <div class=" w-100">
                <b-form-input
                  class="bg-color"
                  v-model="text"
                  placeholder="Search for Movie/TV Show"
                ></b-form-input>
              </div>
              <div>
                <font-awesome-icon
                  :icon="['fas', 'search']"
                  class="text-white mt-2 mr-2 icon-size"
                />
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.content-border {
  border: 3px solid black;
  background-color: rgb(30, 42, 66);
  .border-l {
    border-right: 1px solid black;

    .btn {
      background-color: transparent !important;
      border: transparent;
      outline: none !important;
      font-size: 14px;
      font-weight: bold;
      position: relative;
      width: 150px;
      text-align: left;
    }
    .btn:focus {
      outline: none !important;
      box-shadow: none !important;
    }

    // .dropdown-toggle::after {
    //   content: none;
    // }
    .icona {
      color: $form-text !important;
      position: absolute;
      top: 20px;
      right: 20px;
    }
  }
  .bg-color {
    background-color: transparent;
    border-color: transparent;
    color: white;
    width: 100%;
  }
  .bg-color:focus {
    outline: none;
    box-shadow: none;
  }
  ::placeholder {
    color: $form-text !important;
  }
  .icon-size {
    font-size: 25px;
    color: $form-text !important;
  }
}
</style>
