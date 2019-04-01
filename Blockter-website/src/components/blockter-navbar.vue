<template>
    <div>
    
        
    
            <b-navbar toggleable="lg" type="dark" class=" main-navbar">
                <b-container>
                    <b-navbar>
                        <b-navbar-brand href="#">
                            <img src="../assets/logo.png" alt="logo">
                        </b-navbar-brand>
                    </b-navbar>
    
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
    
                            <slot name="navlinks"></slot>
    
                        </b-navbar-nav>
    
                        <!-- Right aligned button-->
                        <b-navbar-nav class="ml-auto">
                            <b-button size="sm" class="rounded-pill font-weight-bold btn-color">LOG IN</b-button>
                        </b-navbar-nav>
                    </b-collapse>
                </b-container>
            </b-navbar>
       
    
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss">
    .main-navbar {
        background-color: rgb(2, 2, 7);
    }
    
    .btn-color {
        background-color: #dd003f;
        border-color: #dd003f;
    }
    
    .btn-color:hover {
        background-color: #dd003f !important;
    }
</style>