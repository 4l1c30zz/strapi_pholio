<template>
  <div class="gallery wrap">
    <div
    v-for="item in items" :key="item.url"
    class="col-3 col-center"
    >
        <img :src="api_url + item.url" class="gallery_image"  />
        <h4 class="heading">{{item.caption}}</h4>
    </div>
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
    items: Array
  },
  computed: {
    ItemsCount() {
      return Math.ceil(this.items.length);
    },
    Items() {
      return this.items.slice(0);
    },

  }
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
.gallery{
  h4{
  background: color(_black);
  color: white;
  width:100%;
  padding: 5px 10px;
  text-align: left;
  }
  img{
    width: 100%;
  height: 30vw;
  object-fit: cover;
  object-position: center top;
  }
}
</style>
