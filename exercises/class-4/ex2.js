function countTrue(array) {
    var numOfTrue = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === true) {
            numOfTrue++;
        }
    }
    return numOfTrue;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
