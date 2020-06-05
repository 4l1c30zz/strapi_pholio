<template>
<div id="main">

  <div class="about wrap boxed">
    <h1  v-if="page.title_n_txt.title"  class="heading col-2 glitch-heading"><span>{{ page.title_n_txt.title }}</span></h1>
    <p  v-if="page.title_n_txt.text"  class="col-2">{{page.title_n_txt.text }}</p>
  </div>

  <div class="blog wrap boxed">
    <h2 class="heading col-1">{{ page.title_n_posts.title }}</h2>
    <ArticlesList :articles="page.title_n_posts.articles || []"></ArticlesList>
  </div>

  <div class="gallery wrap boxed">
    <h2 class="heading col-1">{{ page.gallery.title }}</h2>
      <gallery :items="page.gallery.items || []"></gallery>
  </div>

  <div class="contact wrap boxed">
  <h2 class="heading col-1">{{ page.contact.title }}</h2>
  <a class="mail link col-1" :href="page.contact.email">{{page.contact.email}}</a>
  <div class="col-1">
  <a :href="page.contact.git" class="btn btn-default col-2">
  GitHub
  </a>
  <a :href="page.contact.insta" class="btn btn-default col-2">
  Instagram
  </a>
  </div>
  </div>

</div>
</template>

<script>
import gql from "graphql-tag";
import ArticlesList from "../components/ArticlesList";
import gallery from "../components/gallery";
export default {
  data() {
    return {
      page: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    ArticlesList,
    gallery
  },
  apollo: {
    page: {
      query: gql`
      query Pages($id: ID = 1) {
        page(id: $id) {
          id
          Title
          ...title_n_txt
          ...title_n_posts
          ...gallery
          ...contact
        }
      }

      fragment title_n_txt on Page {
        title_n_txt{
        id
        title
        text
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
