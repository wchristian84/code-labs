function sumOfProducts (array) {
// initialize variable to hold the total amount \\
let total = 0;
    // get the number of individual arrays within the argument array and loop through each of them //
    for (let i = 0; i < array.length; i++) {
        /* initialize a variable to contain the product of each internal array (initialized to 1 since (number * 1) 
        will always == number, i.e. the first # of each array will be figured correctly) */
        let product = 1;
        // nested loop to go through each individual array //
        for (let j = 0; j < array[i].length; j++) {
            // multiply the value by the next number in the array until the end of the array //
            product *= array[i][j];
        }
    // add the product value of the current array to the "total" variable before moving to the next array //
    total += product;
    }
    // return the combined total once all internal arrays have been looped through //
    return total;
}