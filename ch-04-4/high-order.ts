const add = (a: number): ((number) => number) => (b: number): number => a + b;
// const 함수 이름 = (매개변수1: 타입1) : 반환값 타입 => 함수 몸통
// 함수 몸통을 자세히 보면 (매개변수2: 타입2): 반환값 타입 => 함수 몸통
const result = add(1)(2);
console.log("result", result); //! 3

// 함수 시그니처 사용

type NumberToNumberFunc = (number) => number; // number 타입의 매개변수를 받아 number 타입의 값을 반환하는 함수 시그니처

const add2 = (a: number): NumberToNumberFunc => {
  return (b: number): number => a + b;
};

const result2 = add2(3)(4);
console.log("result2", result2); //! 7

const add3 = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b; // 클로저: 내부 함수에서 외부 함수의 변수(a)에 접근
  };
  return _add;
};

const result3 = add(5)(6);
console.log("result3", result3); //! 11
