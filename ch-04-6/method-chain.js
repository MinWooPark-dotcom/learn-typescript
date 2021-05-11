var Caluclator = /** @class */ (function () {
    function Caluclator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    Caluclator.prototype.add = function (value) {
        this.value += value;
        return this;
    };
    Caluclator.prototype.multiply = function (value) {
        this.value += value;
        return this;
    };
    return Caluclator;
}());
var calc = new Caluclator();
var result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log("result", result);
