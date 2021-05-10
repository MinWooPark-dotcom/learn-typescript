var A = /** @class */ (function () {
    function A() {
        this.value = 1;
        // 타입스크립트에서 메서드란 function으로 만든 함수 표현식을 담고 있는 속성, 여기서는 method는 () => void 타입의 함수 표현식을 설정
        this.method = function () {
            console.log("value: " + this.value);
        };
    }
    return A;
}());
var a = new A();
console.log(a.method()); // value: 1
// class A는 번거롭고 가독성이 떨어짐. 타입스크립트는 클래스 속성 중 함수 표현식을 담는 속성(메서드)은 function 키워드 생략할 수 있게 하는 단축 구문(shorthand)을 제공
// class A를 보다 타입스크립트답게 구현한 버전
var B = /** @class */ (function () {
    function B(value) {
        if (value === void 0) { value = 1; }
        this.value = value;
    }
    B.prototype.method = function () {
        console.log("value: " + this.value);
    };
    return B;
}());
var b = new B(2);
console.log(b.method()); // value: 1
