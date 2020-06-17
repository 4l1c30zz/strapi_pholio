<template>
  <div class="single">
    <div
      v-if="article.image"
      id="banner"
      class="bck-cover bck-fixed single-title"
      :data-src="api_url + article.image.url"
      :style="{ backgroundImage: `url('${api_url + article.image.url}')` }"
    >
    <!-- <img :src="api_url + article.image.url" /> -->
    <div class="info_wrap">
      <h1 class="heading" >{{ article.title }}</h1>
      <div
      v-if="article.tech"
       class="tech"> 
        {{article.tech}}
      </div>
      <div class="btn_wrap wrap">
        <a
          v-if="article.live"
         class="btn col-2"
          :href="article.live"
          target="_blank"
          >live  </a>
        <a  
        v-if="article.git"
        :href="article.git"
        target="_blank"
          class="btn col-2"
           > git  </a>
      </div>
   </div>
    </div>
        <vue-markdown-it
          v-if="article.content"
          :source="article.content"
          class="body"
        />
  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      article: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },
  components: {
    VueMarkdownIt
  },
  apollo: {
    article: {
      query: gql`
      query Articles($id: ID!) {
        article(id: $id) {
          id
          title
          content
          publish
          git
          live
          tech
          image {
            url
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
@import "@/scss/_reset.scss";
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
.single .body {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    p {
        line-height: line_height(_bigger);
        margin-bottom: $med_marg;
    }
}

body {
    &.tablet {
        .body {
            max-width: 70%;
        }
        .btn_wrap {
            max-width: 100%;
        }
    }
    &.mobile {
        .body {
            max-width: 80%;
        }
        .btn_wrap {
            max-width: 100%;
        }
    }
}

.info_wrap {
    h1 {
        padding: $inner_padd;
        background: color(_blue);
    }
    .tech {
        background: color(_yellow);
        margin-top: $bigger_marg;
        font-size: font_size(f18);
        text-align: center;
        font-weight: font_weight(bold);
        padding: $inner-padd;
    }
}

</style>
