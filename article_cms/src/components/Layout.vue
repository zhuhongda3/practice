<template>
  <div>
    <el-container>
      <el-header style="background-color:#545c64;border-bottom: 1px solid #666;"></el-header>
      <el-container>
        <el-aside>
          <el-menu
            :default-openeds="openedsArray"
            :default-active="$route.path"
            unique-opened
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            style="height: calc(100vh)"
            router >
            <template v-for="item in menuList">
              <template v-for="item2 in item.children">
                <el-submenu v-if="!item2.leaf" :key="item2.path" :index="item2.path">
                  <template slot="title">
                    <i :class="item2.icon"></i>
                    <span slot="title">{{item2.title}}</span>
                  </template>
                  <el-menu-item v-for="item3 in item2.children" :key="item3.path" :index="item3.path" v-if="!item3.hidden">{{item3.title}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-else-if="item2.leaf" :key="item2.path" :index="item2.path">
                  <i :class="item2.icon"></i>
                  <span slot="title">{{item2.title}}</span>
                </el-menu-item>
              </template>
            </template>
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

export default {
  data(){
    return{
      menuList: [],
      openedsArray: ['1'],
    }
  },
  mounted(){
    this.getMenuList();
  },
  methods:{
    getMenuList(){
      this.menuList = this.$router.options.routes;
    }
  },
}
</script>

<style lang="scss" scoped></style>

