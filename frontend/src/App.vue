<template>

<div id="app">
  <headerComponent />
  <transition
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  >
    <router-view :key="$route.fullPath"></router-view>
  </transition>
  <footerComponent @created="footer_attached"/>
</div>
</template>

<script>
import headerComponent from "./components/header.vue";
import footerComponent from "./components/footer.vue";
import { bck_morph } from './js/particals/anime_effects';
import { loader } from './js/particals/anime_effects';
import { loader_random } from './js/particals/anime_effects';

export default {
  name: "App",
  components: {
    headerComponent,
    footerComponent
  },

  methods: {
    footer_attached() {
     console.log('footer_attached');
    },

    enter: function () {
      let existing_morph = document.querySelector("#morph");
      
      if(existing_morph){
        existing_morph.remove();
      }
      
      let tags_wrap = document.createElement('div');
      let tags = "<div id='loader' class='a'><div class='inner'><div id='load'><div id='load_container'></div></div><div class='txt_wrap'><p class='txt'></p></div><div class='side'> Loading...</div></div></div>";
      let site_footer = document.querySelector(".site-footer");
      tags_wrap.innerHTML =  tags;
      site_footer.after(tags_wrap);
      document.querySelector("#loader .txt").innerHTML = loader_random();

      loader();

      let morph_wrap = document.createElement('div');
      let svg_morph = "<svg id='morph'  width='100' viewBox='0 300 1920 800' preserveAspectRatio='none'><path class='morph' d='M1-1C86.5,1.8,222.9,5.9,391,9c297.1,5.4,531.2,4.6,628,4c171.8-1,187.1-2.9,572-8c165.7-2.2,301.4-3.7,390.7-4.7C1321.4-0.1,661.2-0.6,1-1z'></path></svg>";
      let site_header = document.querySelector("#site-header");
      morph_wrap.innerHTML =  svg_morph;
      site_header.after(morph_wrap);

    },
    afterEnter: function () {
      console.log("here afterEnter");
      let loader_elem = document.querySelector("#loader");

      setTimeout(function(){ 
        loader_elem.remove();
        bck_morph()
      }, 1000);
    },
  },
  mounted(){
    console.log("nounted");
  }
  };

</script>

