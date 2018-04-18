```
<template><!--change事件如果有需要请添加，没有需要请移除，此处仅供演示-->
  <el-checkbox v-model="checked1" @change="getRadio1Value">备选项</el-checkbox>
  <el-checkbox v-model="checked2" disabled>备选项（禁用）</el-checkbox>
  <el-checkbox v-model="checked3" disabled>备选项（选中且禁用）</el-checkbox>
</template>

<script>
export default {
  data(){
    return {
      checked1: true,
      checked2: false,
      checked3: true, 
    };
  },
  method: {
    getRadio1Value(){
      alert(this.checked1);
    }
  }
}
</script>
```