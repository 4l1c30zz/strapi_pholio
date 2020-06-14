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
    }
  };
</script>

<style lang="scss">
  @import "@/scss/_globals.scss";
</style>
