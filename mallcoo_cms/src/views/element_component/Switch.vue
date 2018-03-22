<template>
  <div>
    <card-box title="基础用法">
      <template slot="content">
        <el-switch
          v-model="value1">
        </el-switch>
        <el-switch
          disabled
          v-model="value2">
        </el-switch>
        <el-switch
          disabled
          v-model="value3">
        </el-switch>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="自定义开启和关闭颜色或说明文字以及宽度">
      <template slot="content">
        <el-switch
          v-model="value4"
          active-text="说明项"
          active-color="#13ce66"
          inactive-color="#999" 
          :width="60">
        </el-switch>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="添加切换事件">
      <template slot="content">
         <el-switch
          @change="getSwitchValue"
          v-model="value5">
        </el-switch>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3} from '@/code/switch';


export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      value1: false,
      value2: false,
      value3: true,
      value4: false,
      value5: false,
    };
  },
  methods: {
    getSwitchValue(){
      alert(this.value5);
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>