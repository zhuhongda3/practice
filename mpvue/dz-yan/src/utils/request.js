import store from '@/store'
import common from '@/utils/common'

const Fly = require('flyio/dist/npm/wx')
// const Promise = require('es6-promise').Promise
var fly = new Fly()

/**
 * fly官方文档：https://github.com/wendux/fly
 */

//request拦截器
fly.interceptors.request.use(request => {
  if (!store.getters.token) {
    // request.headers['login_key'] = store.getters.token
    common.gotoPage('/pages/login', 'redirect')
  }
  // loading --start
  startLoading()
  return request
})

//response拦截器
fly.interceptors.response.use(
  response => {
    // loading --end'
    endLoading()
    if (response && response.data && response.data.Code != 1 && response.data.Code < 10000) {
      if (response.data.Message) {
        common.showToast(response.data.Message)
      }
    }
    return response
  },
  err => {
    endLoading()
    if (err.response) {
      switch (err.response.status) {
        case 401:
          common.gotoPage('/pages/login', 'redirect')
          break
        case 403:
          common.showToast('没有权限！')
          break
        default:
          break
      }
    }
    return Promise.reject(err)
  }
)

const startLoading = function() {
  store.commit('user/loadingAddCount', 1)
  var lcount = store.getters.loading
  if (lcount <= 1) {
    wx.showLoading({
      title: '加载中',
      mask: true,
    })
  }
}

const endLoading = function() {
  store.commit('user/loadingReduceCount', 1)
  var lcount = store.getters.loading
  if (lcount <= 0) wx.hideLoading()
  else {
    setTimeout(() => {
      store.commit('user/loadingReduceCount', -1)
      wx.hideLoading()
    }, 5000)
  }
}

// 请求基地址
fly.config.baseURL = process.env.API_ROOT
console.log(fly.config.baseURL)

// 请求超时
fly.config.timeout = 5000
//设置公共的Get参数
let qs = require('qs')
const request = function(opts) {
  // console.log(qs.stringify({data: opts.data}))
  return new Promise((resolve, reject) => {
    return (
      fly
        //.request(opts.url, { data: opts.data }, { method: 'get', ...opts.options })
        // .get(opts.url + '?data=' + encodeURIComponent(JSON.stringify(opts.data)))
        .request(opts.url, 'data=' + encodeURIComponent(JSON.stringify(opts.data)), { method: 'get', ...opts.options })
        .then(res => {
          resolve(res.data)
        })
        .catch(e => {
          reject(e)
        })
    )
  })
}

export default request
