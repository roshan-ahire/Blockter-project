<template>
    <div>
        <div class="mt-5">
            <b-container>
                <div class="card-background mx-3">
                    <b-row>
                        <b-col md=3 v-for="card in cards" v-bind:key="card.index">
    
                            <div>
                                <b-card overlay :img-src="card.cardimg" img-alt="Card" text-variant="white" title="Image Overlay">
                                    <b-card-text>
                                        <div class="text-white">{{card.btn1}}</div>
    
                                    </b-card-text>
                                </b-card>
    
                            </div>
    
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    import image1 from "../assets/ant-man.jpg";
    import image2 from "../assets/Iron-Man1.jpg";
    import image3 from "../assets/hulk.jpg";
    import image4 from "../assets/black-panther.jpg";
    
    
    export default {
        data() {
            return {
                cards: [{
                        cardimg: image1,
                        btn1: "roshan",
                        btn2: "",
                        btn3: "",
                        name: ""
    
                    },
                    {
                        cardimg: image2,
                        btn1: "roshan",
                        btn2: "",
                        btn3: "",
                        name: ""
    
                    },
                    {
                        cardimg: image3,
                        btn1: "roshan",
                        btn2: "",
                        btn3: "",
                        name: ""
    
                    },
                    {
                        cardimg: image4,
                        btn1: "roshan",
                        btn2: "",
                        btn3: "",
                        name: ""
    
                    }
    
                ]
    
            };
        }
    }
</script>

<style lang="scss">
   
    
    .card-background {
        background-color: black;
        padding-right: 20px;
         .card {
        background-color: black;
         img {
            height: 350px;
            opacity: 0.7;
        }
    }
        
    }
</style>



