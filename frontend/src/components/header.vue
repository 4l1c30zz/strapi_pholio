<template>
<div>
    <svg id="morph"  width="100" viewBox="0 300 1920 800" preserveAspectRatio="none">
         <path class="morph" d="M1-1C86.5,1.8,222.9,5.9,391,9c297.1,5.4,531.2,4.6,628,4c171.8-1,187.1-2.9,572-8c165.7-2.2,301.4-3.7,390.7-4.7C1321.4-0.1,661.2-0.6,1-1z"></path>
       </svg>
  <header id="site-header">
<div class="wrap boxed">
          <div class="logo">
          <router-link
            to="/"
            v-slot="{ href, route, navigate }"
          >
            <a :href="href" @click="navigate">
              <logo></logo>
            </a>
          </router-link>
          </div>

        <ul class="nav">
          
        <li>
        <router-link
          to="/"
          v-slot="{ href, route, navigate }"
        >
          <a  :href="href" @click="navigate"
            >{{ route.name }}</a
          >
        </router-link>
        </li>

        <li class="mark_block_wrap">
        <router-link
          to="/blog"
          v-slot="{ href, route, navigate }"
          class="word"
        >
          <a  :href="href" @click="navigate"
            >{{ route.name }}</a
          >
        </router-link>
        <div class="mark yellow"></div>
        </li>
        
          <li v-for="category in categories" v-bind:key="category.id">
            <router-link
              :to="{ path: '/category/' + category.id }"
              :key="category.id"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
    </div>
  </header>
  </div>
</template>

<script>
import gql from "graphql-tag";
import logo from "../assets/logo";
import anime from 'animejs';
export default {
  name: "headerComponent",
  data() {
    return {
      categories: []
    };
  },
  components: {
    logo
  },
  mounted(){
    bck_morph()
    stick()
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `
  }
};

function stick (){
  let head = document.getElementById("site-header");
  let elem_height = head.offsetHeight;
  if( window.pageYOffset >= elem_height ) {
      head.classList.add("a");
    } else{
      head.classList.remove("a");
    }
}
window.onscroll =  function() {
  stick()
};

export function bck_morph(){
  anime({
  targets:'.morph',
    d: [
      {value: 'M1-1c120.1,418.2,268.7,527.3,379.8,551.8c193.5,42.7,272-171.4,645.1-237 c277.8-48.8,381.9,44,609.1-45c168.3-65.9,280.1-183,346.8-268.5C1321.4-0.1,661.2-0.6,1-1z'},
      {value: 'M1-1c-196.2,663.5-110.7,924.1,18,1034c170,145.2,378.2-4,1044,0c581.7,3.5,760.5,119.4,912-12c123.2-106.9,208.8-360.6,6.7-1020.7C1321.4-0.1,661.2-0.6,1-1z'},
    ],
    easing: 'easeInQuad',
    duration: 2000,
    loop: false
  });
}



function resizer() {
  if(window.matchMedia("(max-width:768px)").matches){
    document.querySelector("body").classList.add('mobile');
  } else {
    document.querySelector("body").classList.remove("mobile ");
  }
}

window.onload = function() {
  resizer();
  console.log("load lalal");
}

window.onresize = function() {
  resizer();
    console.log("resize lalal");

}
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
header {
    position: static;
    background: transparent;
    transition: all 0.3 ease;
    .wrap.boxed {
        width: 100%;
    }
    .logo {
        flex-basis: 30%;
        text-align: left;
        svg {
            max-width: 90px;
            margin: 0 auto;
            transition: all 0.3s ease;
        }
        path {
          fill: color(_gray);
          stroke: color(_gray);
        }
        a {
            display: block;
            text-align: left;
        }
    }
    .nav {
        flex-basis: 70%;
        @extend %flex-center-end;
        li {
            margin: $med_marg;
        }
        a{
          font-size: font_size(f20);
        }
    }

    &.a {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;  
        background: color(_magenta);
        .logo svg {
            max-width: 70px;
        }
    }
}
#morph {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    path{
      fill: color(_magenta);
    }
}

</style>
