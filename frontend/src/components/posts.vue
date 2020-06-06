
  <template>
  <div class="blog wrap boxed">
    <h2  class="heading col-1">{{ item.title }}</h2>
    <ArticlesList :articles="item.articles || []"></ArticlesList>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
    components: {
    ArticlesList
  },
  props: {
    item: Object
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
