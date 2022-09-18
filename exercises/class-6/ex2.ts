function inclusiveRange (start: number, end: number): number[] {
    let range: number[]= [];
    if (start > end) {
        for (let i = start; i >= end; i--) {
            range.push(i);
        }
        return range;
    }
    else if (end > start) {
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    }
    else {
        range = [start];
        return range;
    }
}

console.log(inclusiveRange(1, 5));
console.log(inclusiveRange(2, 8));
console.log(inclusiveRange(10, 20));
console.log(inclusiveRange(24, 17));