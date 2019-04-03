<template>
  <div>
    <card-box title="基础用法">
      <template slot="content">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="有禁用的插件">
      <template slot="content">
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="禁用插件">
      <template slot="content">
        <el-select v-model="value3" disabled placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

    <card-box title="可清空单选(仅适用于单选)">
      <template slot="content">
        <el-select v-model="value4" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code4}}</template>
    </card-box>

    <card-box title="基础多选">
      <template slot="content">
        <el-select v-model="value5" multiple  placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code5}}</template>
    </card-box>

    <card-box title="自定义模板">
      <template slot="content">
        <el-select v-model="value6" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code6}}</template>
    </card-box>

    <card-box title="分组">
      <template slot="content">
        <el-select v-model="value7" placeholder="请选择">
          <el-option-group
            v-for="group in options3"
            :key="group.label"
            :label="group.label">
            <el-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-option-group>
        </el-select>
      </template>
      <template slot="code">{{code7}}</template>
    </card-box>

    <card-box title="可搜索">
      <template slot="content">
        <el-select v-model="value8" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </template>
      <template slot="code">{{code8}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import select_md_1 from '@/md/select_md_1.md';
import select_md_2 from '@/md/select_md_2.md';
import select_md_3 from '@/md/select_md_3.md';
import select_md_4 from '@/md/select_md_4.md';
import select_md_5 from '@/md/select_md_5.md';
import select_md_6 from '@/md/select_md_6.md';
import select_md_7 from '@/md/select_md_7.md';
import select_md_8 from '@/md/select_md_8.md';

export default {
  data(){
    return {
      code1: select_md_1,
      code2: select_md_2,
      code3: select_md_3,
      code4: select_md_4,
      code5: select_md_5,
      code6: select_md_6,
      code7: select_md_7,
      code8: select_md_8,
      options: [
        {
          value: '选项1',
          label: '测试数据1',
        },
        {
          value: '选项2',
          label: '测试数据2',
        },
        {
          value: '选项3',
          label: '测试数据3',
        }
      ],
      options2: [
        {
          value: '选项1',
          label: '测试数据1',
        },
        {
          value: '选项2',
          label: '测试数据2',
          disabled: true
        },
        {
          value: '选项3',
          label: '测试数据3',
        }
      ],
      options3: [
        {
          label: '分类1',
          options:[
            {
              value: '选项1-1',
              label: '测试数据1-1',
            },
            {
              value: '选项1-2',
              label: '测试数据1-2',
            }
          ]
        },
        {
          label: '分类2',
          options:[
            {
              value: '选项2-1',
              label: '测试数据2-1',
            },
            {
              value: '选项2-2',
              label: '测试数据2-2',
            }
          ]
        }
      ], 
      value:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:'',
      value8:'',
    };
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>

</style>
