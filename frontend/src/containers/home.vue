<template>
  <div id="main">
    <div v-if="page.about" class="about block_wrap wrap boxed">
      <h1 v-if="page.about.title" class="heading col-2 col-md-1 col-sm-1  glitch-heading">
        <span>{{ page.about.title }}</span></h1>
      <vue-markdown-it  v-if="page.about.txt" :source="page.about.txt" class="col-2 col-md-1 col-sm-1"/>
    </div>

    <div v-if="page.title_n_posts" class="blog block_wrap wrap boxed">
      <h2 class="heading col-1">{{ page.title_n_posts.title }}</h2>
      <articleSingle :articles="page.title_n_posts.articles || []"></articleSingle>
    </div>

    <div v-if="page.gallery" class="gallery block_wrap wrap boxed">
      <h2 v-if="page.gallery.title " class="heading col-1">
        {{ page.gallery.title }}
      </h2>
      <gallerySingle v-if="page.gallery.items " :items="page.gallery.items || []"></gallerySingle>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import gallerySingle from "../components/gallerySingle";
import articleSingle from "../components/articleSingle";
import VueMarkdownIt from "vue-markdown-it";

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | 4l1c30zz Portfolio App'
  },
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
    articleSingle,
    VueMarkdownIt
  },
  apollo: {
    page: {
      query: gql `
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
  },

};

</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
.about {
  .glitch-heading {
    font-size: font_size(f120);
    text-align: left;
    line-height: line_height(_minimal);
  }

  p {
    font-weight: font_weight(medium);
    font-size: font_size(f20);
    line-height: line_height(_default);
    text-transform: uppercase;
  }
}

@media screen and (max-width:1024px) {
  .about .glitch-heading {
    font-size: font_size(f100);
    margin-bottom: $med-marg;
  }

  .about p {
    font-size: font_size(f18);
  }
}

@media screen and (max-width:750px) {
 .about .glitch-heading {
    font-size: font_size(f80);
    margin-bottom: $med-marg;
  }

  .about p {
    font-size: font_size(f18);
  }

  .contact .git {
    margin-bottom: 20px;
  }
}
@media screen and (max-width:450px) {
 .about .glitch-heading {
    font-size: font_size(f60);
  }
}

</style>
