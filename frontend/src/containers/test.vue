<template>
  <div id="main">

  <div v-if="page" class="blog wrap boxed">
    <h2  class="heading col-1">{{ page.title_n_posts.title }}</h2>
    <ArticlesList :articles="page.title_n_posts.articles || []"></ArticlesList>
  </div>

  </div>
</template>

<script>
import gql from "graphql-tag";
import ArticlesList from "../components/testContainer";


export default {

  data() {
    return {
      page: {
        about: { 
          title: null 
        },
        gallery: { 
          title: null 
        },
        title_n_posts: { 
          title: null 
        },
        contact: { 
          title: null 
        } 
    }, 
      
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    ArticlesList
  },
  apollo: {
    page: {
      query: gql`
        query Pages($id: ID = 1) {
          page(id: $id) {
            id
            Title
            about {
              id
              title
              txt
            }
            title_n_posts {
              title
              articles {
                id
                tiitle
                tech
                git
                live
                image {
                  url
                }
              }
            }
            gallery {
              id
              __typename
              title
              items {
                url
                caption
              }
            }
            contact {
              title
              email
              git
              insta
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
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/_globals.scss";
#app{
        text-transform: uppercase;
}
.about{
.glitch-heading{
    font-size: font_size(f120);
    text-align: left;
    line-height: line_height(_minimal);
    }
    p{
      font-weight: font_weight(medium);
      font-size: font_size(f20);
      line-height: line_height(_default);
    }
    }
  .blog, .contact{
  text-align:center;
  }
  .mail.link{
  display: block;
  margin-bottom:25px;
  }
</style>
