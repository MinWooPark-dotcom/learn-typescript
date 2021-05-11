//! for(변수 in 객체): 객체를 대상으로 사용하지만 배열도 객체이므로 배열에도 사용 가능.

let names = ["Jack", "Jane", "Steve"];

for (let index in names) {
  const name = names[index];
  console.log(`[${index}: ${name}]`);
}
// [0: Jack]
// [1: Jane]
// [2: Steve]
