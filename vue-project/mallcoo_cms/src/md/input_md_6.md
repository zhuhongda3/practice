```
<template>
  <el-input
    type="textarea"
    autosize 
    v-model="textarea2"
    placeholder="请选择内容">
  </el-input>
  <el-input
    type="textarea" 
    :autosize="{ minRows: 2, maxRows: 4}"
    v-model="textarea3"
    placeholder="请选择内容">
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      textarea2: '',
      textarea3: '',
    }
  }
}
</script>
```