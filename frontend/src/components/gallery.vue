<template>
  <div class="gallery wrap">
    <div
    v-for="item in items" :key="item.url"
    class="col-3 col-center"
    >
        <img :src="api_url + item.url" class="gallery_image"  />
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
