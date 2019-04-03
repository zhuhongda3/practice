<template>
  <div>
    <card-box title="基础用法(3s自动关闭)">
      <template slot="content">
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="不同状态">
      <template slot="content">
        <el-button :plain="true" @click="open2">成功</el-button>
        <el-button :plain="true" @click="open3">警告</el-button>
        <el-button :plain="true" @click="open">消息</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="可关闭">
      <template slot="content">
        <el-button :plain="true" @click="open5">可关闭消息</el-button>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="文字居中">
      <template slot="content">
        <el-button :plain="true" @click="open6">文字居中的消息</el-button>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

    <card-box title="使用 HTML 片段">
      <template slot="content">
        <el-button :plain="true" @click="open7">使用HTML片段</el-button>
      </template>
      <template slot="code">{{code5}}</template>
    </card-box>

    <card-box title="自定义icon">
      <template slot="content">
        <el-button :plain="true" @click="open8">自定义提示icon</el-button>
      </template>
      <template slot="code">{{code6}}</template>
    </card-box>

    <card-box title="自定义消息关闭时间（0则不关闭，默认3000ms）">
      <template slot="content">
        <el-button :plain="true" @click="open9">自定义关闭时间，消息弹出1s后自动关闭</el-button>
      </template>
      <template slot="code">{{code7}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import message_md_1 from '@/md/message_md_1.md';
import message_md_2 from '@/md/message_md_2.md';
import message_md_3 from '@/md/message_md_3.md';
import message_md_4 from '@/md/message_md_4.md';
import message_md_5 from '@/md/message_md_5.md';
import message_md_6 from '@/md/message_md_6.md';
import message_md_7 from '@/md/message_md_7.md';

export default {
  data(){
    return {
      code1: message_md_1,
      code2: message_md_2,
      code3: message_md_3,
      code4: message_md_4,
      code5: message_md_5,
      code6: message_md_6,
      code7: message_md_7,
    };
  },
  methods: {
    open(){
      this.$message('这是一条消息提示');
    },
    openVn(){
      const h = this.$createElement;
      this.$message({
        message: h('p',null,[
          h('span',null,'内容可以是'),
          h('i',{style:'color: teal'},'VNode')
        ])
      })
    },
    open2(){
      this.$message({
        message:'这是一条成功消息',
        type:'success'
      });
    },
    open3(){
      this.$message({
        message:'这是一条警告消息',
        type:'warning'
      });
    },
    open4(){
      this.$message.error('这是一条错误消息');
    },
    open5(){
      this.$message({
        message: '这是一条可关闭的消息提示',
        type:'success',
        showClose: true
      });
    },
    open6(){
      this.$message({
        message: '这是一条居中的消息提示',
        type:'success',
        center: true
      });
    },
    open7(){
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      });
    },
    open8(){
      this.$message({
        message: '这个消息的icon是自定义的',
        iconClass: 'el-icon-delete'
      });
    },
    open9(){
      this.$message({
        message: '这个消息的icon是自定义的',
        duration: '1000'
      });
    },
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>