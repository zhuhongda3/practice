```
<template slot="content">
  <el-switch
    @change="getSwitchValue"
    v-model="value5">
  </el-switch>
</template>

<script>
export default {
  data(){
    return {
      value5: false
    };
  },
  methods: {
    getSwitchValue(){
      alert(this.value5);
    }
  }
}
</script>
```