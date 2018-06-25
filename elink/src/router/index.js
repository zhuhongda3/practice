import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// demo
import CountItem from '@/demo/CountItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    //demo
    {
      path: '/count',
      name: 'CountItem',
      component: CountItem
    }
  ]
})
