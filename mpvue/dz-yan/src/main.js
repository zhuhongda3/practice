import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'

import common from "@/utils/common";
// import request from "@/utils/request";

Vue.prototype.$common = common;
// Vue.prototype.$http = request;

Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false
Vue.mixin({
  // onLoad(){
  //   Object.assign(this.$data, this.$options.data())
  // }
  onUnload() {
    Object.assign(this, this.$options.data())
  },
  methods: {
    gotoPage(e){
      let url = e.mp.currentTarget.dataset.url
      this.$common.gotoPage(url)
    }
  }
})

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
