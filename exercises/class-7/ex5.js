function toArray (object) {
    let objectKeys = Object.keys(object);
    let newArr = [];
    for (let i = 0; i < objectKeys.length; i++) {
        newArr.push([objectKeys[i], object[objectKeys[i]]])
    }
    return newArr;
}