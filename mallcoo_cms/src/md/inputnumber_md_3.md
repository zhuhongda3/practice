```
<template>
  <el-input-number v-model="num4"></el-input-number>
  <el-input-number v-model="num5" size="medium"></el-input-number>
  <el-input-number v-model="num6" size="small"></el-input-number>
  <el-input-number v-model="num7" size="mini"></el-input-number>
</template>

<script>
export default {
  data(){
    return {
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1
    };
  }
}
</script>
```