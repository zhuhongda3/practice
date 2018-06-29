import Vue from 'vue'
import Router from 'vue-router'

// import VueResource from 'vue-resource'
// Vue.use(VueResource) 

import Login from '@/components/login'
import slotDemoTpt from '@/components/slotDemoTpt'
import main from '@/felink/main'

import getData from '@/views/getData'
import EditPost from '@/views/EditPost'
import PostDetail from '@/views/PostDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/getdata',
      name: 'getData',
      component: getData
    },
    {
      path: '/',
      name: 'EditPost',
      component: EditPost,
      props: (route) => ({ query: route.query.id })
    },
    {
      path: '/postdetail',
      name: 'PostDetail',
      component: PostDetail
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
    }
  ]
})
