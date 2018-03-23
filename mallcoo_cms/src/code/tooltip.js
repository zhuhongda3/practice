export const code1 =
`<el-tooltip content="Top Left 提示文字" placement="top-start">
  <el-button>上左</el-button>
</el-tooltip>
<el-tooltip content="Top Center 提示文字" placement="top">
  <el-button>上边</el-button>
</el-tooltip>
<el-tooltip content="Top Right 提示文字" placement="top-end">
  <el-button>上右</el-button>
</el-tooltip>

<el-tooltip content="Left Top 提示文字" placement="left-start">
  <el-button>左上</el-button>
</el-tooltip>
<el-tooltip content="Left Center 提示文字" placement="left">
  <el-button>左边</el-button>
</el-tooltip>
<el-tooltip content="Left Bottom 提示文字" placement="left-end">
  <el-button>左下</el-button>
</el-tooltip>

<el-tooltip content="Right Top 提示文字" placement="right-start">
  <el-button>右上</el-button>
</el-tooltip>
<el-tooltip content="Right Center 提示文字" placement="right">
  <el-button>右边</el-button>
</el-tooltip>
<el-tooltip content="Right Bottom 提示文字" placement="right-end">
  <el-button>右下</el-button>
</el-tooltip>

<el-tooltip content="Bottom Left 提示文字" placement="bottom-start">
  <el-button>下左</el-button>
</el-tooltip>
<el-tooltip content="Bottom Center 提示文字" placement="bottom">
  <el-button>下边</el-button>
</el-tooltip>
<el-tooltip content="Bottom Right 提示文字" placement="bottom-end">
  <el-button>下右</el-button>
</el-tooltip>
`;
export const code2 =
`<el-tooltip content="Bottom center" placement="bottom">
  <el-button>Dark</el-button>
</el-tooltip>

<el-tooltip content="Bottom center" placement="bottom" effect="light">
  <el-button>Light</el-button>
</el-tooltip>
`;
export const code3 =
`<el-tooltip placement="bottom">
  <div slot="content">多行信息<br/>第二行信息</div>
  <el-button>Bottom center</el-button>
</el-tooltip>
`;