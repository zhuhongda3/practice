let Mock = require('mockjs');

export const data = Mock.mock({
  'list|3000-4500':[
    {
      'id|+1': 10001,
      'name|1': '测试配置商场@word(4,6)',
      'address|1': '@county(true)',
      'tel|1': '0@integer(100,999)-@integer(1000000,9999999)',
      'created': '@cname',
      'date': '@datetime',
      'status|1': ['正常','冻结','异常']
    }
  ]
}).list;

// JSON.stringify(data, null, 4)