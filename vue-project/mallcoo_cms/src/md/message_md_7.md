```
<template>
  <el-button :plain="true" @click="open9">自定义关闭时间，消息弹出1s后自动关闭</el-button>
</template>

<script>
  export default {
    methods: {
      open9(){
        this.$message({
          message: '这个消息的icon是自定义的',
          duration: '1000'
        });
      }
    }
  }
</script>
```