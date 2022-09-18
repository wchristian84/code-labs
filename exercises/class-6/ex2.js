function inclusiveRange(start, end) {
    var range = [];
    if (start > end) {
        for (var i = start; i >= end; i--) {
            range.push(i);
        }
        return range;
    }
    else if (end > start) {
        for (var i = start; i <= end; i++) {
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
