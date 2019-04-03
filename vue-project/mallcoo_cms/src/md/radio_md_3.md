```
<template>
  <el-radio-group v-model="radio3">
    <el-radio-button label="1">备选项</el-radio-button>
    <el-radio-button label="2">备选项</el-radio-button>
  </el-radio-group>

  <!--全部禁用，也可作用于el-radio-button单个禁用-->
  <el-radio-group v-model="radio4" disabled>
    <el-radio-button label="1">备选项</el-radio-button>
    <el-radio-button label="2">备选项</el-radio-button>
  </el-radio-group>

  <!--自定义按钮大小(也可以给el-radio-button单独设置size,可选值：medium,small,mini)，字体颜色，背景色-->
  <el-radio-group v-model="radio5" size="small" text-color="#fff" fill="#f00">
    <el-radio-button label="1">备选项</el-radio-button>
    <el-radio-button label="2">备选项</el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  data(){
    return {
      radio3: '1',
      radio4: '1',
      radio5: '1',   
    };
  }
}
</script>
```