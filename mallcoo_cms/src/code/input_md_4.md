```
<template>
  <el-input v-model="input41" placeholder="请输入内容" class="el-input-length">
    <template slot="prepend">Http://</template>
  </el-input>
  <el-input v-model="input42" placeholder="请输入内容" class="el-input-length">
    <template slot="append">.com</template>
  </el-input>
  <el-input v-model="input43" placeholder="请输入内容" class="el-input-length">
    <el-select v-model="selectValue" slot="prepend" placeholder="请选择">
      <el-option label="餐厅名" value="1"></el-option>
      <el-option label="订单号" value="2"></el-option>
      <el-option label="用户电话" value="3"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      input41: '',
      input42: '',
      input43: '',
      selectValue: '',
    }
  }
}
</script>

<style>
.el-select {
  width: 130px;
}
</style>
```