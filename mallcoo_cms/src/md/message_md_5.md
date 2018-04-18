```
<template>
  <el-button :plain="true" @click="open7">使用HTML片段</el-button>
</template>

<script>
  export default {
    methods: {
      open7(){
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>
```