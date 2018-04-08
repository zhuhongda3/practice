export const code1 =
`<template>
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
`;
export const code2 =
`<template>
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

<script>
  export default {
    methods: {
      hello() {
        alert('Hello World!');
      }
    }
  }
</script>
`;
export const code3 =
` <template>
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
`;
export const code4 =
`<template>
  <el-alert
    title="成功提示文案"
    type="success"
    show-icon
    center>
  </el-alert>
</template>
`;
export const code5 =
`<template>
  <el-alert
    title="成功提示文案"
    type="success"
    description="这是一段辅助文字介绍，是一段辅助文字介绍">
  </el-alert>
</template>
`;
export const code6 =
`<template>
  <el-alert
    title="成功提示文案"
    type="success"
    show-icon
    description="这是一段辅助文字介绍，是一段辅助文字介绍">
  </el-alert>
</template>
`;