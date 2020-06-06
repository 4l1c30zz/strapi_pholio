<template>
<div class="about wrap boxed">
  <h1 class="heading col-2 glitch-heading"><span>{{ item.title }}</span></h1>
  <p   class="col-2">{{ item.txt }}</p>
</div>
</template>

<script>

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    item: Object
  },
  computed: {
    ItemsCount() {
      return Math.ceil(this.items.length);
    },
    Items() {
      return this.items[0];
    },

  }
};




</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";

</style>
