//! 타입스크립트에서 배열의 타입은 '아이템 타입[]'
// ex) 배열의 아이템이 number타입이면 배열의 타입은 number[]

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["Hello", "World"];

type IPerson = { name: string; age?: number };
let personArray: IPerson[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];

console.log("🚀 ~ file: array-type.ts ~ line 9 ~ personArray", personArray);
// 🚀 ~ file: array-type.ts ~ line 9 ~ personArray [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
