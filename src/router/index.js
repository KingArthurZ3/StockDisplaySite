import Vue from 'vue'
import Router from 'vue-router'
import MainDisplay from '@/components/display-site'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'display-site',
      component: MainDisplay
    }
  ]
})
