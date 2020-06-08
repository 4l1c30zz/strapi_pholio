<template>
  <div class="single">
    <div
      v-if="article.image"
      id="banner"
      class="bck-cover bck-fixed single-title"
      :data-src="api_url + article.image.url"
      uk-img
    >
      <h1 class="heading" >{{ article.tiitle }}</h1>
    </div>
        <vue-markdown-it
          v-if="article.content"
          :source="article.content"
          class="body"
        />

  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      article: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    article: {
      query: gql`
      query Articles($id: ID!) {
        article(id: $id) {
          id
          tiitle
          content
          publish
          git
          live
          tech
          image {
            url
          }

        }
      }
      `,
      variables() {
        return {
          id: this.routeParam,
        };
      }
    }
  }
};

</script>

<style lang="scss">
@import "@/scss/_reset.scss";
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/_globals.scss";
</style>
