<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>文献名</th>
          <th>链接</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>element 中文文档</td>
          <td><a href="//element.eleme.io/#/zh-CN" target="_black">element.eleme.io/#/zh-CN</a></td>
        </tr>
        <tr>
          <td>vue 中文文档</td>
          <td><a href="//cn.vuejs.org/" target="_black">cn.vuejs.org</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
table{
  width: 100%;
  th,td{
    border: 1px solid #000;
    height: 30px;
    text-align: center;
  }
  td{
    font-size: 14px;
    a{
      text-decoration: none;
      color: #666;
      font-size: 13px;
    }
  }
}
</style>
