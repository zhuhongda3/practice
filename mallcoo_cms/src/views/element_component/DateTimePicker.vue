<template>
  <div>
    <card-box title="日期和时间点">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="日期和时间范围">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value3"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value4"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
            </el-date-picker>
          </div>
        </div>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="默认的起始与结束时刻">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
            <span class="demonstration">起始日期时刻为 12:00:00</span>
            <el-date-picker
              v-model="value5"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
            <el-date-picker
              v-model="value6"
              type="datetimerange"
              align="right"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00', '08:00:00']">
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
import datetimepicker_md_1 from '@/md/datetimepicker_md_1.md';
import datetimepicker_md_2 from '@/md/datetimepicker_md_2.md';
import datetimepicker_md_3 from '@/md/datetimepicker_md_3.md';


export default {
  data(){
    return {
      code1: datetimepicker_md_1,
      code2: datetimepicker_md_2,
      code3: datetimepicker_md_3,
      value1: '',
      value2: '',
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value4: '',
      value5: '',
      value6: '',
      pickerOptions1: {
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
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
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