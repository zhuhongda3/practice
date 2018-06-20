'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 箭头函数
var events = [1, 2, 3];
var odds = events.map(function (v) {
  return v + 1;
});
var nums = events.map(function (v, i) {
  return v + i;
});

console.log(odds); // [2,3,4]
console.log(nums); // [1,3,5]

var bob = {
  _name: 'bob',
  _friends: [],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      console.log(_this.name + ' knows ' + f);
    });
  }
};

bob.printFriends();

function square() {
  var _arguments = arguments;

  var example = function example() {
    var numbers = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var number = _step.value;

        numbers.push(number * number);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return numbers;
  };
  return example();
}

console.log(square(2, 3, 1.1)); // 4,9,1.2100000000000002

//模板字符串
var a = 'xiao lin';
var b = 21;
console.log(a + ' age is ' + b);

// 解构
var c = 1,
    d = 2,
    e = 3;

console.log(c + ' and ' + d + ' and ' + e);

// 默认参数
function f(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

  return x + y;
}
console.log(f(3) == 15); // true

function f1(x) {
  return x * (arguments.length <= 1 ? 0 : arguments.length - 1);
}

console.log(f1(3, 'li', 2, true)); // 9

function f2(x, y, z) {
  return x + y + z;
}

console.log(f2.apply(undefined, [1, 2, 3]) == 6); // true


var Person = function () {
  // Object.call
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  // Object.create


  _createClass(Person, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }]);

  return Person;
}();

var children1 = new Person('xixi');
var children2 = new Person('xixi2');

console.log(children1.getName()); // xixi
console.log(children2.getName()); // xixi2
console.log(children1.__proto__ === children2.__proto__); // true
console.log(children1.constructor === Person.prototype.constructor); // true