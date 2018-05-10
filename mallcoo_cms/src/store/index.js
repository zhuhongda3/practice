import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    goodsList: []
  },
  getters: {

  },
  mutations: {
    add: state => state.number++
  },
  actions: {

  }
});