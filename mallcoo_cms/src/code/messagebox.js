export const code1 =
`<template>
  <el-button type="text" @click="open">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open(){
        this.$alert('这是一段内容','标题名称',{
          confirmButtonText:'确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: 'action: ' + action
            });
          }
        });
      }
    }
  }
</script>
`;
export const code2 =
`<template>
  <el-button type="text" @click="open2">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
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
      }
    }
  }
</script>
`;
export const code3 =
`<template>
  <el-button type="text" @click="open3">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open3() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /正则验证字符(可以在此处写正则验证,避免单双引号嵌套可以使用es6的字符串模板)/,
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
      }
    }
  }
</script>
`;
export const code4 =
`<template>
  <el-button type="text" @click="open4">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
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
      }
    }
  }
</script>
`;
export const code5 =
`<template>
  <el-button type="text" @click="open5">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        });
      }
    }
  }
</script>
`;
export const code6 =
`<template>
  <el-button type="text" @click="open6">点击打开message Box</el-button>
</template>

<script>
  export default {
    methods: {
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
    }
  }
</script>
`;