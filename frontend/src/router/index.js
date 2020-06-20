import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta';
Vue.use(VueMeta);

Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../containers/home.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../containers/blog.vue')
  },
  {
    path: "/article/:id",
    component: () => import('../containers/article.vue')
  },
  {
    path: "/category/:id",
    component: () => import('../containers/category.vue')
  }
]





const router = new VueRouter({
  routes
})

export default router
