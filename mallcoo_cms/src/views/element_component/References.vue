<template>
  <div>
    <el-row>
      <el-col :span="12">
        <table>
          <thead>
            <tr>
              <th>参考网站</th>
              <th>链接</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>element 中文文档</td><td><a href="//element.eleme.io/#/zh-CN" target="_black">element.eleme.io/#/zh-CN</a></td>
            </tr>
            <tr>
              <td>vue 中文文档</td><td><a href="//cn.vuejs.org/" target="_black">cn.vuejs.org</a></td>
            </tr>
            <tr>
              <td>lodash 英文文档</td><td><a href="//lodash.com" target="_black">lodash.com</a></td>
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
  th,td{
    border: 1px solid #999;
    height: 30px;
    text-align: left;
    padding: 0 20px;
  }
  td{
    font-size: 14px;
    a{
      text-decoration: none;
      color: #666;
      font-size: 13px;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
