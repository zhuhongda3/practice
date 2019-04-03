```
<template>
  <el-alert
    title="不可关闭的提示"
    type="success"
    :closable="false">
  </el-alert> 
  <el-alert
    title="自定义close-text"
    type="info"
    close-text="知道了">
  </el-alert> 
  <el-alert
    title="设置回调的alert"
    type="warning"
    @close="hello">
  </el-alert>      
</template>

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
```