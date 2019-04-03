```
<template>
  <!--change事件如果有需要请添加，没有需要请移除，此处仅供演示-->
  <el-radio v-model="radio1" label="1" @change="getRadio1Value">备选项</el-radio>
  <el-radio v-model="radio1" label="2" @change="getRadio1Value">备选项</el-radio>

  <!--禁用：disabled-->
  <el-radio disabled v-model="radio1" label="3">备选项（禁用）</el-radio>
</template>

<script>
export default {
  data(){
    return {
      radio1: '1',  //默认选中label为'1'的radio元素（如果没有默认选中项，此处值可设置为空''），label的值可以是：String, Number, Boolean
    };
  },
  method: {
    getRadio1Value(){
      alert(this.radio1);
    }
  }
}
</script>
```