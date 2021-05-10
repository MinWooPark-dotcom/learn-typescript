//! 색인 키와 값으로 객체 만들기 - 색인 가능 타입(indexable type)
// type KeyType = {
//   [key: string]: string;
// };

// [key] 부분이 'name'이면 {name: value}, 'firstName'이면 {firstName: value} 형태의 객체 생성
const makeObject = (key, value) => ({ [key]: value });

console.log(makeObject("name", "Jack")); // {name: "Jack"}
console.log(makeObject("firstName", "Jane")); //{firstName: "Jane"}

type KeyValueType = {
  [key: string]: string;
};

const makeObject2 = (key: string, value: string): KeyValueType => ({
  [key]: value,
});

console.log(makeObject2("name", "Jack")); // {name: "Jack"}
console.log(makeObject2("firstName", "Jane")); //{firstName: "Jane"}
