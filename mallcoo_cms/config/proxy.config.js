module.exports = {
  proxyList: {
    '/posts/': {    //需要代理的路径
      target: 'https://jsonplaceholder.typicode.com',  //需要代理的域名
      changeOrigin: true  //是否跨域
      // pathRewrite: {
      //     '^/apis': ''   //需要rewrite重写的,
      // }              
    }
  }
}
