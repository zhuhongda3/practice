const state = {
  name: '',
  token: '',
  loading: 0
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  loadingAddCount:(state, n = 0)=>{
    state.loading += n
  },
  loadingReduceCount:(state, n = 0) =>{
    if(n<0)
    {
      state.loading = 0;
    }
    else{
      state.loading -= n
    }
  }
}

const actions = {
  getName() {
    setTimeout(() => {
      commit('SET_NAME', '123')
    }, 2000)
  },
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
