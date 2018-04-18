```
<template>
  <div>
    <el-checkbox v-model="checked4" label="备选项1" border size="medium"></el-checkbox>
    <el-checkbox v-model="checked5" label="备选项2" border size="medium"></el-checkbox>
  </div>
  <el-checkbox-group v-model="checkboxGroup4" border>
    <el-checkbox label="备选项1" border></el-checkbox>
    <el-checkbox label="备选项2" border></el-checkbox>
  </el-checkbox-group>
  <el-checkbox-group v-model="checkboxGroup5" size="mini">
    <el-checkbox label="备选项1" border></el-checkbox>
    <el-checkbox label="备选项2" border disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data(){
    return {
      checked4: false,
      checked5: false,
      checkboxGroup4: [],
      checkboxGroup5: [],
    };
  }
}
</script>
```