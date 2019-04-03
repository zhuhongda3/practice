```
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
```