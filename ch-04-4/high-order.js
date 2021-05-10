var add = function (a) {
  return function (b) {
    return a + b;
  };
};
// const 함수 이름 = (매개변수1: 타입1) : 반환값 타입 => 함수 몸통
// 함수 몸통을 자세히 보면 (매개변수2: 타입2): 반환값 타입 => 함수 몸통
var result = add(1)(2);
console.log("result", result); // 3
var add2 = function (a) {
  return function (b) {
    return a + b;
  };
};
var result2 = add2(3)(4);
console.log("result2", result2); // 7
var add3 = function (a) {
  var _add = function (b) {
    return a + b; // 클로저
  };
  return _add;
};
var result3 = add(5)(6);
console.log("result3", result3);
