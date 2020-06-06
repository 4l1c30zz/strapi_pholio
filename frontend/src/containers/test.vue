<template>
  <div id="main">
    <h1 class="heading"> {{page.title}}</h1>

      <div class="about wrap boxed">
        <h1 class="heading col-2 glitch-heading"><span>{{ page.about['title'] }}</span></h1>
        <p class="col-2">{{page.about['txt'] }}</p>
      </div>

  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      page: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      routeParam: this.$route.params.id
    };
  },

  apollo: {
    page: {
      query: gql`
      query Pages($id: ID = 1) {
        page(id: $id) {
          id
          Title
            ...about
        }
      }

      fragment about on Page {
      about{
        id
        title
        txt
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

</style>
