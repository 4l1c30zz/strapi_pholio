<template>
  <div>
    <h1 class="heading">blog</h1>
     <articleSingle :articles="articles"></articleSingle>
  </div>
</template>

<script>
import articleSingle from "../components/articleSingle.vue";
import gql from "graphql-tag";

export default {
  name: 'Blog',
  metaInfo: {
    title: 'Blog',
    titleTemplate: '%s | 4l1c30zz Portfolio App'
  },
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

