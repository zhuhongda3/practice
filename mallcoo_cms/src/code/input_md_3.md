```
<template>
  <div>
    属性方式：
  <el-input 
    v-model="input31"
    suffix-icon="el-icon-date" 
    placeholder="请选择日期">
  </el-input>
  <el-input 
    v-model="input32"
    prefix-icon="el-icon-search" 
    placeholder="请输入内容">
  </el-input>
  </div>
  <br>
  <div>
    slot方式：
    <el-input 
      v-model="input33" 
      placeholder="请选择日期">
      <i slot="suffix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <el-input 
      v-model="input34" 
      placeholder="请输入内容">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
  </div>
</template>

<script>
export default {
  data(){
    return {
      input31: '',
      input32: '',
      input33: '',
      input34: '',
    }
  }
}
</script>
```