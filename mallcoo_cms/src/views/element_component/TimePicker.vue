<template>
  <div>
    <card-box title="只读或禁用">
      <template slot="content">
        <el-time-picker
          readonly
          v-model="value"
          placeholder="选择时间">
        </el-time-picker>
         <el-time-picker
          disabled
          v-model="value6"
          placeholder="选择时间">
        </el-time-picker>
      </template>
      <template slot="code">{{code}}</template>
    </card-box>

    <card-box title="固定时间点(设置了每次地增量)">
      <template slot="content">
        <el-time-select
          v-model="value1"
          placeholder="选择时间">
        </el-time-select>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="一段时间内的任意时间点">
      <template slot="content">
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
          v-model="value3"
          arrow-control
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="任意时间点">
        </el-time-picker>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="固定时间范围">
      <template slot="content">
        <el-time-select
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }"
          placeholder="任意时间点">
        </el-time-select>
        <el-time-select
          v-model="endTime"
          arrow-control
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime
          }"
          placeholder="任意时间点">
        </el-time-select>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="任意时间范围">
      <template slot="content">
        <el-time-picker
          is-range
          v-model="value4"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间">
        </el-time-picker>
        <el-time-picker
          is-range
          arrow-control
          v-model="value5"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间">
        </el-time-picker>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code,code1,code2,code3,code4} from '@/code/timepicker';


export default {
  data(){
    return {
      code: code,
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      value: new Date(2018, 3, 22, 18, 40),
      value6: '',
      value1: '',
      startTime: '',
      endTime: '',
      value2: new Date(2018, 3, 22, 18, 40),
      value3: new Date(2018, 3, 22, 18, 40),
      value4: '',
      value5: [new Date(2018, 3, 22, 18, 40),new Date(2018, 3, 22, 18, 40)]
    };
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>