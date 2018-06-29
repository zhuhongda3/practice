// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from 'axios'

import VueMoment from 'vue-moment'

Vue.use(VueMoment)

// import VueQuillEditor from 'vue-quill-editor'
// // require styles
import 'normalize.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// Vue.use(VueQuillEditor, /* { default global options } */)


Vue.prototype.$http = axios
Vue.use(ElementUI,{ size: 'small' })      //此处引入了全部的组件，也可以使用官网推荐的按需引入
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
