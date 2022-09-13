function asciiCapitalize(string) {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) % 2 == 0) {
            output.push(string.charAt(i).toUpperCase());
        }
        else {
            output.push(string.charAt(i).toLowerCase());
        }
    }
    return output;
}

console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));