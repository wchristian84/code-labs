function findMultiples(num, length) {
    let multiples = [];
    for (let i = 0; i < length; i++) {
        multiples.push(num * (i + 1));
    }
    document.getElementById("array").innerText = multiples;
}