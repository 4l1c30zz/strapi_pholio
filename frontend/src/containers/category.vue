<template>
  <div>
    <h1 class="heading">{{ category.name }}</h1>
    <div class="block_wrap">
     <articleSingle :articles="category.articles || []"></articleSingle>
    </div>
  </div>
</template>

<script>
import articleSingle from "../components/articleSingle";
import gql from "graphql-tag";

export default {
  name: 'Category',
  metaInfo: {
    title: 'Category',
    titleTemplate: '%s | 4l1c30zz Portfolio App'
  },
  data() {
    return {
      category: [],
      routeParam: this.$route.params.id
    };
  },
  components: {
    articleSingle
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


