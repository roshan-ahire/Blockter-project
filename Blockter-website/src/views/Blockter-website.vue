<template>
    <div class="main-backgroung">
    <!-- use navbar componet -->
        <Navbar>
            <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">
                <span class="small font-weight-bold"> {{link.name}}</span>
                <span style="color:#fff" v-if="link.icon">
                         <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1 small arrow-hover"/>
                     </span>
            </b-nav-item>
        </Navbar>
     <!-- background image start -->
        <div class=" background-poster">
            <img src="../assets/back-poster.jpg" alt="poster">
            
        </div>
    </div>
</template>

<script>
    import Navbar from "@/components/blockter-navbar.vue";
    export default {
        data() {
            return {
                navlinks: [{
                        name: "HOME",
                        icon: true,
                        divid: "#welcome"
                    },
                    {
                        name: "MOVIES",
                        icon: true,
                        divid: "#landing"
                    },
    
                    {
                        name: "TVSHOWS",
                        icon: true,
                        divid: "#documentation"
                    },
                    {
                        name: "CELEBRITIES",
                        icon: true,
                        divid: "#purchase"
                    },
                    {
                        name: "NEWS",
                        icon: true,
                        divid: "#documentation"
                    }
                ],
    
            };
        },
    
    
    
    
        components: {
            Navbar,
    
        }
    };
</script>

<style lang="scss">
    .main-backgroung {
        background-color: #111014;
        height: 1000px;
        .nav-link {
            color: rgba(255, 255, 255, 0.75) !important;
        }
        .nav-link:hover {
            color: yellow !important;
        }
        .arrow-hover:hover{
                  color: yellow !important;
        }
        // second background poster
        .background-poster img{
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: auto;
            opacity: 0.3;
        }
    }
</style>
