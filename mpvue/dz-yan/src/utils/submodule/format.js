import moment from 'moment'

function formatConsultTime(date) {
  let consultDate = new Date(date.replace(/-/g, '/')),
    h = consultDate.getHours(),
    s = consultDate.getSeconds(),
    hs = (h < 10 ? '0' + h : h) + ':' + (s < 10 ? '0' + s : s)

  let todayStartDate = moment().startOf('day'), // 今天零点
    lastdayStartDate = moment().subtract(1, 'days').startOf('day') // 昨天零点

  if (consultDate - todayStartDate < 86400000 && consultDate - todayStartDate >= 0) { //今天
    return hs
  }
  if (consultDate - lastdayStartDate < 86400000 && consultDate - lastdayStartDate >= 0) { //昨天
    return '昨天' + ' ' + hs
  }
  return moment(new Date(date.replace(/-/g, '/'))).format('dddd') + ' ' + hs  //星期x
}

 // 获取支付提示状态文案
 function getStatusText(status) {
  let str = ''
  switch (status) {
    case 0:
      str = '待支付'
      break
    case 1:
      str = '支付成功'
      break
    case -1:
      str = '支付失败'
      break
    case 2:
      str = '退款中'
      break
    case 3:
      str = '已退款'
      break
    case -3:
      str = '退款失败'
      break
    case 4:
      str = '支付超时'
      break
    default:
      break
  }
  return str
}

//获取支付Class
function getStatusClass(status) {
  let className = ''
  switch (status) {
    case 1: 
      className = 'status--ok'
      break
    case 0:
    case 3:
      className = 'status--suc'
      break
    case -1:
    case -3:
    case 4:
      className = 'status--fail'
      break
    case 2:
      className = 'status--wait'
      break
    default:
      break
  }
  return className
}

//获取亲属称呼
function getRelationName(code){
  let name = ''
  switch (code) {
    case 1:
      name = '户主'
      break
    case 2:
      name = '配偶'
      break
    case 3:
      name = '儿子'
      break
    case 4:
      name = '儿媳'
      break
    case 5:
      name = '女儿'
      break
    case 6:
      name = '孙子'
      break
    case 7:
      name = '孙女'
      break
    case 8:
      name = '母亲'
      break
    case 9:
      name = '父亲'
      break
    case 10:
      name = '租赁'
      break
    case 99:
      name = '其它'
      break
    default:
      break
  }
  return name
}

export { formatConsultTime, getStatusText, getStatusClass, getRelationName }
