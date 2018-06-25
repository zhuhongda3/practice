import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: { //渲染
    count: 0,
    todos: [
      {id: 1, text:'xxx',done: true},
      {id: 2, text:'xxx',done: true}
    ]
  },
  getters: { //查找，计算state
    getCount: state => {
      return state.count;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  },
  mutations: { //同步，改变state的状态
    increment: state => {
      state.count++
    },
    decrement: state => {
      state.count--
    }
  },
  actions: { //同步或异步，提交mutations，可以在另一个actions中调度当前actions
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('increment')
      },2000)
    }
  }
})