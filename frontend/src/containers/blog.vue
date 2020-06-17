<template>
  <div class="main">

        <h1 class="heading">blog</h1>

        <articleSingle :articles="articles"></articleSingle>

  </div>
</template>

<script>
import articleSingle from "../components/articleSingle.vue";
import gql from "graphql-tag";

export default {
  components: {
    articleSingle
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
            name
          }
        }
      }
    `
  }
};
</script>


