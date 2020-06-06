<template>
<div id="main">

  <about :item="page.about || []"></about>
  <posts :item="page.title_n_posts || []"></posts>



  <div class="gallery wrap boxed">
    <h2 class="heading col-1">{{ page.gallery.title }}</h2>
      <gallerySingle :items="page.gallery.items || []"></gallerySingle>
  </div>

  <contact :item="page.contact || []"></contact>


</div>
</template>

<script>
import gql from "graphql-tag";
import gallerySingle from "../components/gallery-single";
import about from "../components/about";
import posts from "../components/posts";
import contact from "../components/contact";

export default {
  data() {
    return {
      page: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    about,
    posts,
    gallerySingle,
    contact
  },
  apollo: {
    page: {
      query: gql`
      query Pages($id: ID = 1) {
        page(id: $id) {
          id
          Title
        ...about
          ...title_n_posts
          ...gallery
          ...contact

        }
      }

      fragment about on Page {
        about {
          __typename
          id
          title
          txt
        }
      }

      fragment title_n_posts on Page {
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
      }

      fragment gallery on Page {
          gallery{
          id
            title
            items{
              url
              caption
            }
          }
      }

      fragment contact on Page {
        contact {
          title
          email
          git
          insta
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
