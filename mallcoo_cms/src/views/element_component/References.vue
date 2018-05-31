<template>
  <div>
    <el-row>
      <el-col :span="24">
        <table>
          <thead>
            <tr>
              <th>参考资源</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="//element.eleme.io/#/zh-CN" target="_black">element 中文文档</a></td>
            </tr>
            <tr>
              <td><a href="//cn.vuejs.org/" target="_black">vue 中文文档</a></td>
            </tr>
            <tr>
              <td><a href="//lodash.com" target="_black">lodash 英文文档</a></td>
            </tr>
            <tr>
              <td><a href="//zh.nuxtjs.org/guide" target="_black">nuxt.js 中文文档</a></td>
            </tr>
          </tbody>
        </table>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
table{
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  th,td{
    border: 1px solid #999;
    height: 30px;
    text-align: left;
    padding: 0 20px;
  }
  td{
    font-size: 14px;
    a{
      color: #666;
      font-size: 13px;
      &:not(:hover){
        text-decoration: none;
      }
    }
  }
}
</style>
