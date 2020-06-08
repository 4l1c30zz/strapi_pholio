<template>
  <div class="main">

        <h1 class="heading">blog</h1>

        <ArticlesList :articles="articles"></ArticlesList>

  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: []
    };
  },
  apollo: {
    articles: gql`
      query  {
        articles {
          id
          tiitle
          content
          git
          live
          tech
          image {
            url
          }
          category {
            id
            name
          }
        }
      }
    `
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
