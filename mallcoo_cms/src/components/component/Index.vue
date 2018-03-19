<template>
  <div>
    <el-container>
      <el-header>
        <span>element-ui</span>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-openeds="openedsArray"
            :default-active="$route.path"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router >
            <el-submenu v-for="(item,index) in itemList" :key="index" :index="String(index+1)">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{item.submenu }}</span>
              </template>
              <el-menu-item-group v-for="(item1,index1) in item.menuItemGroup" :key="index1" :title="item1.menuItemGroupTitle">
                <el-menu-item v-for="(item2,index2) in item1.menuItemList" :key="index2" :index="item2.url">{{item2.menuItem}}</el-menu-item>  
              </el-menu-item-group>  
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view/>
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>

<script>
import {sideBarData} from '@/mock/data.js'

export default {
  data(){
    return{
      itemList: [],
      // openedsArray: ['1','2','3'],
      openedsArray: ['1'],
    }
  },
  mounted(){
    this.getList();
  },
  methods:{
    getList(){
      this.itemList = sideBarData;
    }
  },
}
</script>

<style lang="scss" scoped>
.el-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #666;
  background-color: #545c64;
  span{
    float: right;
    color: #fff;
    line-height: 60px;
  }
}
.el-aside{
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100% - 60px);
  background-color: #545c64;
}
.el-main{
  margin-top: 60px;
  margin-left: 300px;
}
.el-menu{
  border-right: 0;
}
</style>

