<template>
  <div>
    <card-box title="基础用法">
      <template slot="content">
        <div class="box">
          <div class="top">
            <el-tooltip class="item" content="Top Left 提示文字" placement="top-start">
              <el-button>上左</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Top Center 提示文字" placement="top">
              <el-button>上边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Top Right 提示文字" placement="top-end">
              <el-button>上右</el-button>
            </el-tooltip>
          </div>
          <div class="left">
            <el-tooltip class="item" content="Left Top 提示文字" placement="left-start">
              <el-button>左上</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Left Center 提示文字" placement="left">
              <el-button>左边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Left Bottom 提示文字" placement="left-end">
              <el-button>左下</el-button>
            </el-tooltip>
          </div>
          <div class="right">
            <el-tooltip class="item" content="Right Top 提示文字" placement="right-start">
              <el-button>右上</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Right Center 提示文字" placement="right">
              <el-button>右边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Right Bottom 提示文字" placement="right-end">
              <el-button>右下</el-button>
            </el-tooltip>
          </div>
          <div class="bottom">
            <el-tooltip class="item" content="Bottom Left 提示文字" placement="bottom-start">
              <el-button>下左</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Bottom Center 提示文字" placement="bottom">
              <el-button>下边</el-button>
            </el-tooltip>
            <el-tooltip class="item" content="Bottom Right 提示文字" placement="bottom-end">
              <el-button>下右</el-button>
            </el-tooltip>
          </div>
        </div>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="主题">
      <template slot="content">
        <el-tooltip content="Bottom center" placement="bottom">
          <el-button>Dark</el-button>
        </el-tooltip>
        <el-tooltip content="Bottom center" placement="bottom" effect="light">
          <el-button>Light</el-button>
        </el-tooltip>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="内容换行">
      <template slot="content">
        <el-tooltip placement="bottom">
          <div slot="content">多行信息<br/>第二行信息</div>
          <el-button>Bottom center</el-button>
        </el-tooltip>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3} from '@/code/tooltip';

export default {
  data(){
    return {
      code1: code1,
      code2: code2,
      code3: code3,
    };
  },
  components:{
    CardBox,
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}
</style>