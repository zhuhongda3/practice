```
<template>
  <el-button type="text" @click="open5">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script>
```