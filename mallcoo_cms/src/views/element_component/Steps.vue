<template>
  <div>
    <card-box title="基础用法（此处只提供三个步骤，可根据实际情况自行配置）">
      <template slot="content">
        <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="next">{{active>2?'提交':'下一步'}}</el-button>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1} from '@/code/steps';

export default {
  data(){
    return {
      code1: code1,
      active: 1,
    };
  },
  methods: {
    next() {
      if(this.active == 3) return;
      this.active += 1;
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>