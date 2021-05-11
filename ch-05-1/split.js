//! 타입스크립트는 문자 타입이 없고 문자열의 내용 또한 변경할 수 없음. 이러한 특징 때문에 문자열을 가공하려면 먼저 문자열을 배열로 전환해야 함
// split(구분자: string): string[]
var split = function (str, delim) {
    if (delim === void 0) { delim = ""; }
    return str.split(delim);
}; // delim는 디폴트 매개변수로 ""을 지정
console.log(split("hello"), split("h_e_l_l_o", "_"));
// ["h", "e", "l", "l", "o"]
// [("h", "e", "l", "l", "o")];
