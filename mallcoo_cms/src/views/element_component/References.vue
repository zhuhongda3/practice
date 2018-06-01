<template>
  <div>
    <el-row>
      <el-col :span="24">
        <dl>
          <dt>参考资源</dt>
          <dd><a href="//element.eleme.io/#/zh-CN" target="_black">element 中文文档</a></dd>
          <dd><a href="//cn.vuejs.org/" target="_black">vue 中文文档</a></dd>
          <dd><a href="//lodash.com" target="_black">lodash 英文文档</a></dd>
          <dd><a href="//zh.nuxtjs.org/guide" target="_black">nuxt.js 中文文档</a></dd>
        </dl>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
dl {
  dd{
    margin-left: 0;
    padding: 5px 0;
    a{
      color: #999;
    }
  }
} 
</style>
