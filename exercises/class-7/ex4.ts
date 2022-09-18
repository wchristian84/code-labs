function getBudgets (array: any[]): number {
    let budgetTotal: number = 0;
    for (let i = 0; i < array.length; i++) {
        budgetTotal += array[i].budget;
    }
    return budgetTotal;
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));
console.log(getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]));