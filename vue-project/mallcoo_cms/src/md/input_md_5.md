```
<template>
  <el-input
    type="textarea" 
    :rows="2"
    v-model="textarea1"
    placeholder="请选择内容">
  </el-input>
</template>

<script>
export default {
  data(){
    return {
      textarea1: '',
    }
  }
}
</script>
```