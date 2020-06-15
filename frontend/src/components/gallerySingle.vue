<template>

  <div class="gallery wrap gal">
    <div
    v-for="item in items" :key="item.url"
    @click="class_toggle"
    class="col-3 col-center i"
    >
      <img :src="api_url + item.url" class="gallery_image"  />
      <h4 class="heading">{{item.caption}}</h4>
    </div>
    
    <div class="overlay" >
      
    <span
    @click="class_remove"
    class="close btn"
    >close</span>
    <span 
    @click="move_left"
    class="left btn arr"
    >
    left
    </span>
    <span 
    @click="move_right"
    class="right btn arr"
    >
    right
    </span>

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
  methods: {
   class_toggle: function (event) {
     let targ = event.target.closest('.i');
     targ.classList.toggle('a');
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
   move_right: function(){
     console.log("right arr clicked");
   },
   move_left: function(){
          console.log("left arr clicked");
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

let get_siblings = function(e){
  let siblings = [];
  if(!e.parentNode){
    return siblings;
  }
  let sibling = e.parentNode.firstChild;
  while (sibling) {
    if(sibling.nodeType == 1 && sibling !== e){
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}


</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
  .gallery{
    width: 100%;
    overflow: hidden;
    position: relative;
     .overlay{
        background: transparent;
        width: 0;
        height: 0;
        overflow: hidden;
        position: static;
        z-index: 0;
        transition: all 0.5s ease;
          .close{
            position: static;
            width: 0;
            height: 0;
            overflow: hidden;
            padding: 0;
            font-size: 0;
            transition: $trans-default;
          }
          .arr{
            width: 0;
            height: 0;
            padding: 0;
            font-size: 0;
            position: static;
            transition: $trans-default;
          }
      }
    &.a{
      .overlay{
        background: white;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 15;
         .close{
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
         .arr{
           padding: $inner_padd;
           font-size: font_size(f30);
           position: fixed;
           top: 50%;
           display: block;
           width: auto;
           height: auto;
           color: color(_black);
           background: color(_yellow);
            z-index: 55;
           &.left{
             left: 0;
           }
           &.right{
             right: 0;
           }
         }
      }
    }
    h4{
    background: color(_black);
    color: white;
    width:100%;
    padding: 5px 10px;
    text-align: left;
    position: relative;
    transition: $trans-default;
    }
      .i{
      position: relative;
      background: transparent;
      transition: all 0.3s cubic-bezier(0.895, 0.030, 0.685, 0.220);

      img{
      width: 100%;
      max-height: 30vw;
      min-height: 30vw;
      height: 30vw;
      object-fit: cover;
      object-position: center top;
      transition:  all 0.3s cubic-bezier(0.895, 0.030, 0.685, 0.220);
      }

      &.a{
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100vh;
      z-index: 20;
        img{
        height: 100%;
        max-height: 90vh;
        object-fit: scale-down;
        }
        h4{
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
</style>
