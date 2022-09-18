function redundantReturn(str: string): string {
    function returnStr() {
        return str;
    }
    return returnStr();
}

console.log(redundantReturn('Hello, World'));