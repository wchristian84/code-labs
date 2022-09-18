function toArray(object) {
    var objectKeys = Object.keys(object);
    var newArr = [];
    for (var i = 0; i < objectKeys.length; i++) {
        newArr.push([objectKeys[i], object[objectKeys[i]]]);
    }
    return newArr;
}
console.log(toArray({ a: 1, b: 2 }));
console.log(toArray({ shrimp: 15, tots: 12 }));
console.log(toArray({}));
