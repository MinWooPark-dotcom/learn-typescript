//! 함수의 매개변수도 변수의 일종이므로 비구조화 할당문 적용 가능

type Person = { name: string; age: number };

// (name: string, age: number) 직접 쓰는 대신 {name, age}: Person으로 대체
const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`);

printPerson({ name: "Jack", age: 10 }); // name: Jack, age: 10
