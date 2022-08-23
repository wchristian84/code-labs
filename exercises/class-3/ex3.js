let me = {
    name: "Wade",
    age: 38,
    occupation: "English teacher"
}

let keys = [];
let values = [];

Object.keys(me).sort().forEach(function(x) {
    keys.push(x);
})

console.log(keys);
for (key of keys) {
    values.push(me[key]);
}
console.log(values);