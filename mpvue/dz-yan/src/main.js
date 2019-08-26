import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.mixin({
  onLoad(){
    Object.assign(this.$data, this.$options.data())
  }
})

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
