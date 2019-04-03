```
<template>
  <el-color-picker v-model="color4"></el-color-picker>
  <el-color-picker v-model="color4" size="medium"></el-color-picker>
  <el-color-picker v-model="color4" size="small"></el-color-picker>
  <el-color-picker v-model="color4" size="mini"></el-color-picker>
</template>

<script>
export default {
  data(){
    return {
      color4: '#409EFF'
    };
  }
}
</script>
```