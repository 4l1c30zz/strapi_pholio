
  <template>
  <div class="gallery wrap boxed">
    <h2 class="heading col-1">{{ items.title }}</h2>
      <gallerySingle :items="items.items || []"></gallerySingle>
  </div>
</template>

<script>
import gallerySingle from "../components/gallery-single";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
    components: {
     gallerySingle
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

</style>
