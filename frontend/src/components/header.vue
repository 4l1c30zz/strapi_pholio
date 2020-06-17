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
import { bck_morph } from '../js/particals/anime_effects';

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

function body_class_switcher() {
  let body = document.querySelector("body");

  if(window.matchMedia("(min-width:1331px)").matches){
    body.classList.add('desktop');
    //console.log("desktop");
    if(body.classList.contains("mobile")){
     body.classList.remove("mobile");
    }
    if(body.classList.contains("tablet")){
      body.classList.remove("tablet");
    }
    if(body.classList.contains("laptop")){
      body.classList.remove("laptop");
    }
     if(body.classList.contains("tiny")){
    body.classList.remove("tiny");
    }
  } 

  if(window.matchMedia("(min-width:1025px) and (max-width:1330px)").matches){
    body.classList.add('laptop');
    //console.log("laptop");
    if(body.classList.contains("desktop")){
      body.classList.remove("desktop");
    }
    if(body.classList.contains("tablet")){
      body.classList.remove("tablet");
    }
    if(body.classList.contains("mobile")){
      body.classList.remove("mobile");
    }
    if(body.classList.contains("tiny")){
    body.classList.remove("tiny");
    }
  } 

  if(window.matchMedia("(min-width:769px) and (max-width:1024px)").matches){
    body.classList.add('tablet');
    //console.log("tablet");
    if(body.classList.contains("desktop")){
      body.classList.remove("desktop");
    }
    if(body.classList.contains("laptop")){
     body.classList.remove("laptop");
    }
    if(body.classList.contains("mobile")){
     body.classList.remove("mobile");
    }
     if(body.classList.contains("tiny")){
    body.classList.remove("tiny");
    }
  } 

  if(window.matchMedia("(min-width:400px) and (max-width:768px)").matches){
    body.classList.add('mobile');
    //console.log("mobile");
    if(body.classList.contains("desktop")){
    body.classList.remove("desktop");
    }
    if(body.classList.contains("laptop")){
      body.classList.remove("laptop");
    }
    if(body.classList.contains("tablet")){
    body.classList.remove("tablet");
    }
     if(body.classList.contains("tiny")){
    body.classList.remove("tiny");
    }
  } 

   if(window.matchMedia("(max-width:400px)").matches){
    body.classList.add('tiny','mobile');
    //console.log("tiny");
    if(body.classList.contains("desktop")){
    body.classList.remove("desktop");
    }
    if(body.classList.contains("laptop")){
      body.classList.remove("laptop");
    }
    if(body.classList.contains("tablet")){
    body.classList.remove("tablet");
    }

  } 
}

window.onload = function() {
  body_class_switcher();
}

window.onresize = function() {
  body_class_switcher();
}

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
