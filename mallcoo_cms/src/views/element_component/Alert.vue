<template>
  <div>
    <card-box title="基本用法">
      <template slot="content">
        <el-alert
          title="成功提示文案"
          type="success">
        </el-alert>
        <el-alert
          title="消息提示文案"
          type="info">
        </el-alert>
        <el-alert
          title="警告提示文案"
          type="warning">
        </el-alert>
        <el-alert
          title="错误提示文案"
          type="error">
        </el-alert>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="自定义关闭按钮">
      <template slot="content">
        <el-alert
          title="不可关闭的提示"
          type="success"
          :closable="false">
        </el-alert> 
        <el-alert
          title="自定义close-text"
          type="info"
          close-text="知道了">
        </el-alert> 
        <el-alert
          title="设置回调的alert"
          type="warning"
          @close="hello">
        </el-alert>      
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="带有icon">
      <template slot="content">
        <el-alert
          title="成功提示文案"
          type="success"
          show-icon>
        </el-alert>
        <el-alert
          title="消息提示文案"
          type="info"
          show-icon>
        </el-alert>
        <el-alert
          title="警告提示文案"
          type="warning"
          show-icon>
        </el-alert>
        <el-alert
          title="错误提示文案"
          type="error"
          show-icon>
        </el-alert>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="文字居中">
      <template slot="content">
        <el-alert
          title="成功提示文案"
          type="success"
          show-icon
          center>
        </el-alert>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

    <card-box title="带有辅助性文字介绍">
      <template slot="content">
        <el-alert
          title="成功提示文案"
          type="success"
          description="这是一段辅助文字介绍，是一段辅助文字介绍">
        </el-alert>
      </template>
      <template slot="code">{{code5}}</template>
    </card-box>

    <card-box title="带有 icon 和辅助性文字介绍">
      <template slot="content">
        <el-alert
          title="成功提示文案"
          type="success"
          show-icon
          description="这是一段辅助文字介绍，是一段辅助文字介绍">
        </el-alert>
      </template>
      <template slot="code">{{code6}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import alert_md_1 from '@/md/alert_md_1.md';
import alert_md_2 from '@/md/alert_md_2.md';
import alert_md_3 from '@/md/alert_md_3.md';
import alert_md_4 from '@/md/alert_md_4.md';
import alert_md_5 from '@/md/alert_md_5.md';
import alert_md_6 from '@/md/alert_md_6.md';

export default {
  data(){
    return {
      code1: alert_md_1,
      code2: alert_md_2,
      code3: alert_md_3,
      code4: alert_md_4,
      code5: alert_md_5,
      code6: alert_md_6,
    };
  },
  methods: {
    hello(){
      alert('Hello wolrd!');
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>