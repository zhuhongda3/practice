```
<template slot="content">
  <el-switch
    v-model="value4"
    active-text="说明项"
    active-color="#13ce66"
    inactive-color="#999"
    width=60>
  </el-switch>
</template>

<script>
export default {
  data(){
    return {
      value4: false
    };
  }
}
</script>
```