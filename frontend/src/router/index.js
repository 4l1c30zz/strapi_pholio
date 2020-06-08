import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('../containers/home.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../containers/test.vue')
    },
  {
  path: "/article/:id",
    component: () => import('../containers/Article.vue')
},
{
  path: "/category/:id",
    component: () => import('../containers/Category.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
