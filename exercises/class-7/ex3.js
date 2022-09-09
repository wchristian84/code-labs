let drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
  ];

function sortByPrice(array) {
    let sortedArray = array.sort((a, b) => a.price - b.price)
    return sortedArray;
}
