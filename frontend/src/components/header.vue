<template>
<div>
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
        </router-link>-
        
 
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

export default {
  name: "headerComponent",
  data() {
    return {
      categories: []
    };
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
  },
  components: {
    logo
  },
 
  mounted(){
  //callback on mounting to check the first position to avoid vier appearence on reload in the middle of the page
    stick()
  },

};
//sticky header function
function stick (){
  let head = document.getElementById("site-header");
  let elem_height = head.offsetHeight;
  //if scrolled part is higher than header add class
  if( window.pageYOffset >= elem_height ) {
      head.classList.add("a");
    } else{
      head.classList.remove("a");
    }
}

function body_class_switcher() {

  let body = document.querySelector("body");
  //reset body class every time that function runs to avoid resize bugs
  body.className = '';
  //set default screen sizes for future media queries
  let desktop = window.matchMedia( "(min-width: 1331px)" );
  let laptop = window.matchMedia( "(min-width:1025px) and (max-width:1330px)" );
  let tablet = window.matchMedia( "(min-width:769px) and (max-width:1024px)" );
  let mobile = window.matchMedia( "(min-width:400px) and (max-width:768px)" );
  let tiny_mobile = window.matchMedia( "(max-width:400px)" );
  
//if resolution matches the body gets the maching class
  if((desktop).matches){
    body.classList.add('desktop');
  } 

  if((laptop).matches){
    body.classList.add('laptop');
  } 

  if((tablet).matches){
    body.classList.add('tablet');
  } 

  if((mobile).matches){
    body.classList.add('mobile');
  } 
   if((tiny_mobile).matches){
    body.classList.add('tiny','mobile');
  } 

}
//check the resolution oload
window.onload = function() {
  body_class_switcher();
}
//check the resolution on resize
window.onresize = function() {
  body_class_switcher();
}
//stick the header onscroll
window.onscroll =  function() {
  stick()
};

</script>
<style lang="scss">
@import "@/scss/_reset.scss";
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/_globals.scss";
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
