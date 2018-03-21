<template>
  <div>
    <card-box title="基本用法">
      <template slot="content">
        <el-radio v-model="radio1" label="1" @change="getRadio1Value">备选项</el-radio>
        <el-radio v-model="radio1" label="2" @change="getRadio1Value">备选项</el-radio>
        <br>
        <el-radio disabled v-model="radio1" label="3">备选项（禁用）</el-radio>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="单选框组">
      <template slot="content">
        <el-radio-group v-model="radio2" @change="getRadio2Value">
          <el-radio :label="1">备选项</el-radio>
          <el-radio :label="2">备选项</el-radio>
          <el-radio :label="3">备选项</el-radio>
        </el-radio-group>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="按钮样式">
      <template slot="content">
        <el-radio-group v-model="radio3">
          <el-radio-button label="1">备选项</el-radio-button>
          <el-radio-button label="2">备选项</el-radio-button>
        </el-radio-group>
        <br>
        <el-radio-group v-model="radio4" disabled>
          <el-radio-button label="1">备选项</el-radio-button>
          <el-radio-button label="2">备选项</el-radio-button>
        </el-radio-group>
        <br>
         <el-radio-group v-model="radio5" size="small" text-color="#fff" fill="#f00">
          <el-radio-button label="1">备选项</el-radio-button>
          <el-radio-button label="2">备选项</el-radio-button>
        </el-radio-group>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="带有边框">
      <template slot="content">
        <el-radio v-model="radio6" label="1" border>备选项</el-radio>
        <el-radio v-model="radio6" label="2" border>备选项</el-radio>
        <br>
        <el-radio-group v-model="radio7" size="medium">
          <el-radio label="1" border>备选项</el-radio>
          <el-radio label="2" border>备选项</el-radio>
        </el-radio-group>
        <br>
        <el-radio-group v-model="radio8" disabled>
          <el-radio label="1" border>备选项</el-radio>
          <el-radio label="2" border>备选项</el-radio>
        </el-radio-group>
        <br>
        <el-radio-group v-model="radio9">
          <el-radio label="1" border>备选项</el-radio>
          <el-radio label="2" border size="small" disabled>备选项</el-radio>
        </el-radio-group>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3,code4} from '@/code/radio';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      radio1: '1',
      radio2: 1,
      radio3: '1',
      radio4: '1',
      radio5: '1',
      radio6: '1',
      radio7: '1',
      radio8: '1',
      radio9: '1',
    };
  },
  methods: {
    getRadio1Value(){
      alert(this.radio1);
    },
    getRadio2Value(){
      alert(this.radio2);
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.el-radio,.el-radio-button{
  margin-bottom: 10px;
}
</style>
