// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import 'es6-promise/auto';

import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.$http = axios;

import App from "./App";

import router from "./router";

import Highlight from "../path/to/highlight";

Vue.config.productionTip = false;

Vue.use(Highlight);  // 代码高亮
Vue.use(ElementUI);  // 

import {store} from './store/index.js';

import "normalize.css/normalize.css";
import "./assets/layout.scss";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
