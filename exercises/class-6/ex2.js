function inclusiveRange (start, end) {
    let range = [];
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