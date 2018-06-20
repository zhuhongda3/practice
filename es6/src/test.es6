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