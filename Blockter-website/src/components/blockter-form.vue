<template>
    <div>
        <b-container>
            <div class=" content-border mx-3 ">
                <b-row class="mx-auto">
    
                    <b-col md=2 class="p-0">
                        <div class="d-flex  border-l">
                            <!-- <div class="text-white pl-2"> MOVIE</div> -->
                            <div class="text-white pl-2 pt-1">
                                <b-dropdown id="dropdown-1" text="MOVIE" class="m-md-2 droplist">
                                    <b-dropdown-item>First Action</b-dropdown-item>
                                    <b-dropdown-item>Second Action</b-dropdown-item>
                                    <b-dropdown-item>Third Action</b-dropdown-item>
                                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                                </b-dropdown>
                            </div>
                            <div class="ml-auto">
                                <font-awesome-icon :icon="['fas', 'chevron-down']" class="small text-white icona" />
                            </div>
                        </div>
                    </b-col>
                    <b-col md=10 class="p-0 ">
                        <div class="d-flex p-2">
                            <div class=" w-100">
                                <b-form-input class="bg-color" v-model="text" placeholder="Search for Movie/TV Show"></b-form-input>
                            </div>
                            <div>
                                <font-awesome-icon :icon="['fas', 'search']" class="text-white mt-2 mr-2 icon-size" />
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
                text: ''
            }
        }
    
    }
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
    .content-border {
        border: 3px solid black;
        background-color: rgb(30, 42, 66);
          .border-l {
            border-right: 1px solid black;
            .btn{
                background-color: transparent !important;
                border: transparent;
                outline: none!important;
                font-size: 14px;
                font-weight: bold;
            }
            .btn:focus{
                outline: none !important;
                box-shadow: none !important;
            }
            .dropdown-toggle::after {
                content: none;
            }
            .icona{
                margin-top: 22px;
                margin-right:10px; 
                 color: rgba(255, 255, 255, 0.75) !important;

            }

        }
        .bg-color {
            background-color: transparent;
            border-color: transparent;
            color:white;
            width: 100%;
        }
        .bg-color:focus{
            outline: none;
            box-shadow: none;
        }
         ::placeholder {
            color: rgba(255, 255, 255, 0.75) !important;
        }
        .icon-size {
            font-size: 25px;
            color: rgba(255, 255, 255, 0.75) !important;
        }
    }
</style>


