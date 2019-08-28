const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  shopInfo: state => state.user.shopInfo,
  isShow: state => state.user.isShow,
  // sign: state => state.user.sign,
  loading:state => state.user.loading,
  // loginCode:state => state.user.loginCode,
}

export default getters