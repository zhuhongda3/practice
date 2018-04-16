export const code1 = 
`<template>
  <div>
    <div class="el-mc-title">
      大标题
    </div>
    <div class="el-mc-title">
      大标题 <router-link to="#">链接1</router-link> | <router-link to="#">链接2</router-link>
    </div>
    <div class="el-mc-title">
      大标题<small>辅助文字</small>
    </div>
    <div class="el-mc-title">
      大标题 
      <el-button size="small" plain>按钮1</el-button><el-button type="primary" size="small">按钮2</el-button>
      <el-button class="el-mc-fr" type="text" icon="el-icon-close" size="small">按钮2</el-button><el-button class="el-mc-fr" type="primary" size="small">按钮1</el-button>
    </div>
    <div class="el-mc-title">
      大标题
      <el-tooltip placement="bottom">
        <div slot="content">多行信息<br/>第二行信息</div>
        <i class="el-icon-question"></i>
      </el-tooltip>
    </div>

    <div class="el-mc-subtitle">
      小标题
    </div>
    <div class="el-mc-subtitle">
      小标题
    </div>
    <div class="el-mc-subtitle">
      小标题<small>辅助文字</small>
    </div>
    <div class="el-mc-subtitle">
      小标题 
      <el-button size="small" plain>按钮1</el-button><el-button type="primary" size="small">按钮2</el-button>
      <el-button class="el-mc-fr" type="text" icon="el-icon-close" size="small">按钮2</el-button><el-button class="el-mc-fr" type="primary" size="small">按钮1</el-button>
    </div>
    <div class="el-mc-subtitle">
      小标题
      <el-tooltip placement="bottom">
        <div slot="content">多行信息<br/>第二行信息</div>
        <i class="el-icon-question"></i>
      </el-tooltip>
    </div>
  </div>
</template>
`;