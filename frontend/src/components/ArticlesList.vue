<template>
  <div class="wrap blog">
  <div
  v-for="article in Articles"
  class=" col-3 col-center"
  :key="article.id"
  >
          <router-link
            :to="{ path: '/article/' + article.id }"
          >
            <div class="inner">
                <img :src="api_url + article.image.url" />
              <div class="body">
                <span
                  v-if="article.category"
                  class="category tiny uppercase"
                >
                  {{ article.category.name }}
                </span>
                <h3
                v-if="article.tiitle"
                class="heading "
                >
                  {{ article.tiitle }}
                </h3>
                <span
                v-if="article.publish"
                class="date tiny bold"
                >
                  {{ article.publish }}
                </span>
                <p
                v-if="article.tech"
                class="tech medium normal"
                >
                  {{ article.tech }}
                </p>
            </div>
            </div>
          </router-link>
          <div class="wrap">
<a v-if="article.git" class="btn yellow" :href="article.git" target="_blank"> github > </a>
<a v-if="article.live" class="btn yellow" :href="article.live" target="_blank"> live > </a>
  </div>
  </div>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  props: {
    articles: Array
  },
  computed: {
    ArticlesCount() {
      return Math.ceil(this.articles.length);
    },
    Articles() {
      return this.articles.slice(0);
    },

  }
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
.wrap.blog{
  text-align:center;
  text-transform: uppercase;
  @extend %flex-start-between;
  img{
  height:250px;
  object-fit:cover;
  }
}
</style>
