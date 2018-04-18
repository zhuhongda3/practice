<template>
  <div>
    <card-box title="选项卡样式">
      <template slot="content">
        <el-tabs v-model="activeName" type="card" @click="handleClick">
          <el-tab-pane label="tab1" name="first">tab1内容</el-tab-pane>
          <el-tab-pane label="tab2" name="second">tab2内容</el-tab-pane>
          <el-tab-pane label="tab3" name="third">tab3内容</el-tab-pane>
          <el-tab-pane label="tab4" name="fourth">tab4内容</el-tab-pane>
        </el-tabs>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import tabs_md_1 from '@/md/tabs_md_1.md';

export default {
  data(){
    return {
      code1: tabs_md_1,
      activeName: 'first',
    };
  },
  methods: {
    handleClick(tab,event){
      console.log(tab,event);
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>