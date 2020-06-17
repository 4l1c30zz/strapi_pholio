<template>
  <div class="gallery wrap gal">
    <div class="i_wrap wrap">
      <div
      v-for="item in items" :key="item.url"
      @click="class_toggle"
      class="col-3 col-md-3 col-sm-2  col-center i"
      >
        <img :src="api_url + item.url" class="gallery_image"  />
        <h4 class="heading">{{item.caption}}</h4>
      </div>
    </div>
    <div class="overlay" >
    </div>
    <div class="overlay_controllers">
      <span
      @click="class_remove"
      class="close btn"
      >close</span>
      <span 
      @click="move_left"
      class="left btn arr"
      >
     <font-awesome-icon icon="chevron-left" size="sm"/>
     there
      </span>
      <span 
      @click="move_right"
      class="right btn arr"
      >
      there 
      <font-awesome-icon icon="chevron-right" size="sm"/> 
      </span>
    </div>
  </div>
</template>

<script>
import { get_siblings } from '../js/siblings';

export default {
  data: function() {
    return {
      api_url: process.env.VUE_APP_STRAPI_API_URL
    };
  },
  methods: {
    class_toggle: function (event) {
      let targ = event.target.closest('.i');
      targ.classList.add('a');
      let targ_parent = event.target.parentNode.closest('.gal');
      targ_parent.classList.add("a");
      let siblings = get_siblings(targ);
      siblings.forEach((sib) => {
        sib.classList.remove('a');
      });
   },

   class_remove: function(){
     document.querySelector(".gal").classList.remove("a");
     let gal_items = document.querySelectorAll(".gal .i");
     gal_items.forEach((gal_item) => {
        if(gal_item.classList.contains('a')){
          gal_item.classList.remove('a');
        }
     });
   },

  move_left: function(){
    let current_i = document.querySelector('.gal .i.a');
    let left_sib = current_i.previousSibling;
    if(typeof(left_sib) != 'undefined' && left_sib != null){
      current_i.classList.remove('a');
      left_sib.classList.add('a');
    }
    else{
       current_i.classList.remove('a');
       document.querySelector('.gal .i:last-child').classList.add("a");
    }
  },

    move_right: function(){
      let current_i = document.querySelector('.gal .i.a');
      let right_sib = current_i.nextSibling;
      if(typeof(right_sib) != 'undefined' && right_sib != null){
        current_i.classList.remove('a');
        right_sib.classList.add('a');
      }
      else{
       current_i.classList.remove('a');
       document.querySelector('.gal .i:first-child').classList.add("a");
      }
    }
 },

  props: {
    items: Array
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
 .gallery {
    width: 100%;
    overflow: hidden;
    position: relative;
    .overlay {
        background: transparent;
        width: 0;
        height: 0;
        overflow: hidden;
        position: static;
        z-index: 0;
        transition: width 0.5s ease;
    }
    .overlay_controllers {
        .close {
            position: static;
            width: 0;
            height: 0;
            overflow: hidden;
            padding: 0;
            font-size: 0;
            transition: all 0.4s ease 0.4s;
        }
        .arr {
            width: 0;
            height: 0;
            padding: 0;
            font-size: 0;
            position: static;
            &.left {
                transition: all 0.3s ease 0.1s;
            }
            &.right {
                transition: all 0.2s ease 0.2s;
            }
        }
    }

    &.a {
        width: 100%;
        .overlay {
            background: white;
            width: 100%;
            height: 100%;
            overflow: hidden;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 15;
        }
        
        .overlay_controllers {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 35;
            .close {
                background: color(_yellow);
                padding: $inner_padd;
                font-size: font_size(f30);
                color: color(_black);
                width: auto;
                height: auto;
                display: block;
                position: fixed;
                top: 5%;
                right: 0;
                z-index: 25;
                cursor: pointer;
            }
            .arr {
                padding: $inner_padd;
                font-size: font_size(f30);
                position: fixed;
                top: 50%;
                display: block;
                width: auto;
                height: auto;
                color: color(_black);
                background: color(_yellow);
                cursor: pointer;
                z-index: 55;
                &.left {
                    left: 0;
                }
                &.right {
                    right: 0;
                }
            }
        }
    }

    h4 {
        background: color(_black);
        color: white;
        width: 100%;
        padding: 5px 10px;
        text-align: left;
        position: relative;
    }
    .i {
        position: relative;
        background: transparent;
        img {
            width: 100%;
            max-height: 30vw;
            min-height: 30vw;
            height: 30vw;
            object-fit: cover;
            object-position: center top;
        }
        &.a {
            position: fixed;
            top: 0;
            left: 0;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            z-index: 20;
            img {
                height: 100%;
                max-height: 90vh;
                object-fit: scale-down;
                object-position: center center;
            }
            h4 {
                position: absolute;
                bottom: 0;
                left: 0;
            }
        }
    }
}

</style>
