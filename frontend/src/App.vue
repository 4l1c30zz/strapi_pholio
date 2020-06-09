<template>
  <div id="app">
<Nav />
        <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Nav from "./components/header.vue";

export default {
  name: "App",
  components: { Nav }
};

</script>

<style lang="scss">
  @import "@/scss/_reset.scss";
  @import "@/scss/_variables.scss";
  @import "@/scss/_functions.scss";
  @import "@/scss/_mixins.scss";
  @import "@/scss/_globals.scss";
</style>
