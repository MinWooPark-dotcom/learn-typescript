//! for..in문에 객체를 사용할 때는 프로퍼티를 대상으로 순회
let jack = { name: "Jack", age: 32 };
for (let property in jack) console.log(`${property}: ${jack[property]}`);
// name: Jack
// age: 32
