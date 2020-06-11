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
     let siblings = get_siblings(targ);
     siblings.forEach((sib) => {
       sib.classList.remove('a');
     });
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
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      z-index: 99;
      background: white;
      height: 100vh;
      &::after{
        content: "close";
        background: color(_yellow);
        padding: 10px;
        font-weight: font_weight(bolder);
        font-family: font(lined_font);
        text-align: center;
        font-size: font_size(f18);
        cursor: pointer;
        position: absolute;
        top: 5%;
        right: 0;
      }
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
