```
<template>
  <el-button :plain="true" @click="open5">可关闭消息</el-button>
</template>

<script>
  export default {
    methods: {
      open5(){
        this.$message({
          message: '这是一条可关闭的消息提示',
          type:'success',
          showClose: true
        });
      }
    }
  }
</script>
```