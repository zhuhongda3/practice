```
<template>
  <el-select v-model="value7" placeholder="请选择">
    <el-option-group
    v-for="group in options3"
    :key="group.label"
    :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
export default {
  data(){
    return {
      options3: [
        {
          label: '分类1',
          options:[
            {
              value: '选项1-1',
              label: '测试数据1-1',
            },
            {
              value: '选项1-2',
              label: '测试数据1-2',
            }
          ]
        },
        {
          label: '分类2',
          options:[
            {
              value: '选项2-1',
              label: '测试数据2-1',
            },
            {
              value: '选项2-2',
              label: '测试数据2-2',
            }
          ]
        }
      ], 
      value7:''
    };
  }
}
</script>
```