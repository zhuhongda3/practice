(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sayHello = sayHello;
function sayHello(name) {
    return "Hello from " + name;
}

},{}],2:[function(require,module,exports){
"use strict";

var _greet = require("./greet");

function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerHTML = (0, _greet.sayHello)(name);
}
showHello("greeting", "TypeScript");
console.log('addChange');

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9fYnJvd3Nlci1wYWNrQDYuMS4wQGJyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsInNyYy9ncmVldC50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0IsUSxHQUFBLFE7QUFBVixTQUFVLFFBQVYsQ0FBbUIsSUFBbkIsRUFBK0I7QUFDbkMsMkJBQXFCLElBQXJCO0FBQ0Q7Ozs7Ozs7QUNBRCxTQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBbUMsSUFBbkMsRUFBK0M7QUFDN0MsUUFBTSxNQUFNLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsUUFBSSxTQUFKLEdBQWdCLHFCQUFTLElBQVQsQ0FBaEI7QUFDRDtBQUNELFVBQVUsVUFBVixFQUFxQixZQUFyQjtBQUNBLFFBQVEsR0FBUixDQUFZLFdBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8obmFtZTogc3RyaW5nKXtcclxuICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XHJcbn0iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLG5hbWU6IHN0cmluZyl7XHJcbiAgY29uc3QgZWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSk7XHJcbiAgZWx0LmlubmVySFRNTCA9IHNheUhlbGxvKG5hbWUpO1xyXG59XHJcbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsXCJUeXBlU2NyaXB0XCIpO1xyXG5jb25zb2xlLmxvZygnYWRkQ2hhbmdlJyk7Il19
