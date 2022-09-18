let drinks: any[] = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
  ];

function sortByPrice(array: any[]): any[] {
    let sortedArray = array.sort((a, b) => a.price - b.price)
    return sortedArray;
}

console.log(sortByPrice(drinks));