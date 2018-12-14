var arr = [1,2,3,4,5,6,7,8,9,10];
var arr2D = [[1,2],[3,4],5];
var arrTest = [1,3,1,4];

// 累加
var arr1 = arr.reduce((prev,cur) => {
  return prev + cur;
},0)

// 根据区间截取数组
var arr2 = arr.reduce((prev,cur) => {
  var arr = null;
  if(cur > 3 && cur < 8){
    arr = prev.concat(cur);
  }else{
    arr = prev;
  }
  return arr;
},[])

//扁平化二维数组
var arr3 = arr2D.reduce((prev,cur) => {
  return prev.concat(cur);
},[])

//值操作
var arr4 = arrTest.reduce((prev,cur,curIdx,arr) => {
  var i = arr.length - 1 - curIdx;
  var val = Math.pow(10,i) * cur;
  return prev + val;
},0)



