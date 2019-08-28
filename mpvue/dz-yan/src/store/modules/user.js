const state = {
  token: '',
  sign: '',
  userInfo: {},
  shopInfo: {},
  isShow: null,
  loading: 0,
  loginCode: '',
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  // SET_SIGN: (state, sign) => {
  //   state.sign = sign
  // },
  // SET_LOGINCODE: (state, loginCode) => {
  //   state.loginCode = loginCode
  // },
  SET_USER_INFO: (state, userinfo) => {
    state.userInfo = userinfo
  },
  SET_SHOP_INFO: (state, shopinfo) => {
    state.shopInfo = shopinfo
  },
  SET_ISSHOW: (state, isShow) => {
    state.isShow = isShow
  },
  loadingAddCount: (state, n = 0) => {
    state.loading += n
  },
  loadingReduceCount: (state, n = 0) => {
    if (n < 0) {
      state.loading = 0
    } else {
      state.loading -= n
    }
  },
}

const actions = {
  setToken({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  // setSign({ commit }, sign) {
  //   commit('SET_SIGN', sign)
  // },
  setUserInfo({ commit }, userinfo) {
    commit('SET_USER_INFO', userinfo)
  },
  setShopInfo({ commit }, shopinfo) {
    commit('SET_SHOP_INFO', shopinfo)
  },
  setIsShow({ commit }, isShow) {
    commit('SET_ISSHOW', isShow)
  },
  // setLoginCode({ commit }, loginCode) {
  //   commit('SET_LOGINCODE', loginCode)
  // },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
