export const code2 =
`<template>
  <div class="block">
    <span class="demonstration">周</span>
    <el-date-picker
      v-model="value3"
      type="week"
      format="yyyy年WW周"
      placeholder="选择周">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">月</span>
    <el-date-picker
      v-model="value4"
      type="month"
      placeholder="选择月">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">年</span>
    <el-date-picker
      v-model="value5"
      type="year"
      placeholder="选择年">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value3: '',
      value4: '',
      value5: '',
    };
  }
}
</script>
`;
export const code1 =
`<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data(){
    return {
      pickerOptions1: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    };
  }
}
</script>
`;