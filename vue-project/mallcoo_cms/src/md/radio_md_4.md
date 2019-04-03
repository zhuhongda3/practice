```
<template>
  <el-radio v-model="radio6" label="1" border>备选项</el-radio>
  <el-radio v-model="radio6" label="2" border>备选项</el-radio>

  <el-radio-group v-model="radio7" size="medium">
    <el-radio label="1" border>备选项</el-radio>
    <el-radio label="2" border>备选项</el-radio>
  </el-radio-group>

  <el-radio-group v-model="radio8" disabled>
    <el-radio label="1" border>备选项</el-radio>
    <el-radio label="2" border>备选项</el-radio>
  </el-radio-group>

  <el-radio-group v-model="radio9">
    <el-radio label="1" border>备选项</el-radio>
    <el-radio label="2" border size="small" disabled>备选项</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  data(){
    return {
      radio6: '1',
      radio7: '1',
      radio8: '1',   
      radio9: '1',   
    };
  }
}
</script>
```