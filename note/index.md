## javascript一些小技巧
- [33-js-concepts](https://github.com/leonardomso/33-js-concepts)
- [js小技巧](https://www.jb51.net/article/58090.htm)

### 生态
[TypeScript](http://www.typescriptlang.org/)
[vue](https://github.com/vuejs)
[react](https://github.com/facebook?utf8=%E2%9C%93&q=react&type=&language=)

### router完整的解析流程
```
- 导航被触发
- 在失活的组件里调用离开守卫 (beforeRouteLeave)
- 调用全局的 beforeEach 守卫
- 在重用的组件里调用重用的 beforeRouteUpdate 守卫（2.2+）
- 在路由配置里调用 beforeEnter
- 解析异步路由组件
- 再被激活的组件里调用 beforeRouteEnter
- 调用全局的 beforeResolve 守卫（2.5+）
- 导航被确认
- 调用全局的 afterEach 钩子
- 触发 DOM 更新
- 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数
```

### to和name的属性：params,query,hash...

```
beforeRouteEnter(to,from,next){
  next((vm)=>{vm.methodsName()})
}

beforeRouteUpdate(to,from,next){
  next()
}
```

### $route对象的属性有哪些
```
- fullPath
- path
- hash
- query
- params
- matched
- name
- redirectedFrom
```

## 开发书籍
- [开发书籍](https://github.com/justjavac/free-programming-books-zh_CN)

<!-- - [TypeScript](https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html) -->

### 兼容性、hack参考
- [caniuse](https://caniuse.com/)
- [css-tricks](https://css-tricks.com/)
- [cssreference](https://cssreference.io/)
- [cssguidelin](https://cssguidelin.es/)
- [bem](http://getbem.com)
- [sass](http://sass-lang.com)
- [postcss](https://segmentfault.com/a/1190000014782560)

### flex参考
- [阮一峰-语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [阮一峰-实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [蔡宝坚-flex布局详解](http://caibaojian.com/flexbox-guide.html)
- [css88-flex布局详解](https://www.css88.com/archives/8629)

### Grid参考
- [css88-Grid布局详解](https://www.css88.com/archives/8510)
- [xiaohuochai-Grid布局详解](https://www.cnblogs.com/xiaohuochai/p/7083153.html)


### css面试题参考
- [75道css面试题](http://www.bslxx.com/a/mianshiti/tiku/2017/1218/1519.html)
- [45道css基础面试题](https://www.sohu.com/a/223556954_655394)
- [前端html和css面试题](https://blog.csdn.net/weixin_36774307/article/details/78465382)
- [css面试题总结](https://www.cnblogs.com/horanly/p/6264178.html)