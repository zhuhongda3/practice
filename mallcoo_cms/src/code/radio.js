export const code1 =
`<!--change事件如果有需要请添加，没有需要请移除，此处仅供演示-->
<el-radio v-model="radio1" label="1" @change="getRadio1Value">备选项</el-radio>
<el-radio v-model="radio1" label="2" @change="getRadio1Value">备选项</el-radio>

<!--禁用：disabled-->
<el-radio disabled v-model="radio1" label="3">备选项（禁用）</el-radio>

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
`;
export const code2 =
`<!--change事件如果有需要请添加，没有需要请移除，此处仅供演示-->
<el-radio-group v-model="radio2" @change="getRadioValue">
  <el-radio :label="1">备选项</el-radio>
  <el-radio :label="2">备选项</el-radio>
  <el-radio :label="3">备选项</el-radio>
</el-radio-group>

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
`;
export const code3 =
`<el-radio-group v-model="radio3">
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
`;
export const code4 =
`<el-radio v-model="radio6" label="1" border>备选项</el-radio>
<el-radio v-model="radio6" label="2" border>备选项</el-radio>

<el-radio-group v-model="radio7" size="medium">
  <el-radio label="1" border>备选项</el-radio>
  <el-radio label="2" border>备选项</el-radio>
</el-radio-group>

<el-radio-group v-model="radio8" disabled>
  <el-radio label="1" border>备选项</el-radio>
  <el-radio label="2" border>备选项</el-radio>
</el-radio-group>

<el-radio-group v-model="radio9">
  <el-radio label="1" border>备选项</el-radio>
  <el-radio label="2" border size="small" disabled>备选项</el-radio>
</el-radio-group>

<script>
export default {
  data(){
    return {
      radio6: '1',
      radio7: '1',
      radio8: '1',   
      radio9: '1',   
    };
  }
}
</script>
`;
export const code5 =
`
`;
export const code6 =
`
`;