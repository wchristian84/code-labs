function interview(array: number[], num: number): string {
    let qualified: string = "qualified";


    while (qualified != "disqualified") {
        if (num > 120) {
            qualified = "disqualified";
        }
        if (array.length != 8) {
            qualified = "disqualified";
        }
        if (array[0] > 5 || array[1] > 5) {
            qualified = "disqualified";
        }
        if (array[2] > 10 || array[3] > 10) {
            qualified = "disqualified";
        }
        if (array[4] > 15 || array[5] > 15) {
            qualified = "disqualified";
        }
        if (array[6] > 20 || array[7] > 20) {
            qualified = "disqualified";
        }
        break;
    }

    return qualified;  
}

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120));
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64));
console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120));
console.log(interview([5, 5, 10, 10, 15, 15, 20], 120));
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130));