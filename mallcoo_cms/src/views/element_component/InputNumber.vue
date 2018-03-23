<template>
  <div>
    <card-box title="基础用法">
      <template slot="content">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        <el-input-number v-model="num2" disabled></el-input-number>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="设置增减步数">
      <template slot="content">
        <el-input-number v-model="num3" :step="2"></el-input-number>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="尺寸">
      <template slot="content">
        <el-input-number v-model="num4"></el-input-number>
        <el-input-number v-model="num5" size="medium"></el-input-number>
        <el-input-number v-model="num6" size="small"></el-input-number>
        <el-input-number v-model="num7" size="mini"></el-input-number>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="尺寸">
      <template slot="content">
        <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3,code4} from '@/code/inputnumber';


export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      num1: 1,
      num2: 1,
      num3: 5,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1,
    };
  },
  methods: {
    handleChange(value){
      console.log(value);
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>