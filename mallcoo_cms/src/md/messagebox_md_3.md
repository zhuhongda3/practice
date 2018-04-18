```
<template>
  <el-button type="text" @click="open3">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /正则验证字符(可以在此处写正则验证,避免单双引号嵌套可以使用es6的字符串模板)/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
  }
</script>
```