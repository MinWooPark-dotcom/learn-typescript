//! 함수의 매개변수도 변수의 일종이므로 비구조화 할당문 적용 가능
var printPerson = function (_a) {
    var name = _a.name, age = _a.age;
    return console.log("name: " + name + ", age: " + age);
};
printPerson({ name: "Jack", age: 10 });
