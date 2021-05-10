//! 색인 키와 값으로 객체 만들기 - 색인 가능 타입(indexable type)
// type KeyType = {
//   [key: string]: string;
// };
// [key] 부분이 'name'이면 {name: value}, 'firstName'이면 {firstName: value} 형태의 객체 생성
var makeObject = function (key, value) {
    var _a;
    return (_a = {}, _a[key] = value, _a);
};
console.log(makeObject("name", "Jack")); // {name: "Jack"}
console.log(makeObject("firstName", "Jane")); //{firstName: "Jane"}
var makeObject2 = function (key, value) {
    var _a;
    return (_a = {},
        _a[key] = value,
        _a);
};
console.log(makeObject2("name", "Jack"));
console.log(makeObject2("firstName", "Jane"));
