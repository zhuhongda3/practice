```
<template>
  <!--change事件如果有需要请添加，没有需要请移除，此处仅供演示-->
  <el-radio-group v-model="radio2" @change="getRadioValue">
    <el-radio :label="1">备选项</el-radio>
    <el-radio :label="2">备选项</el-radio>
    <el-radio :label="3">备选项</el-radio>
  </el-radio-group>
</template>

<script>
export default {
  data(){
    return {
      radio2: 1,   //若label前面加了冒号,可用变量代替初始值，此处值不需要加引号
    };
  }，
  method: {
    getRadio2Value(){
      alert(this.radio2);
    }
  }
}
</script>
```