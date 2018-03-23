<template>
  <div>
    <card-box title="基础用法">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
            <span class="demonstration">有默认值</span>
            <el-color-picker v-model="color1"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">无默认值</span>
            <el-color-picker v-model="color2"></el-color-picker>
          </div>
          <div class="block">
            <span class="demonstration">禁用</span>
            <el-color-picker v-model="color2" disabled></el-color-picker>
          </div>
        </div>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="选择透明度">
      <template slot="content">
        <el-color-picker v-model="color3" show-alpha></el-color-picker>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="不同尺寸">
      <template slot="content">
        <el-color-picker v-model="color4"></el-color-picker>
        <el-color-picker v-model="color4" size="medium"></el-color-picker>
        <el-color-picker v-model="color4" size="small"></el-color-picker>
        <el-color-picker v-model="color4" size="mini"></el-color-picker>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3} from '@/code/colorpicker';


export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      color1: '#000',
      color2: null,
      color3: 'rgba(19, 206, 102, 0.8)',
      color4: '#409EFF'
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