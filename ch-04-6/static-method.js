//! 클래스 속성은 static 수정자(modifier)를 속성 앞에 붙여서 정적으로 만들 수 있음. 클래스의 정적 속성이란 인스턴스 없이 호출 가능한 속성을 말함.
var C = /** @class */ (function () {
    function C() {
    }
    C.whoAreYou = function () {
        return "I'm class C";
    };
    return C;
}());
var D = /** @class */ (function () {
    function D() {
    }
    D.whoAreYou = function () {
        return "I'm class D";
    };
    return D;
}());
// '클래스 이름.정적 속성 이름' 형태의 점 표기법(dot notation)을 사용해 값을 얻거나 설정 가능
console.log(C.whoAreYou()); // I'm class C
console.log(D.whoAreYou()); // I'm class D
