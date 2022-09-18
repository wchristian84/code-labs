function countTrue(array: boolean[]) {
    let numOfTrue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
        numOfTrue++;
        }
    }
    return numOfTrue;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));