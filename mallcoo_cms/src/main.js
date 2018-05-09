// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import "normalize.css/normalize.css";

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

import App from "./App";

import router from "./router";

import Highlight from "../path/to/highlight";

Vue.config.productionTip = false;

Vue.use(Highlight);  // 代码高亮
Vue.use(ElementUI);  // 饿了么UI组件

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
