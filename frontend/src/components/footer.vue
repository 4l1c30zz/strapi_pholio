<template>
    <div>
        <footer class="site-footer">
            <div class="block_wrap wrap boxed col-1">
                    <router-link to="/" v-slot="{ href, route, navigate }">
                        <a class="logo_wrap col-1" :href="href" @click="navigate">
                            <logo></logo>
                        </a>
                    </router-link>
                    <a class="mail link col-1" href="mailto:4l1c30zz@gmail.com">4l1c30zz@gmail.com</a>
                    <div class="wrap btn_wrap col-1">
                        <a href="https://github.com/4l1c30zz/" target="_blank" class=" git btn btn-default col-3  ">
                            GitHub
                        </a>
                        <a href="https://www.instagram.com/4l1c30zz/" target="_blank" class="btn btn-default col-3 ">
                            Instagram
                        </a>
                         <a href="https://www.behance.net/4l1c30zz/" target="_blank" class="btn btn-default col-3 ">
                            Behance
                        </a>
                    </div>
            </div>
                        <div class="magenta deco heading col-1">
                {!%@#”/~%&?}
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
export default {
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
.deco{
    padding: 2.5vh 10vw;
    font-size: font_size(f30);
    width: 100%;

}
.site-footer {
    @include flex-center-center;
    text-align: center;
    flex-wrap: wrap;

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
        @include flex-center-center;
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
            @include flex-center-center;

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


//media query for loader only to avoid any jumpings
@media screen and( max-width:1024px){
#app #loader {
        p{
        font-size: font_size(f80);
        }
        .side{
        font-size: 50px;
        }
    }
}
@media screen and( max-width:450px){
#app #loader {
        p{
        font-size: 50px;
        }
        .side{
        font-size: font_size(f30);
        }
    }
}
</style>