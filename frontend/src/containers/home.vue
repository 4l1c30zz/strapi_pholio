<template>
  <div id="main">

  <div v-if="page" class="about wrap boxed">
    <h1 v-if="page.about.title" class="heading col-2 col-md-2 col-sm-1  glitch-heading"><span>{{ page.about.title }}</span></h1>
    <p v-if="page.about.txt" class="col-2 col-md-2 col-sm-1">{{ page.about.txt }}</p>
  </div>

  <div v-if="page" class="blog wrap boxed">
    <h2  class="heading col-1">{{ page.title_n_posts.title }}</h2>
    <articleSingle :articles="page.title_n_posts.articles || []"></articleSingle>
  </div>

     <div v-if="page" class="gallery wrap boxed">
    <h2
    v-if="page.gallery.title "
     class="heading col-1"
     >
     {{ page.gallery.title }}
     </h2>
      <gallerySingle 
      v-if="page.gallery.items "
      :items="page.gallery.items || []"></gallerySingle>
  </div>

  <div v-if="page"  class="contact wrap boxed">
    <h2 class="heading col-1">{{ page.contact.title }}</h2>
    <a class="mail link col-1" :href="page.contact.email">{{page.contact.email}}</a>
    <div class="col-1">
      <a :href="page.contact.git" class="btn btn-default col-md-2 col-sm-1  col-2">
      GitHub
      </a>
      <a :href="page.contact.insta" class="btn btn-default col-2 col-md-2 col-sm-1">
      Instagram
      </a>
    </div>
  </div>

  </div>
</template>

<script>
import gql from "graphql-tag";
import gallerySingle from "../components/gallerySingle";
import articleSingle from "../components/articleSingle";


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
    gallerySingle,
    articleSingle
  },
  apollo: {
    page: {
      query: gql`
        query Pages($id: ID = 1) {
          page(id: $id) {
            id
            page_title
            about {
              id
              title
              txt
            }
            title_n_posts {
              title
              articles {
                id
                title
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
