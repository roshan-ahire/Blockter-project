<template>
    <div>
        <b-container>
            <div class=" content-border mx-3 ">
            <b-row class="mx-auto">
                
                <b-col md=2 class="p-0">
                    <div class="d-flex p-3 border-l">
                        <div class="text-white pl-2"> MOVIE</div>
                        <div class="ml-auto">
                            <font-awesome-icon :icon="['fas', 'chevron-down']" class="small text-white" />
                        </div>
                    </div>
                </b-col>
                <b-col md=10 class="p-0 ">
                    <div class="d-flex p-2">
                        <div class="">
                            <b-form-input class="bg-color" v-model="text" placeholder="Search for Movie/TV Show"></b-form-input>
                        </div>
                        <div class="ml-auto"><font-awesome-icon :icon="['fas', 'search']" class="text-white mt-2 mr-2 icon-size" /></div>
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
.content-border{
    .border-l{
        border-right: 1px solid black;
    }
    border: 3px solid black;
    background-color: rgb(30, 42, 66);

    .bg-color {
        background-color: transparent;
        border-color: transparent;
    
    }
    
     ::placeholder {
        color: rgba(255, 255, 255, 0.75) !important;
    }
    .icon-size{
       font-size: 25px;
       color: rgba(255, 255, 255, 0.75) !important;
    }
    }
</style>

