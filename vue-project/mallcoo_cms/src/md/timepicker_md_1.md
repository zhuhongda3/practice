```
<template>
  <el-time-picker
    readonly
    v-model="value"
    placeholder="选择时间">
  </el-time-picker>
    <el-time-picker
    disabled
    v-model="value6"
    placeholder="选择时间">
  </el-time-picker>
</template>

<script>
export default {
  data(){
    return {
      value: new Date(2018, 3, 22, 18, 40),
      value6: ''
    };
  }
}
</script>
```