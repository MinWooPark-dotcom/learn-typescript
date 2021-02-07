//  접근 제한자 public 덕분에 Person3이 함축되어 Person2처럼 코드를 작성할 수 있음

class Person3 {
    name:string  // ! 접근 제한자 public 사용 시 생략 가능
    age?: number // ! 접근 제한자 public 사용 시 생략 가능
    constructor(name: string, age?:number) {
        this.name  = name; this.age = age // ! 접근 제한자 public 사용 시 생략 가능 => public이 붙은 매겨변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작
    }
}
let jack3 : Person3 = new Person3('Jack', 32)
console.log(jack3)
