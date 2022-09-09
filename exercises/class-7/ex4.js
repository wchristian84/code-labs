function getBudgets (array) {
    let budgetTotal = 0;
    for (let i = 0; i < array.length; i++) {
        budgetTotal += array[i].budget;
    }
    return budgetTotal;
}