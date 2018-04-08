<template>
  <div>
    <card-box title="消息提示">
      <template slot="content">
        <el-button type="text" @click="open">点击打开message Box</el-button>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="确认消息">
      <template slot="content">
        <el-button type="text" @click="open2">点击打开message Box</el-button>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="提交内容">
      <template slot="content">
        <el-button type="text" @click="open3">点击打开message Box</el-button>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="自定义">
      <template slot="content">
        <el-button type="text" @click="open4">点击打开message Box</el-button>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

    <card-box title="使用 HTML 片段">
      <template slot="content">
        <el-button type="text" @click="open5">点击打开message Box</el-button>
      </template>
      <template slot="code">{{code5}}</template>
    </card-box>

    <card-box title="居中布局">
      <template slot="content">
        <el-button type="text" @click="open6">点击打开message Box</el-button>
      </template>
      <template slot="code">{{code6}}</template>
    </card-box>
  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3,code4,code5,code6} from '@/code/messagebox';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
      code4: code4,
      code5: code5,
      code6: code6,
    };
  },
  methods: {
    open(){
      this.$alert('这是一段内容','标题名称',{
        confirmButtonText:'确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }
      });
    },
    open2(){
      this.$confirm('该操作将永久删除该文件，是否继续','提示',{
        confirmButtonText:'确定',
        cancelButtonText: '取消',
        type:'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功'
        });
      }).catch(() => {
        this.$message({
          type:'info',
          message:'已取消删除'
        });
      });
    },
    open3() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    },
    open4() {
      const h = this.$createElement;
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        });
      });
    },
    open5() {
      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
        dangerouslyUseHTMLString: true
      });
    },
    open6() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>