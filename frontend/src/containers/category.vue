<template>
  <div>

        <h1 class="heading">{{ category.name }}</h1>

        <ArticlesList :articles="category.articles || []"></ArticlesList>

  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    ArticlesList
  },
  apollo: {
    category: {
      query: gql`
        query Category($id: ID!) {
          category(id: $id) {
            name
            articles {
              id
              title
              content
              git
              live
              tech
              image {
                url
              }
              category {
                id
              }
            }
          }
        }
      `,
      variables() {
        return { id: this.routeParam };
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
