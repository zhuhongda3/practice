```
<template>
  <el-time-picker
    is-range
    v-model="value4"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间">
  </el-time-picker>
  <el-time-picker
    is-range
    arrow-control
    v-model="value5"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间">
  </el-time-picker>
</template>

<script>
export default {
  data(){
    return {
      value4: '',
      value5: [new Date(2018, 3, 22, 18, 40),new Date(2018, 3, 22, 18, 40)]
    };
  }
}
</script>
```