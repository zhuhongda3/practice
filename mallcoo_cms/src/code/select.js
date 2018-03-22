export const code1 =
`<template>
  <el-select v-model="value" placeholder="请选择">
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
      value:''
    };
  }
}
</script>
`;
export const code2 =
`<template>
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
`;
export const code3 =
`<template>
  <el-select v-model="value3" disabled placeholder="请选择">
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
      value3:''
    };
  }
}
</script>
`;
export const code4 =
`<template>
  <el-select v-model="value4" clearable placeholder="请选择">
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
      value4:''
    };
  }
}
</script>
`;
export const code5 =
`<template>
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
`;
export const code6 =
`<template>
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
`;
export const code7 =
`<template>
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
`;
export const code8 =
`<template>
  <el-select v-model="value8" filterable placeholder="请选择">
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
      value8:''
    };
  }
}
</script>
`;