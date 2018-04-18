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
import inputnumber_md_1 from '@/md/inputnumber_md_1.md';
import inputnumber_md_2 from '@/md/inputnumber_md_2.md';
import inputnumber_md_3 from '@/md/inputnumber_md_3.md';
import inputnumber_md_4 from '@/md/inputnumber_md_4.md';


export default {
  data(){
    return {
      code1: inputnumber_md_1,
      code2: inputnumber_md_2,
      code3: inputnumber_md_3,
      code4: inputnumber_md_4,
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