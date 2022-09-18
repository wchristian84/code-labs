function redundantReturn(str) {
    function returnStr() {
        return str;
    }
    return returnStr();
}
console.log(redundantReturn('Hello, World'));
