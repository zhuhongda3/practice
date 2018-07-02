<template>
  <div>
    <el-container>
      <el-header style="background-color:#545c64"></el-header>
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
              <el-submenu v-if="!item.leaf" :key="item.path" :index="item.path">
                <template slot="title">
                  <i :class="item.icon"></i>
                  <span slot="title">{{item.title}}</span>
                </template>
                <el-menu-item v-for="item2 in item.children" :key="item2.path" :index="item2.path" v-if="!item2.hidden">{{item2.title}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else-if="item.leaf" :key="item.path" :index="item.path">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
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
      this.menuList = this.$router.options.routes[0].children;
      // console.log(this.$router.options.routes[])
    }
  },
}
</script>

<style lang="scss" scoped></style>

