<template>
    <footer class="site-footer">
        <div class="wrap">
            <div class="logo">
                <router-link
                to="/"
                v-slot="{ href, route, navigate }"
                >
                    <a class="logo_wrap" :href="href" @click="navigate" >
                        <logo></logo>
                    </a >
                </router-link>
            </div>
        </div>
    </footer>
</template>
<script>
import logo from "../assets/logo";
export default{
    name: "footerComponent",
    components: {
        logo
    }
};

</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";

.site-footer{
    @extend %flex-center-center;
    text-align: center;
    .logo_wrap{
        display: block;
    }
    #logo{
        max-width: 90px;
        path{
            fill: color(_black);
        }
    }
}
</style>