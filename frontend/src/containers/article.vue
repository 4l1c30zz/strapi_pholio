<template>
  <div class="single">
    <div class="single-hero">
    <div
     v-if="article.image"
      id="banner"
       class="bck-cover bck-fixed  blur"
     :style="{ backgroundImage: `url('${api_url + article.image.url}')` }"
      >
       </div>
      <div class="info_wrap">
        <h1 class="heading">{{ article.title }}</h1>
        <div v-if="article.tech" class="tech">
          {{article.tech}}
        </div>
        <div class="btn_wrap wrap">
          <a v-if="article.live" class="btn col-2" :href="article.live" target="_blank">live </a>
          <a v-if="article.git" :href="article.git" target="_blank" class="btn col-2"> git </a>
        </div>
      </div>
     
    </div>
    <vue-markdown-it v-if="article.content" :source="article.content" class="body" />
  </div>
</template>

<script>
import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  name: 'Post',
  metaInfo: {
    title: 'Post',
    titleTemplate: '%s | 4l1c30zz Portfolio App'
  },
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
      query: gql `
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
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
.single{
  margin-top: 5vh;
}
.single .body {
  padding: $block_padding_desk;
  max-width: 900px;
  margin: 0 auto;
  min-height: 35vh;
  background: white;

  p {
    line-height: line_height(_bigger);
    margin-bottom: $med_marg;
  }
}


.info_wrap {
  text-align: center;
  position: absolute;
  h1 {
    padding: $inner_padd;
    background: color(_blue);
  }

  .tech {
    margin: 15px auto 0;
    background: color(_yellow);
    font-size: font_size(f18);
    text-align: center;
    font-weight: font_weight(bold);
    padding: $inner-padd;
    line-height: line_height(_default);
  }

  .btn_wrap {
    margin: 0 auto;
  }

  .btn {
    font-size: font_size(f20);
  }
}



  @media screen and (min-width:1330px) {
    
    .info_wrap {
      max-width: $cont_width;

      .tech {
        max-width: 700px;
      }

      .btn_wrap {
        max-width: 500px;
      }

    }
  }

 @media screen and (max-width:1330px) and (min-width:1024px) {
    .info_wrap {
      max-width: 90%;

      .tech {
        max-width: 600px;
      }

      .btn_wrap {
        max-width: 450px;
      }
    }
  }

 @media screen and (max-width:1024px) {
    .body {
      max-width: 70%;
    }

    .btn_wrap {
      max-width: 100%;
    }

    .info_wrap {
      max-width: 90%;

      .tech {
        max-width: 90%;
      }

      .btn_wrap {
        max-width: 80%;
      }
    }
  }

  @media screen and (max-width:750px) {
    .single{
  margin-top: 15vh;
}
    .body {
      max-width: 80%;
    }

    .btn_wrap {
      max-width: 100%;

    }

    .info_wrap {
      max-width: 90%;

      .tech {
        max-width: 85%;
      }

      .btn_wrap {
        max-width: 75%;
      }

      .btn {
        font-size: font_size(f18);
      }
    }
            .single{
  margin-top: 5vh;
}
  }

</style>
