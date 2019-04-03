```
<template>
  <el-input v-model="input21" placeholder="普通输入框"></el-input>
  <el-input 
    v-model="input22" 
    placeholder="中等输入框" 
    size="medium">
  </el-input>
  <el-input 
    v-model="input23"
    size="small" 
    placeholder="小型输入框">
  </el-input>
  <el-input 
    v-model="input24"
    size="mini" 
    placeholder="超小型输入框">
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      input21: '',
      input22: '',
      input23: '',
      input24: '',
    }
  }
}
</script>
```