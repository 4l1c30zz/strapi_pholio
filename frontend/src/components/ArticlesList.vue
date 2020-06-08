<template>

<div class="wrap blog">
  <div
  v-for="article in Articles"
  class=" col-3 col-center"
  :key="article.id"
  >
    <div class="inner">
      <div class="media">
       <img :src="api_url + article.image.url" />
      </div>
      <div class="body">
        <h3
        v-if="article.tiitle"
        class="heading"
        >
        <span class="mark magenta">
         {{ article.tiitle }}
         </span>
        </h3>
        <p  
        v-if="article.tech"
        :inner-html.prop="article.tech  | wrap"
        class="tech medium normal"
        >
        </p>
        <router-link
        :to="{ path: '/article/' + article.id }"
        class="link blue"
        > 
          more
        </router-link>
      </div>
    </div>
    <div class="wrap">

      <h4
        v-if="article.category"
        class="category tiny heading"
      >
      {{ article.category.name }}
      </h4>
      <a
        v-if="article.git"
        class="btn"
        :href="article.git"
        target="_blank"
      >
       github >
      </a>
      <a
        v-if="article.live"
        class="btn magenta"
        :href="article.live" 
        target="_blank"
      > 
       live > 
      </a>

    </div>
  </div>
</div>

</template>


<script>

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
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

  },

  filters: {
  wrap: function (value) {
    if (!value) return ''
    value = value.toString()
      let post_tech_arr = value.split(" ")
      let post_tech_items = post_tech_arr.filter((el)=>{
       return el 
      })
      let  html = ''
      for (var i = 0; i < post_tech_items.length; i++){ 
        html += '<span class="mark yellow">' + post_tech_items[i] + '</span>'
      }
      return html
  }
}
};

</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";

.wrap.blog {
text-align: center;
text-transform: uppercase;
@extend %flex-start-between;
  .wrap {
  padding: 0;
    > a {
    flex-basis: calc(50% - 40px);
    margin: 0 5px;
    }
    h4{
      flex-basis: 100%;
      margin: 10px auto;
    }
  }
}

.blog .inner {
  height: 100%;
  max-height: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  max-height: 54vh;
  border: 5px solid black;
    > a {
        display: block;
        height: 100%;
    }
    .media {
        overflow: hidden;
        max-height: 55vh;
        img {
            object-fit: cover;
            height: 60vh;
        }
        &:after {
            background: url("/wp-content/uploads/2020/05/whitenoise-400x400-1.jpg");
            opacity: 0.7;
            content: "";
            height: 300%;
            left: -50%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
    }
    &:hover .media:after {
        position: absolute;
        top: -100%;
        width: 300%;
        opacity: 0.5;
        animation: grain 8s steps(10) infinite;
    }

    .body {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;
        height: 100%;
        .mark {
            padding: 5px;
            margin: 5px;
        }

        p {
            z-index: 2;
            position: relative;
            padding: 10px;
            margin-bottom: 0;
            line-height: 1em;
            @extend %flex-center-center;
        }
        .link{
          max-width: 60px;
          margin: 0 auto;
          padding: 5px;
          transform: scale(1) rotate(0deg);
           transition: $trans-default;
          &:hover{
           transform: rotate(180deg) scale(1.2);
          }
        }
    }
}
@keyframes grain {
    0%,
    100% {
        transform: translate(-5%, -10%);
    }
    10% {
        transform: translate(0%, -5%);
    }
    20% {
        transform: translate(-10%, -15%);
    }
    30% {
        transform: translate(-20%, -0%);
    }
    40% {
        transform: translate(-25%, -10%);
    }
    50% {
        transform: translate(0%, -5%);
    }
    60% {
        transform: translate(-10%, 0%);
    }
    70% {
        transform: translate(-20%, -5%);
    }
    80% {
        transform: translate(0%, -15%);
    }
    90% {
        transform: translate(-10%, -20%);
    }
    100% {
        transform: translate(0%, -5%);
    }
}

</style>

