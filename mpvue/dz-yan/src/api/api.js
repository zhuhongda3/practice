import request from '@/utils/request'

//首页
export function test(data) {
  return request({
    url: '/a/b',
    data: data
  })
}