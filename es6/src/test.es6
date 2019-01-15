// 箭头函数
var events = [1,2,3];
var odds = events.map(v => v + 1);
var nums = events.map((v, i) => v + i);

console.log(odds);  // [2,3,4]
console.log(nums);  // [1,3,5]

var bob = {
  _name: 'bob',
  _friends: [],
  printFriends() {
    this._friends.forEach(f => {
      console.log(`${this.name} knows ${f}`);
    })
  }
}

bob.printFriends();

function square() {
  let example = () => {
    let numbers = [];
    for(let number of arguments) {
      numbers.push(number * number); 
    }

    return numbers;
  }
  return example();
}

console.log(square(2,3,1.1));  // 4,9,1.2100000000000002

//模板字符串
var a = 'xiao lin';
var b = 21;
console.log(`${a} age is ${b}`);

// 解构
var [c,d,e] = [1, 2, 3];
console.log(`${c} and ${d} and ${e}`);

// 默认参数
function f(x, y = 12) {
  return x + y;
}
console.log(f(3) == 15); // true

function f1(x, ...y) {
  return x * y.length;
}

console.log(f1(3, 'li', 2, true)); // 9

function f2(x, y, z) {
  return x + y + z;
}

console.log(f2(...[1, 2, 3]) == 6); // true


class Person {
  // Object.call
  constructor(name) {      
    this.name = name;
  }

  // Object.create
  getName() {            
    return this.name;
  }
}

var children1 = new Person('xixi');
var children2 = new Person('xixi2');

console.log(children1.getName()); // xixi
console.log(children2.getName()); // xixi2
console.log(children1.__proto__ === children2.__proto__); // true
console.log(children1.constructor === Person.prototype.constructor); // true


// 数组深拷贝
var arr1 = [1,3,2];
var arr2 = [...arr1];

// 数据迭代
for(var value of arr2){
  console.log(value)
}

// 迭代内部原理
var $iterator = arr2[Symbol.iterator]();
var $result = $iterator.next();
while(!$result.done){
  value = $result.value;
  console.log(value)
  $result = $result.next();
}


/**
 * 数组去重
 * 1.使用new Set 将数组转化为 对象，并去除重复项
 * 2. 使用Array.from()将类数组转化成数组,类似于es5的[].slice.call(obj) 或者 Array、prototype.call(obj)
 */ 

 var arr3 = Array.from(new Set(arr1));


/**
 * 原生sort排序，如果没有传值，这将相应的值转换成字符串，比较字符的ASCII码来决定排序,如果有传值，则根据自定义规则排序，
 * 原理：冒泡排序
 * x - y < 0， x排在y的前面;
 * x - y > 0 ,x排在y的后面;
 * x - y = 0,x 和 y 不交换位置
 * a - b 升序
 * b - a 降序
 */

 var a = [2,3,1,2,5];
 a.sort(function(a,b){
   return a - b;
 })
 console.log(a); // [1,2,2,3,5]


/**
 * 冒泡排序 
 * 最理想情况，本身正序，只需走一趟，时间复杂度：O(n)
 * 最差的情况，本身倒序，需比较n2次，时间复杂度：O(n2)
 * 平均时间复杂度为：O(n2)。
 */ 
var a = [1,5,2,2,4,6];
for(var i = 0; i < a.length - 1;i++){ //外层循环控制排序趟数
  for(var j = 0; j < a.length - 1 - i;j++){ //内层循环控制每一趟排序多少次
    if(a[j] > a[j+1]){ //升序
      var temp = a[j+1];
      a[j+1] = a[j];
      a[j] = temp;
    }
  }
}
console.log(a); // [1,2,2,4,5,6]