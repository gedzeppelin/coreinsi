import Vue from 'vue'
import Router from 'vue-router'
import InfoView from './views/InfoView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'InfoView',
      component: InfoView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(
        /* webpackChunkName: "about" */
        './views/Login.vue'
      )
    }
  ]
})
