
function keysAndValues(input: object) {
    let keys: string[] = [];
    let values: any[] = [];

    Object.keys(input).sort().forEach(function(x) {
        keys.push(x);
    })

    console.log(keys);
    for (key of keys) {
        values.push(input[key]);
        console.log(values);
    }}

keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined });