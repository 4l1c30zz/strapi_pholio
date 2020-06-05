<template>
  <div class="gallery wrap gal">
    <div
    v-for="item in items" :key="item.url"
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

let single_gal_imgs = document.querySelectorAll('.gal .i');
console.log("here");
console.log(single_gal_imgs);
single_gal_imgs.forEach((single_gal_img)=>{
  single_gal_img.addEventListener('click',(event)=>{
    let targ = event.target.closest('.i');
    targ.classList.toggle('a');
    let siblings = get_siblings(targ);
    siblings.forEach((sib) => {
      sib.classList.remove('a');
    });
  });
});
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_functions.scss";
@import "@/scss/_mixins.scss";
.gallery{
  h4{
  background: color(_black);
  color: white;
  width:100%;
  padding: 5px 10px;
  text-align: left;
  }
  img{
    width: 100%;
  height: 30vw;
  object-fit: cover;
  object-position: center top;
  }
}
</style>
