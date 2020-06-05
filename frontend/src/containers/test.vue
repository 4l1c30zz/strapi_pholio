<template>
  <div id="main">
    <h1 class="heading"> {{page.title}}</h1>

    <div class="about wrap boxed">
      <h1 v-if="page.about.title"  class="heading col-2 glitch-heading"><span>{{ page.about.title }}</span></h1>
      <p   v-if="page.about.txt"  class="col-2">{{page.about.txt }}</p>
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
          ...contact
          ...about
        }
      }

      fragment about on Page{
        about{
          id
          title
          txt
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

</style>
