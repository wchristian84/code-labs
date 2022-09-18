var drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
];
function sortByPrice(array) {
    var sortedArray = array.sort(function (a, b) { return a.price - b.price; });
    return sortedArray;
}
console.log(sortByPrice(drinks));
