<template>
  <div id="app">
<headerComponent />
        <router-view :key="$route.fullPath"></router-view>
<footerComponent/>
  </div>
</template>

<script>
  import headerComponent from "./components/header.vue";
  import footerComponent from "./components/footer.vue";

  export default {
    name: "App",
    components: {
      headerComponent,
      footerComponent
    },
    mounted: function() {
       // console.log("Mounted!")
      //setTimeout(function() {
       // console.log('time reached');
  //  }, 1000);
    },

  };
</script>

