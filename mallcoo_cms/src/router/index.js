import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/layout/Index'

//说明列表
// import Element from '@/components/component/Element'
// import VueCodeRule from '@/components/component/VueCodeRule'

// basic 基础组件
// import Layout from '@/components/component/Layout'
// import Icon from '@/components/component/Icon'
// import Button from '@/components/component/Button'

// 表单组件
// import Radio from '@/components/component/Radio'
// import Checkbox from '@/components/component/Checkbox'
// import Input from '@/components/component/Input'
// import InputNumber from '@/components/component/InputNumber'
// import Select from '@/components/component/Select'
// import Cascader from '@/components/component/Cascader'
// import Switch from '@/components/component/Switch'
// import Slider from '@/components/component/Slider'
// import TimePicker from '@/components/component/TimePicker'
// import DatePicker from '@/components/component/DatePicker'
// import DateTimePicker from '@/components/component/DateTimePicker'
// import Upload from '@/components/component/Upload'
// import Rate from '@/components/component/'
// import ColorPicker from '@/components/component/ColorPicker'
// import Transfer from '@/components/component/Transfer'
// import Form from '@/components/component/Form'

// table 表格组件
// import Table from '@/components/component/Table'
// import Tag from '@/components/component/Tag'
// import Progress from '@/components/component/Progress'
// import Tree from '@/components/component/Tree'
// import Pagination from '@/components/component/Pagination'
// import Badge from '@/components/component/Badge'

// 提示组件
// import Alert from '@/components/component/Alert'
// import Loading from '@/components/component/Loading'
// import Message from '@/components/component/Message'
// import MessageBox from '@/components/component/MessageBox'
// import Notification from '@/components/component/Notification'

// 导航组件
// import NavMenu from '@/components/component/NavMenu'
// import Tabs from '@/components/component/Tabs'
// import Breadcrumb from '@/components/component/Breadcrumb'
// import Dropdown from '@/components/component/Dropdown'
// import Steps from '@/components/component/Steps'

// 其它组件
// import Dialog from '@/components/component/Dialog'
// import Tooltip from '@/components/component/Tooltip'
// import Popover from '@/components/component/Popover'
// import Card from '@/components/component/Card'
// import Carousel from '@/components/component/Carousel'
// import Collapse from '@/components/component/Collapse'


const routerOptions = [
  {
    path: '/component/references',
    component: 'References'
  },
  {
    path: '/component/layout',
    component: 'Layout'
  },
  {
    path: '/component/icon',
    component: 'Icon'
  },
  {
    path: '/component/button',
    component: 'Button'
  },
  {
    path: '/component/title',
    component: 'Title'
  },
  {
    path: '/component/radio',
    component: 'Radio'
  },
  {
    path: '/component/checkbox',
    component: 'Checkbox'
  },
  {
    path: '/component/input',
    component: 'Input'
  },
  {
    path: '/component/inputnumber',
    component: 'InputNumber'
  },
  {
    path: '/component/select',
    component: 'Select'
  },
  {
    path: '/component/switch',
    component: 'Switch'
  },
  {
    path: '/component/timepicker',
    component: 'TimePicker'
  },
  {
    path: '/component/datepicker',
    component: 'DatePicker'
  },
  {
    path: '/component/datetimepicker',
    component: 'DateTimePicker'
  },
  {
    path: '/component/colorpicker',
    component: 'ColorPicker'
  },
  {
    path: '/component/dropdown',
    component: 'Dropdown'
  },
  {
    path: '/component/tooltip',
    component: 'ToolTip'
  },
  {
    path: '/component/steps',
    component: 'Steps'
  },
  {
    path: '/component/upload',
    component: 'Upload'
  },
  {
    path: '/component/tabs',
    component: 'Tabs'
  },
  {
    path: '/component/dialog',
    component: 'Dialog'
  },
  {
    path: '/component/alert',
    component: 'Alert'
  },
  {
    path: '/component/message',
    component: 'Message'
  },
  {
    path: '/component/messagebox',
    component: 'MessageBox'
  },
  {
    path: '/component/loading',
    component: 'Loading'
  },
  {
    path: '/component/form',
    component: 'Form'
  },
  {
    path: '/component/table',
    component: 'Table'
  },
  {
    path: '/component/pagination',
    component: 'Pagination'
  },
  {
    path: '/component/style1',
    component: 'Style1'
  },
];

const children = routerOptions.map(route => {
  return {
  ...route,
  component: () => import(`@/views/element_component/${route.component}.vue`)
  }
});

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/component/references',
      component: Index,
      children: children
    }
  ],
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) { //控制每次切换页面时滚动条返回顶部
    return { x: 0, y: 0 }
  }
})
