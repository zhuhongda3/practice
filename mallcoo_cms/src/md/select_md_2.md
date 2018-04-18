```
<template>
  <el-select v-model="value2" placeholder="请选择">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
  </el-option>
  </el-select> 
</template>

<script>
export default {
  data(){
    return {
      options2: [
        {
          value: '选项1',
          label: '测试数据1',
        },
        {
          value: '选项2',
          label: '测试数据2',
          disabled: true
        },
        {
          value: '选项3',
          label: '测试数据3',
        }
      ],
      value2:''
    };
  }
}
</script>
```