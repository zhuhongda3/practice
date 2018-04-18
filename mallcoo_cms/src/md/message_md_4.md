```
<template>
  <el-button :plain="true" @click="open6">文字居中的消息</el-button>
</template>

<script>
  export default {
    methods: {
      open6(){
        this.$message({
          message: '这是一条居中的消息提示',
          type:'success',
          center: true
        });
      }
    }
  }
</script>
```