<template>
  <div>
    <card-box title="按钮形状">
      <template slot="content">
        <el-button>默认按钮</el-button>
        <el-button plain>朴素按钮</el-button>
        <el-button round>圆形按钮</el-button>
      </template>
      <template slot="code">{{code1}}</template> 
    </card-box>

    <card-box title="按钮大小">
      <template slot="content">
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
      </template>
      <template slot="code">{{code2}}</template> 
    </card-box>

    <card-box title="按钮颜色">
      <template slot="content">
         <el-button>默认按钮</el-button>
         <el-button type="primary">主要按钮</el-button>
         <el-button type="success">成功按钮</el-button>
         <el-button type="info">信息按钮</el-button>
         <el-button type="warning">警告按钮</el-button>
         <el-button type="danger">危险按钮</el-button>
      </template>
      <template slot="code">{{code3}}</template> 
    </card-box>

    <card-box title="按钮禁用">
      <template slot="content">
        <el-button disabled>默认按钮</el-button>
      </template>
      <template slot="code">{{code4}}</template> 
    </card-box>

    <card-box title="按钮与icon组合">
      <template slot="content">
        <el-button type="primary" :loading="true">加载中</el-button>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </template>
      <template slot="code">{{code5}}</template> 
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3,code4,code5} from '@/code/button';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      code5: code5
    };
  },
  components:{
    CardBox,
  },
}
</script>