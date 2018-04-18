```
<template>
  <el-checkbox-group v-model="checkList1">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data(){
    return {
      checkList1: ['复选框 A','选中且禁用'],
    };
  }
}
</script>
```