"use strict";

var _obj$a, _ref;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Example JavaScript code to test Babel transpilation

// Arrow functions
var add = function add(a, b) {
  return a + b;
};
console.log(add(5, 3));

// Template literals
var name = "Alice";
var greeting = "Hello, ".concat(name, "!");
console.log(greeting);

// Classes
var Person = /*#__PURE__*/function () {
  function Person(name) {
    _classCallCheck(this, Person);
    this.name = name;
  }
  return _createClass(Person, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("My name is ".concat(this.name));
    }
  }]);
}();
var person = new Person("Bob");
person.sayHello();

// Spread operator
var arr1 = [1, 2, 3];
var arr2 = [].concat(arr1, [4, 5]);
console.log(arr2);

// Optional chaining
var obj = {
  a: {
    b: {
      c: 42
    }
  }
};
var value = obj === null || obj === void 0 || (_obj$a = obj.a) === null || _obj$a === void 0 || (_obj$a = _obj$a.b) === null || _obj$a === void 0 ? void 0 : _obj$a.c;
console.log(value);

// Nullish coalescing operator
var nullishValue = (_ref = null) !== null && _ref !== void 0 ? _ref : "default";
console.log(nullishValue);

// const and let
var changeable = 10;
changeable = 20;
var constant = 30;
console.log(changeable, constant);

// for...of loop
var iterable = [10, 20, 30];
for (var _i = 0, _iterable = iterable; _i < _iterable.length; _i++) {
  var item = _iterable[_i];
  console.log(item);
}