```
<template>
  <el-input v-model="input11" placeholder="请输入内容"></el-input>
  <el-input 
    v-model="input12" 
    disabled
    placeholder="搜索框禁用">
  </el-input>
  <el-input
    v-model="input13" 
    clearable
    placeholder="输入内容可清除">
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      input11: '',
      input12: '',
      input13: '',
    }
  }
}
</script>
```