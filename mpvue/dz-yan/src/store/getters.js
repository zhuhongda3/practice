const getters = {
  token: state => state.user.token,
  villageID:state =>1,
  loading:state => state.user.loading
}

export default getters