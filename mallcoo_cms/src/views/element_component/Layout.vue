<template>
  <div>
    <card-box title="基本布局">
      <template slot="content">
        <el-row>
          <el-col :span="24"><div class="grid-content">24</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><div class="grid-content">12</div></el-col>
          <el-col :span="12"><div class="grid-content">12</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content">8</div></el-col>
          <el-col :span="8"><div class="grid-content">8</div></el-col>
          <el-col :span="8"><div class="grid-content">8</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
        </el-row>
      </template>
      <template slot="code">{{code1}}</template> 
    </card-box>

     <card-box title="分栏间隔">
      <template slot="content">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
      </template>
      <template slot="code">{{code2}}</template> 
    </card-box>

    <card-box title="混合布局">
      <template slot="content">
        <el-row :gutter="20">
          <el-col :span="16"><div class="grid-content">16</div></el-col>
          <el-col :span="8"><div class="grid-content">8</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8"><div class="grid-content">8</div></el-col>
          <el-col :span="8"><div class="grid-content">8</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content">4</div></el-col>
          <el-col :span="16"><div class="grid-content">16</div></el-col>
          <el-col :span="4"><div class="grid-content">4</div></el-col>
        </el-row>
      </template>
      <template slot="code">{{code3}}</template> 
    </card-box>

    <card-box title="分栏偏移">
      <template slot="content">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6" :offset="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6" :offset="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6"><div class="grid-content">12</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :push="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :pull="6"><div class="grid-content">12</div></el-col>
        </el-row>
      </template>
      <template slot="code">{{code4}}</template> 
    </card-box>

    <card-box title="对齐方式">
      <template slot="content">
        <el-row type="flex">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row type="flex" justify="end">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row type="flex" justify="space-between">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
          <el-col :span="6"><div class="grid-content">6</div></el-col>
        </el-row>
      </template>
      <template slot="code">{{code5}}</template> 
    </card-box>

    <card-box title="响应式布局">
      <template slot="content">
        <el-row :gutter="10">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></el-col>
          <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
        </el-row>
      </template>
      <template slot="code">{{code6}}</template> 
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3,code4,code5,code6} from '@/code/layout';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      code5: code5,
      code6: code6
    };
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.el-row{
  &:not(:last-child){
    margin-bottom: 15px;
  }
}
.grid-content{
   height: 40px;
   line-height: 40px;
   background-color: #ddd;
   border-radius: 5px;
   text-align: center;
 }
</style>
