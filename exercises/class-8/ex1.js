function makePlusFunction(num1) {
    return function (num2) {
        return num1 + num2;
    };
}
var plusFive = makePlusFunction(5);
console.log(plusFive(2));
console.log(plusFive(-8));
var plusTen = makePlusFunction(10);
console.log(plusTen(0));
console.log(plusTen(188));
console.log(plusFive(plusTen(0)));
