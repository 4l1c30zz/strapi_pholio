<template>
  <header id="site-header">
<div class="wrap boxed">
  <svg id="morph"  width="100" viewBox="0 300 1920 800" preserveAspectRatio="none">
         <path class="morph" d="M1-1C86.5,1.8,222.9,5.9,391,9c297.1,5.4,531.2,4.6,628,4c171.8-1,187.1-2.9,572-8c165.7-2.2,301.4-3.7,390.7-4.7C1321.4-0.1,661.2-0.6,1-1z"></path>
       </svg>

          <div class="logo">
          <router-link
            to="/"
            v-slot="{ href, route, navigate }"
          >
            <a  :href="href" @click="navigate"
              ><logo></logo></a
            >
          </router-link>
          </div>

        <ul class="nav">
          
        <li>
        <router-link
          to="/"
          v-slot="{ href, route, navigate }"
        >
          <a  :href="href" @click="navigate"
            >{{ route.name }}</a
          >
        </router-link>
        </li>

        <li class="mark_block_wrap">
        <router-link
          to="/blog"
          v-slot="{ href, route, navigate }"
          class="word"
        >
          <a  :href="href" @click="navigate"
            >{{ route.name }}</a
          >
        </router-link>
        <div class="mark yellow"></div>
        </li>
        
          <li v-for="category in categories" v-bind:key="category.id">
            <router-link
              :to="{ path: '/category/' + category.id }"
              :key="category.id"
            >
              {{ category.name }}
            </router-link>
          </li>
        </ul>
    </div>
  </header>
</template>

<script>
import gql from "graphql-tag";
import logo from "../assets/logo";
export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  components: {
    logo
  },
  apollo: {
    categories: gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `
  }
};

function stick (){
  let head = document.getElementById("site-header");
  let elem_height = head.offsetHeight;
  if( window.pageYOffset >= elem_height ) {
      head.classList.add("a");
    } else{
      head.classList.remove("a");
    }
}
window.onscroll =  function() {
  stick()
};
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
header {
    position: static;
    background: white;
    transition: all 0.3 ease;
    .wrap.boxed {
        width: 100%;
    }
    .logo {
        flex-basis: 30%;
        text-align: left;
        svg {
            max-width: 90px;
            margin: 0 auto;
            transition: all 0.3s ease;
        }
        path {
            fill: color(_black);
            stroke: color(_black);
        }
        a {
            display: block;
            text-align: left;
        }
    }
    .nav {
        flex-basis: 70%;
        @extend %flex-center-end;
        li {
            margin: 10px;
        }
    }

    &.a {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;
        background: magenta;
        .logo svg {
            max-width: 70px;
        }
    }
}
#morph {
    pointer-events: none;
        position: absolute;

}


</style>
