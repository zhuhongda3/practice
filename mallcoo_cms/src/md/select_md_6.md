```
<template>
  <el-select v-model="value6" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    <span style="float: left">{{ item.label }}</span>
    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  data(){
    return {
      options: [
        {
          value: '选项1',
          label: '测试数据1',
        },
        {
          value: '选项2',
          label: '测试数据2',
        },
        {
          value: '选项3',
          label: '测试数据3',
        }
      ],
      value6:''
    };
  }
}
</script>
```