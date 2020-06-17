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
      console.log("here enter");
      var tags_wrap = document.createElement('div');
      let tags = "<div id='loader' class='a'><div class='inner'><div id='load'><div id='load_container'></div></div><div class='txt_wrap'><p class='txt'></p></div><div class='side'> Loading...</div></div></div>";
      let site_footer = document.querySelector(".site-footer");
      tags_wrap.innerHTML =  tags;
      site_footer.after(tags_wrap);
      document.querySelector("#loader .txt").innerHTML = loader_random();
      loader();
    },
    afterEnter: function () {
      console.log("here afterEnter");
      let loader_elem = document.querySelector("#loader");

      setTimeout(function(){ 
        loader_elem.remove();
        bck_morph()
      }, 3000);
    },
}
  };

</script>

