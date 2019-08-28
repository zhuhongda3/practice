import request from '@/utils/request'

export function test(data) {
  return request({
    url: '/xlinx.php',
    data: data
  })
}

//登录
export function login_api(data) {
  return request({
    url: '/xlinx.php',
    data: data
  })
}

//商品列表 / 订单列表接口
export function get_goods_list_api(data) {
  return request({
    url: '/xlinx.php',
    data: data
  })
}

//活动商品列表
export function get_hdgoods_list_api(data) {
  return request({
    url: '/xlinx.php',
    data: data
  })
}

//获取广告图片 / 省分类 /市分类 / 区域分类
export function get_seting(data) {
  return request({
    url: '/xlinx.php',
    data: data
  })
}

//完善门店信息
export function set_shopinfo(data) {
  return request({
    url: '/xlinx.php',
    data: data
  })
}