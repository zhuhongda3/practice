import Vue from 'vue'
import Router from 'vue-router'

// component
import Layout from '@/components/Layout'

// view

import Article from '@/views/article/Article'
import ArticleCreate from '@/views/article/ArticleCreate'
import ArticleList from '@/views/article/ArticleList'
import ArticleEdit from '@/views/article/ArticleEdit'
import ArticleDetail from '@/views/article/ArticleDetail'

import UserList from '@/views/user/UserList'

import Login from '@/views/authority/Login'

Vue.use(Router)

const routes = [
  { 
    path:'/article',
    name: 'Article',
    component: Article,
    redirect: '/article/articleCreate',
    leaf: false,
    title: '文章管理',
    icon: 'el-icon-edit-outline',
    children:[
      {
        path: '/article/articleCreate',
        name: 'ArticleCreate',
        component: ArticleCreate,
        hidden: false,
        title: '新建文章',
      },
      {
        path: '/article/articleList',
        name: 'ArticleList',
        component: ArticleList,
        props: (route) => ({ query: route.query.id }),
        hidden: false,
        title: '文章列表'
      },
      {
        path: '/article/articleEdit',
        name: 'ArticleEdit',
        component: ArticleEdit,
        hidden: true,
      },
      {
        path: '/article/articleDetail',
        name: 'ArticleDetail',
        component: ArticleDetail,
        hidden: true,
      }
    ]
  },
  { 
    path:'/userList',
    name: 'UserList',
    component: UserList,
    leaf: true,
    title: '用户管理',
    icon: 'el-icon-setting'
  }
];

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/article',
      name: 'Layout',
      component: Layout,
      // redirect: '/article',
      children: routes
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
});

export default router;
