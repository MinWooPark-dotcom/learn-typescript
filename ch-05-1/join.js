//! string[] 타입의 배열을 다시 string 타입으로 변환하려면 Array 클래스의 join 메서드를 사용합니다.
// join (구분자: string): stirng
var join = function (strArray, delim) {
    if (delim === void 0) { delim = ""; }
    return strArray.join(delim);
};
console.log(join(["h", "e", "l", "l", "o"]), join(["h", "e", "l", "l", "o"], "_"));
