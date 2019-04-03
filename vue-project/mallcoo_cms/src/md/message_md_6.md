```
<template>
  <el-button :plain="true" @click="open8">自定义提示icon</el-button>
</template>

<script>
  export default {
    methods: {
      open8(){
        this.$message({
          message: '这个消息的icon是自定义的',
          iconClass: 'el-icon-delete'
        });
      }
    }
  }
</script>
```