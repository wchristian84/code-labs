function asciiCapitalize(input) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) % 2 == 0) {
            output.push(input.charAt(i).toUpperCase());
        }
        else {
            output.push(input.charAt(i).toLowerCase());
        }
    }
    return output.join('');
}
console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));
