// call,apply
// function add() {
//   var sum = 0;
//   for(var i = 0;i<arguments.length;i++){
//     sum += arguments[i];
//   }
//   return sum;
// }

// console.log(add(1,2,3,4));

// console.log(add.apply(null,[1,2,3]));
// console.log(add.call(null,1,2,3));

//-----------------------------------------
//事件循环，回调队列
// async function async1(){
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2(){
//   console.log('async2');
// }
// console.log('script start');
// setTimeout(function(){
//   console.log('setTimeout');
// },0);
// async1();
// new Promise(function(resolve){
//   console.log('promise1');
//   resolve();
// }).then(function(){
//   console.log('promise2');
// });
// console.log('script end');

// 浏览器:        node:
// script start
// async1 start
// async2
// promise1
// script end
// promise2    ->node: async1 end
// async1 end  ->node: promise2
// setTimeout
//-----------------------------------------
