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
              align="right"
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
              align="right"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="选择日期范围">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷键</span>
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import datepicker_md_1 from '@/md/datepicker_md_1.md';
import datepicker_md_2 from '@/md/datepicker_md_2.md';
import datepicker_md_3 from '@/md/datepicker_md_3.md';


export default {
  data(){
    return {
      code1: datepicker_md_1,
      code2: datepicker_md_2,
      code3: datepicker_md_3,
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
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start,end]) ;
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start,end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start,end]);
          }
        }]
      },
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
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