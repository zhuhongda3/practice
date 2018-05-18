import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Login from '@/components/login'
import slotDemoTpt from '@/components/slotDemoTpt'
import main from '@/felink/main'
import getData from '@/components/getData'

Vue.use(VueResource) 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/getData',
      component: getData
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/slotDemoTpt',
      name: 'slotDemoTpt',
      component: slotDemoTpt
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/getData',
      name: 'getData',
      component: getData
    }
  ]
})
