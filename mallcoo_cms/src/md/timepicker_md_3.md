```
<template>
  <el-time-picker
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
  <el-time-picker
    v-model="value3"
    arrow-control
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
</template>

<script>
export default {
  data(){
    return {
      value2: new Date(2018, 3, 22, 18, 40),
      value3: new Date(2018, 3, 22, 18, 40),
    };
  }
}
</script>
```