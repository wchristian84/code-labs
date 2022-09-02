function sumOfProducts () {
let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        let product = 1;
        for (let j = 0; j < arguments[i].length; j++) {
            product *= arguments[i][j];
        }
    total += product;
    }
    return total;
}