import Vue from 'vue'
import Router from 'vue-router'
import Home from './node_modules/@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './node_modules/@/views/About.vue')
    }
  ]
})
