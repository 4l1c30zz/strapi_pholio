<template>
  <div>
    <header id="site-header">
      <div class="wrap boxed">
        <div class="logo">
          <router-link to="/" v-slot="{ isActive,href, route, navigate }">
            <a :href="href" @click="navigate">
              <logo></logo>
            </a>
          </router-link>
        </div>

        <ul class="nav">
           <span @click="menuShowHide" class="menu_toggler heading">menu </span>
          <div class="nav_inner_i_wrap">

        <!--  <li class="mark_block_wrap default">
            <router-link
             to="/blog" v-slot="{ isActive, href, route, navigate }"
             class="word"
             >
              <a
               :class="[isActive ? ' router-link-active' : '']"
               :href="href"
                @click="navigate">{{ route.name }}</a>
            </router-link>
            <div class="mark yellow"></div>
          </li> -->

          <li  class="mark_block_wrap default"
           v-for="category in categories"
           v-bind:key="category.id">
            <router-link
             :to="{ path: '/category/' + category.id }"
             :key="category.id"
             class="word"
             >
              {{ category.name }}
            </router-link>
             <div class="mark yellow"></div>
          </li>
          </div>
        </ul>
      </div>
    </header>

  </div>
</template>

<script>
import gql from "graphql-tag";
import logo from "../assets/logo";

export default {
  name: "headerComponent",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql `
      query Categories {
        categories {
          id
          name
        }
      }
    `
  },
  components: {
    logo
  },
  mounted() {
    //callback on mounting to check the first position to avoid vier appearence on reload in the middle of the page
    sticky()
  },
  methods: {
    menuShowHide: function () {
      let mobileNavtogglerItems = document.querySelectorAll('.nav_inner_i_wrap, .menu_toggler');
      mobileNavtogglerItems.forEach(mobileNavtogglerItem => mobileNavtogglerItem.classList.toggle("a"));
    },

  }

};
//sticky header function
function sticky() {
  let siteHeader = document.getElementById("site-header");
  let siteHeaderHeight = siteHeader.offsetHeight;
  //if scrolled part is higher than header add class
  if (window.pageYOffset >= siteHeaderHeight) {
    siteHeader.classList.add("a");
  } else {
    siteHeader.classList.remove("a");
  }
}

//stick the header onscroll
window.onscroll = function () {
  sticky();
};

</script>
<style lang="scss">
@import "@/scss/_reset.scss";
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
@import "@/scss/_globals.scss";
@import "@/scss/_animatedMark.scss";
header {
  position: static;
  background: transparent;
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
      fill: color(_gray);
      stroke: color(_gray);
    }

    a {
      display: block;
      text-align: left;
    }
  }

  .nav {
    flex-basis: 70%;

    .nav_inner_i_wrap {
      @include flex-center-end;
    }

    .menu_toggler {
      display: none;
      top: -5%;
      text-align: right;
      transition: $trans_default;
    }

    li {
      margin: $med_marg;
    }

    a {
      font-size: font_size(f20);
      transition: $trans-default;
      background: transparent;
      padding: 5px 0;

      &.router-link-active {
        background: color(_yellow);

        &:hover {
          background: transparent;
        }
      }
    }
  }

  &.a {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    background: color(_magenta);

    .logo svg {
      max-width: 70px;
    }
  }
}

#morph {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  path {
    fill: color(_blue);
  }
}

 @media screen and (max-width:1024px) {
    #site-header {
      .nav {
        .menu_toggler {
          display: block;
          right: 0;
          top: 5%;
          padding: $inner_padd;
          z-index: 25;
          font-size: font_size(f20);
          position: relative;

          &:before,
          &:after {
            content: "";
            display: block;
            background: color(_black);
            width: 4px;
            height: 0px;
            position: absolute;
            top: -20vh;
            transition: $trans-default;
          }

          &:before {
            transform: rotate(40deg);
          }

          &:after {
            transform: rotate(-40deg);
          }

          &.a {
            font-size: 0;
            right: 3%;
            position: absolute;

            &:hover {
              transform: rotate(180deg) scale(1.3);
            }

            &:before,
            &:after {
              height: 25px;
              top: 0;
            }
          }
        }

        .nav_inner_i_wrap {
          @include flex-center-center-column;
          position: fixed;
          height: 100%;
          top: 0;
          right: -100vw;
          z-index: 20;
          background: color(_magenta);
          padding: 0 20px;
          transition: $trans-default;

          &.a {
            right: 0;
          }
        }
      }
    }
  }
</style>
