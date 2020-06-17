<template>
  <div id="app">
<headerComponent />
        <router-view :key="$route.fullPath"></router-view>
<footerComponent @created="footer_attached"/>
  </div>
</template>

<script>
  import headerComponent from "./components/header.vue";
  import footerComponent from "./components/footer.vue";
  import { loader } from './js/particals/anime_effects';
  import { loader_random } from './js/particals/anime_effects';
  export default {
    name: "App",
    components: {
      headerComponent,
      footerComponent
    },
    mounted: function() {
 console.log(loader_random());
     document.querySelector("#loader .txt").innerHTML = loader_random();
    },
   methods: {
    footer_attached() {
      console.log('footer_attached');
    }
  }
  };

</script>

