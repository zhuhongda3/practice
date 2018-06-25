// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//axios
import axios from 'axios';
Vue.prototype.$http = axios;

//wx sdk
import wx from 'weixin-js-sdk'
Vue.use(wx)

//use store
import {store} from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //use siggle store, not modules
  components: { App },
  template: '<App/>'
})
