<template>
  <div>
    <card-box title="选择日">
      <template slot="content">
        <div class="block-wrap">
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
        </div>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="其它日期单位">
      <template slot="content">
        <div class="block-wrap">
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
        </div>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2} from '@/code/datepicker';


export default {
  data(){
    return {
      code1: code1,
      code2: code2,
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
      value3: '',
      value4: '',
      value5: '',
    };
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.block-wrap{
  display: table;
  width: 100%;
  .block{
    display: table-cell;
  }
}
.demonstration{
  padding: 0 30px;
}
</style>