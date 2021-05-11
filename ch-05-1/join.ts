//! string[] 타입의 배열을 다시 string 타입으로 변환하려면 Array 클래스의 join 메서드를 사용합니다.
// join (구분자: string): stirng

const join = (strArray: string[], delim: string = ""): string =>
  strArray.join(delim);

console.log(
  join(["h", "e", "l", "l", "o"]),
  join(["h", "e", "l", "l", "o"], "_")
);

// hello
// h_e_l_l_o
