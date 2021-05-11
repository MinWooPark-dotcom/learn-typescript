//! for(변수 in 객체): 객체를 대상으로 사용하지만 배열도 객체이므로 배열에도 사용 가능.
var names = ["Jack", "Jane", "Steve"];
for (var index in names) {
    var name_1 = names[index];
    console.log("[" + index + ": " + name_1 + "]");
}
