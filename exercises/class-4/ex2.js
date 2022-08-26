function countTrue(array) {
    let numOfTrue = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === true) {
        numOfTrue++;
        }
    }
    return numOfTrue;
}