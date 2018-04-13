//lodash函数功能测试
var _ = require('lodash');
var a = _.defaults({'a': 1},{'a': 3,'b': 2});
var b = _.partition([1,2,3,4],n => n % 2);
console.log(a); // {a: 1, b: 2}
console.log(b); // [[1,3],[2,4]]