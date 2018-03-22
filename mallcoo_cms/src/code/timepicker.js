export const code =
`<template>
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
`;
export const code1 =
`<template>
  <el-time-select
    v-model="value1"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"
    placeholder="选择时间">
  </el-time-select>
</template>

<script>
export default {
  data(){
    return {
      value1: '',
    };
  }
}
</script>
`;
export const code2 =
`<template>
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
`;
export const code3 =
`<template>
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
`;
export const code4 =
`<template>
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
`;