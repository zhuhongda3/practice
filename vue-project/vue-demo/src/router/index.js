import Vue from 'vue'
import Router from 'vue-router'

// import VueResource from 'vue-resource'
// Vue.use(VueResource)

import Login from '@/components/login'
import slotDemoTpt from '@/components/slotDemoTpt'
import main from '@/felink/main'

import VuexCount from '@/demo/VuexCount'  //计数器
import DelItem from '@/demo/DelItem'      //树形结构，删除滑块
import UseGloble from '@/demo/UseGloble'  //全局注册的一个组件
import UseUpLoad from '@/demo/UseUpLoad'  //全局注册的一个组件

import getData from '@/views/getData'

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
      path: '/useUpLoad',
      name: 'UseUpLoad',
      component: UseUpLoad
    },
    {
      path: '/vuexcount',
      name: 'VuexCount',
      component: VuexCount
    },
    {
      path: '/delitem',
      name: 'DelItem',
      component: DelItem
    },
    {
      path: '/usegloble',
      name: 'UseGloble',
      component: UseGloble
    },
  ]
})
