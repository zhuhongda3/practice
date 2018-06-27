import Vue from 'vue'
import Router from 'vue-router'

// demo
import VuexCount from '@/demo/VuexCount'  //计数器
import DelItem from '@/demo/DelItem'      //树形结构，删除滑块
import UseGloble from '@/demo/UseGloble'  //全局注册的一个组件

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
