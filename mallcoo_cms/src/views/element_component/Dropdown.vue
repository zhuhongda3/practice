<template>
  <div>
    <card-box title="基本用法">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
            <span class="demonstration">hover激活</span>
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>下拉选项1</el-dropdown-item>
                <el-dropdown-item>下拉选项2</el-dropdown-item>
                <el-dropdown-item>下拉选项3</el-dropdown-item>
                <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
                <el-dropdown-item divided>下拉选项5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="block">
            <span class="demonstration">click激活</span>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>下拉选项1</el-dropdown-item>
                <el-dropdown-item>下拉选项2</el-dropdown-item>
                <el-dropdown-item>下拉选项3</el-dropdown-item>
                <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
                <el-dropdown-item divided>下拉选项5</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </template>
      <template slot="code">{{code1}}</template>
    </card-box>

    <card-box title="按钮下拉">
      <template slot="content">
        <div class="block-wrap">
          <div class="block">
              <span class="demonstration">hover激活</span>
              <el-dropdown>
                <el-button type="primary">
                  更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>下拉选项1</el-dropdown-item>
                  <el-dropdown-item>下拉选项2</el-dropdown-item>
                  <el-dropdown-item>下拉选项3</el-dropdown-item>
                  <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
                  <el-dropdown-item divided>下拉选项5</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
          </div>
          <div class="block">
            <span class="demonstration">click激活</span>
            <el-dropdown trigger="click">
            <el-button type="primary">
              更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>下拉选项1</el-dropdown-item>
              <el-dropdown-item>下拉选项2</el-dropdown-item>
              <el-dropdown-item>下拉选项3</el-dropdown-item>
              <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
              <el-dropdown-item divided>下拉选项5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </div>
        </div>
      </template>
      <template slot="code">{{code2}}</template>
    </card-box>

    <card-box title="尺寸">
      <template slot="content">
       <el-dropdown>
          <el-button type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>下拉选项1</el-dropdown-item>
            <el-dropdown-item>下拉选项2</el-dropdown-item>
            <el-dropdown-item>下拉选项3</el-dropdown-item>
            <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
            <el-dropdown-item divided>下拉选项5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
       <el-dropdown>
          <el-button size="medium" type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>下拉选项1</el-dropdown-item>
            <el-dropdown-item>下拉选项2</el-dropdown-item>
            <el-dropdown-item>下拉选项3</el-dropdown-item>
            <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
            <el-dropdown-item divided>下拉选项5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
       <el-dropdown>
          <el-button size="small" type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>下拉选项1</el-dropdown-item>
            <el-dropdown-item>下拉选项2</el-dropdown-item>
            <el-dropdown-item>下拉选项3</el-dropdown-item>
            <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
            <el-dropdown-item divided>下拉选项5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
       <el-dropdown>
          <el-button size="mini" type="primary">
            更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>下拉选项1</el-dropdown-item>
            <el-dropdown-item>下拉选项2</el-dropdown-item>
            <el-dropdown-item>下拉选项3</el-dropdown-item>
            <el-dropdown-item disabled>下拉选项4</el-dropdown-item>
            <el-dropdown-item divided>下拉选项5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template slot="code">{{code3}}</template>
    </card-box>

  </div>
</template>

<script>
import CardBox from '@/components/share/CardBox';
import {code1,code2,code3} from '@/code/dropdown';


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
.block-wrap{
  display: table;
  width: 100%;
  .block{
    display: table-cell;
  }
}
.demonstration{
  padding: 0 30px;
}
</style>