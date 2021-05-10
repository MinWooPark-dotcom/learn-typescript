//! 사용법: default parameter: (매개변수: 타입 = 매개변수 기본값)
// 매개변수 age에 기본값 10 입력
var makePerson = function (name, age) {
    if (age === void 0) { age = 10; }
    var person = { name: name, age: age };
    return person;
};
// 객체를 반환하는 화살표 함수 만들 시에는 컴파일러가 중괄호를 객체가 아닌 복합 실행문으로 해석하기 때문에 소괄호로 묶어 줘야 함
var makePerson2 = function (name, age) {
    if (age === void 0) { age = 10; }
    return ({ name: name, age: age });
};
console.log(makePerson("Jack"));
console.log(makePerson("Jack", 33));
console.log(makePerson2("Jack"));
console.log(makePerson2("Jack", 33));
