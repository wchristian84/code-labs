function keysAndValues(input) {
    var keys = [];
    var values = [];
    Object.keys(input).sort().forEach(function (x) {
        keys.push(x);
    });
    console.log(keys);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        key = keys_1[_i];
        values.push(input[key]);
        console.log(values);
    }
}
keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined });
