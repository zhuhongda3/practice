```
<template slot="content">
  <el-switch
    v-model="value1">
  </el-switch>
  <el-switch
    disabled
    v-model="value2">
  </el-switch>
  <el-switch
    disabled
    v-model="value3">
  </el-switch>
</template>

<script>
export default {
  data(){
    return {
      value1: false,
      value2: false,
      value3: true
    };
  }
}
</script>
```