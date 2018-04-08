export const code1 =
`<template>
  <el-button :plain="true" @click="open">打开消息提示</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
</template>

<script>
  export default {
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
      }
    }
  }
</script>
`;
export const code2 =
`<template>
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open">消息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
</template>

<script>
  export default {
    methods: {
      open(){
        this.$message('这是一条消息提示');
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
      }
    }
  }
</script>
`;
export const code3 =
`<template>
  <el-button :plain="true" @click="open5">可关闭消息</el-button>
</template>

<script>
  export default {
    methods: {
      open5(){
        this.$message({
          message: '这是一条可关闭的消息提示',
          type:'success',
          showClose: true
        });
      }
    }
  }
</script>
`;
export const code4 =
`<template>
  <el-button :plain="true" @click="open6">文字居中的消息</el-button>
</template>

<script>
  export default {
    methods: {
      open6(){
        this.$message({
          message: '这是一条居中的消息提示',
          type:'success',
          center: true
        });
      }
    }
  }
</script>
`;
export const code5 =
`<template>
  <el-button :plain="true" @click="open7">使用HTML片段</el-button>
</template>

<script>
  export default {
    methods: {
      open7(){
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
  }
</script>
`;
export const code6 =
`<template>
  <el-button :plain="true" @click="open8">自定义提示icon</el-button>
</template>

<script>
  export default {
    methods: {
      open8(){
        this.$message({
          message: '这个消息的icon是自定义的',
          iconClass: 'el-icon-delete'
        });
      }
    }
  }
</script>
`;
export const code7 =
`<template>
  <el-button :plain="true" @click="open9">自定义关闭时间，消息弹出1s后自动关闭</el-button>
</template>

<script>
  export default {
    methods: {
      open9(){
        this.$message({
          message: '这个消息的icon是自定义的',
          duration: '1000'
        });
      }
    }
  }
</script>
`;