// 类 class
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}

var p = new Point(1,2);

console.log(p.toString());  // (1,2)


// 继承 extends
class ColorPoint extends Point{
  constructor(x,y,color){
    super(x,y);
    this.color = color;
  }
  
  toString() {
    return this.color + ' ' + super.toString(); //调用父类的toString方法
  }
}

var p1 = new ColorPoint(1,2,'#000');

console.log(p1.toString());  // #000 (1,2)


// 静态方法 static
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo{}

var f = new Foo();
// console.log(f.classMethod())  // console.error();
console.log(Foo.classMethod())  // 'hello'
console.log(Bar.classMethod())  // 'hello'