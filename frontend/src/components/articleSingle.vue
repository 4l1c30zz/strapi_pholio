<template>

<div class="wrap blog min-height-full wrap boxed">
  <div
  v-for="article in Articles"
  @mouseover="class_add"
  @mouseleave="class_remove"
  class=" col-3 col-md-2 col-sm-1 col-center i"
  :key="article.id"
  >
    <div class="inner">
      <div class="media">
        <picture>
          <source :srcset=" article.image.url|imageWebp" type="image/webp">
          <img :src="api_url + article.image.url" class="gallery_image" />
        </picture>
      </div>
      <div class="body">
        <h3
        v-if="article.title"
        class="heading mark_block_wrap"
        >
        <span class="word title">
         {{ article.title }}
         </span>
         <span class="mark magenta">
         </span>
        </h3>
        <p  
        v-if="article.tech"
        :inner-html.prop="article.tech  | wrap"
        class="tech mark_block_wrap medium normal"
        >
        </p>
        <router-link
        :to="{ path: '/article/' + article.id }"
        class="link mark_block_wrap"
        > 
        <span class="word">
          more
        </span>
          <span class="mark blue">
          </span>
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

import { get_siblings } from '../js/particals/siblings';

export default {
  data: function() {

    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      hover: false,
    };

  },

  methods: {

   class_add: function (event) {   
     let targ = event.target.closest('.i');
     targ.classList.add('a');
     let siblings = get_siblings(targ);
     siblings.forEach((sib) => {
       sib.classList.remove('a');
     });

   },
    class_remove: function (event) {   
     let targ = event.target.closest('.i');
     targ.classList.remove('a');
   }

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
      html += '<span class="mark_block_wrap"><span class="word">' + post_tech_items[i] + '</span><span class="mark yellow"></span></span>'
    }
      return html
    },
    imageWebp: function(value , ){
      let splittedVal = value.split('_')[0];
      let imageUrl = splittedVal + ".webp";
      let api_url = process.env.VUE_APP_STRAPI_API_URL;
      let fullUrl = api_url + imageUrl;
      return fullUrl;
    }
  },

};


</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";

.wrap.blog {
  @include flex-start-between;
  text-align: center;
  text-transform: uppercase;

  .wrap {
    padding: 0;
    margin-top: $med_marg;
    width: 100%;

    >.btn {
      flex-basis: calc(50% - 30px);
      width: 100%;
      margin: 0;

      &:hover {
        transform: scale(0.9) translateY(10px) rotate(5deg);
      }
    }

    h4 {
      flex-basis: 100%;
      padding: 0 0 5px;
    }
  }
}

#app .blog .i {
  margin: 15px 10px;

  .body {
    @include flex-center-center-column;
    position: absolute;
    top: 0;
    left: -100vw;
    width: 100%;
    max-width: 100%;
    height: 100%;
    transition: $trans-default 0.3s;
  }

  &.a {
    .body {
      left: 0;
    }

    .media:after {
      position: absolute;
      top: -100%;
      width: 300%;
      opacity: 0.5;
      animation: grain 8s steps(10) infinite 0.3s;
    }
  }
}

.blog .inner {
  height: 100%;
  position: relative;
  overflow: hidden;
  max-height: 54vh;
  border: 5px solid black;
  width: 100%;

  >a {
    display: block;
    height: 100%;
  }

  .media {
    overflow: hidden;
    max-height: 55vh;

    img {
      object-fit: cover;
      height: 60vh;
      width: 100%;
    }

    &:after {
      background: url("../assets/whitenoise-400x400-1.jpg");
      opacity: 0.7;
      content: "";
      height: 300%;
      left: -50%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
  }

  p {
    z-index: 2;
    position: relative;
    padding: $inner_padd;
    margin-bottom: 0;
    line-height: 1em;
    @include flex-center-center;
  }

  .heading {
    margin: 0 auto;
    max-width: 80%;
  }

  .link {
    max-width: 60px;
    margin: 0 auto;
    padding: 5px;
    transform: scale(1) rotate(0deg);
    transition: $trans-default;

    &:hover {
      transform: rotate(180deg) scale(1.4);
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
}

@media screen and (max-width:1024px) {
  #app .blog .i {
    margin: 20px 10px;

    &.a {
      .body {
        left: 0;
      }
    }
  }
}

@media screen and (max-width:750px) {
  #app .blog .i {
    margin: 10px 10px 25px;
  }

 .blog .inner {
    max-height: 45vh;

    .media img {
      height: 46vh;
    }
  }
}

</style>

