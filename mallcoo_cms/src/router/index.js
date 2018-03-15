import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/component/Index'
import Install from '@/components/component/Install'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/component/install',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/component/install',
          component: Install
        },
      ]
    }
  ]
})
