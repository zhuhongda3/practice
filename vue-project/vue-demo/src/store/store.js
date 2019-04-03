import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  //渲染, (可充当全局data)
  state: {
    count: 0,
    todos: [
      {id: 1, text:'xxx',done: true},
      {id: 2, text:'xxx',done: true}
    ]
  },
   //查找，计算state，（可充当计算属性computed）
  getters: {
    getCount: state => {
      return state.count;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    }
  },
  //同步，改变state的状态,v代表载荷，（可充当actions中间量或者方法methods）
  mutations: {
    increment: (state,v) => {
      state.count += v;
    },
    decrement: state => {
      state.count--;
    }
  },
   //同步或异步（axios,setTimeout,setInterval），提交mutations，可以调度(dispatch)当前actions中的另一个actions
  actions: {
    decrementAsync({commit}){
      setTimeout(()=>{
        commit('decrement');
      },1000)
    },
    incrementAsync({commit,dispatch},v){
      setTimeout(()=>{
        commit('increment',v);
        dispatch('decrementAsync');
      },1000)
    }
  }
})