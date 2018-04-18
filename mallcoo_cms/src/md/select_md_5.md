```
<template>
  <el-select v-model="value5" multiple  placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
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
      value5:''
    };
  }
}
</script>
```