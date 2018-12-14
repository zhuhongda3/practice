### 生态

[vue](https://github.com/vuejs)

### router完整的解析流程
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
- fullPath
- path
- hash
- query
- params
- matched
- name
- redirectedFrom