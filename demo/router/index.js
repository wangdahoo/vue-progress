import Vue from 'vue'
import Router from 'vue-router'
import Examples from '@/components/Examples'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Examples',
      component: Examples
    }
  ]
})
