
  <template>
  <div class="contact wrap boxed">
  <h2 class="heading col-1">{{ item.title }}</h2>
  <a class="mail link col-1" :href="item.email">{{item.email}}</a>
  <div class="col-1">
  <a :href="item.git" class="btn btn-default col-2">
  GitHub
  </a>
  <a :href="item.insta" class="btn btn-default col-2">
  Instagram
  </a>
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
    item: Object
  },
  computed: {
    ItemsCount() {
      return Math.ceil(this.items.length);
    },
    Items() {
      return this.items.slice(0);
    },

  }
};




</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";

</style>
