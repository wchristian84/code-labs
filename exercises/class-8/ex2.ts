function asciiCapitalize(input: string): string[] {
    let output: string[] = [];
    for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) % 2 == 0) {
            output.push(input.charAt(i).toUpperCase());
        }
        else {
            output.push(input.charAt(i).toLowerCase());
        }
    }
    return output;
}

console.log(asciiCapitalize("to be or not to be!"));
console.log(asciiCapitalize("THE LITTLE MERMAID"));
console.log(asciiCapitalize("Oh what a beautiful morning."));
