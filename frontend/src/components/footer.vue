<template>
<div>
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
    <div id="loader" class="a first">
        <div class="inner">
            <div id="load">
             <div id="load_container"></div>
            </div>
            <div class="txt_wrap">
              <p class="txt"></p>
            </div>
            <div class="side"> Loading...</div>
        </div>
    </div>
</div>
</template>
<script>
import logo from "../assets/logo";
export default{
    name: "footerComponent",
    components: {
        logo
    },
};

</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";

.site-footer {
    @extend %flex-center-center;
    text-align: center;
    .logo_wrap {
        display: block;
    }
    #logo {
        max-width: 90px;
        path {
            fill: color(_black);
        }
    }
}
#loader {
    display: none;
    p {
        opacity: 0;
        transition: opacity 1s ease 1s;
    }
    &.a {
        position: fixed;
        background: white;
        z-index: 999;
        top: 0;
        @extend %flex-center-center;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        #load {
            z-index: 1;
            background: color(_magenta);
            width: 200px;
            height: 200px;
            position: absolute;
            top: 25%;
            border-radius: 0;
            transform: rotate(0deg);
        }
        .inner {
            max-width: 80vw;
            z-index: 2;
            overflow: hidden;
            margin: 0 auto;
            flex-basis: 100%;
            max-height: 50vh;
            @extend %flex-center-center;

        }
        p {
            white-space: nowrap;
            font: font_weight(boldest) font_size(f100) font(lined_font);
            padding: 10px;
            text-transform: uppercase;
            position: relative;
            right: -100vw;
            opacity: 1;
            animation: moveRight cubic-bezier(0.250, 0.250, 0.750, 0.750) 12s alternate infinite 0.3s;
        }
        .side {
            font: font_weight(boldest) font_size(f60) font(base_font);
            text-transform: uppercase;
            text-align: center;
            z-index: 1;
            position: relative;
            flex-basis: 100%;
        }
        .txt_wrap {
            max-width: 70vw;
        }
    }
}
@keyframes moveRight {
    0% {
        right: 0;
    }

    100% {
        right: 60vw;
    }
}

</style>