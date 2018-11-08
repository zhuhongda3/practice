//浅拷贝-对象(简单的拷贝)  Shallow copy of object

// 方案一
(function(){
  var obj1 = {a: 1};
  var obj2 = {b: 2};
  
  var obj = Object.assign({},obj1,obj2);
  console.log(obj1);
  console.log(obj2);
  console.log(obj);
})();

// 方案二
(function(){

  // 单对象浅拷贝
  function extend(target, source){
    for(var obj in source){
      target[obj] = source[obj];
    }
    return target;
  }
  
  var o1 = extend({},{a: 1});
  console.log(o1);

  // 多对象浅拷贝
  function extendAll(){
    var len = arguments.length;
    var target = {};
    for(var i = 0; i < len; i++){
      for(var obj in arguments[i]){
        target[obj] = arguments[i][obj];
      }
    }
    return target;
  }

  var o2 = extendAll({a: 1},{b: 2},{c: 3});
  console.log(o2);
})();

