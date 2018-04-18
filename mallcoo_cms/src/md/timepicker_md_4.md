```
<template>
  <el-time-select
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="任意时间点">
  </el-time-select>
  <el-time-select
    v-model="endTime"
    arrow-control
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"
    placeholder="任意时间点">
  </el-time-select>
</template>

<script>
export default {
  data(){
    return {
      startTime: '',
      endTime: '',
    };
  }
}
</script>
```