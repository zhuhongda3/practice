import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/component/Index'
//说明列表
import Install from '@/components/component/Install'
// basic 基础组件
import Layout from '@/components/component/Layout'
import Container from '@/components/component/Container'
import Color from '@/components/component/Color'
import Typography from '@/components/component/Typography'
import Icon from '@/components/component/Icon'
import Button from '@/components/component/Button'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/component/install',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/component/install',
          component: Install
        },
        {
          path: '/component/layout',
          component: Layout
        },
        {
          path: '/component/container',
          component: Container
        },
        {
          path: '/component/color',
          component: Color
        },
        {
          path: '/component/typography',
          component: Typography
        },
        {
          path: '/component/icon',
          component: Icon
        },
        {
          path: '/component/button',
          component: Button
        },
      ]
    }
  ]
})
