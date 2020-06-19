<template>
  <div>
    <h1 class="heading">blog</h1>
    <div class="block_wrap">
     <articleSingle :articles="articles"></articleSingle>
    </div>
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

