export const code1 =
`<el-row>
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
`;
export const code2 =
`<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content">6</div></el-col>
  <el-col :span="6"><div class="grid-content">6</div></el-col>
  <el-col :span="6"><div class="grid-content">6</div></el-col>
  <el-col :span="6"><div class="grid-content">6</div></el-col>
</el-row>
`;
export const code3 =
`<el-row :gutter="20">
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
`;
export const code4 =
`<el-row :gutter="20">
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
`;
export const code5 =
`<el-row type="flex">
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
`;
export const code6 =
`<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></el-col>
</el-row>
`;