//! 타입스크립트로 메서드 체인을 구현하려면 메서드가 항상 this를 반환하게 해야 함

class Caluclator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value;
    return this;
  }
  multiply(value: number) {
    this.value += value;
    return this;
  }
}

let calc = new Caluclator();
let result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log("result", result);
