<template>
  <div>
    <el-container>
      <el-header>
        <div style="background-color: #0771b3;">
          <div class="" style="line-height: 25px;min-height: 25px;font-size: 12px;"></div>
          <div class="" style="background-color: #0085D7;padding: 25px 0;"></div>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-openeds="openedsArray"
            :default-active="$route.path"
            background-color="#ddd"
            text-color="#333"
            active-text-color="#3598dc"
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

<style lang="scss" scoped></style>

