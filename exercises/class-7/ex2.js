function parentFunction(x) {
    function closure() {
        // Closure is declared here.
        return x;
    }
    ;
    return closure();
}
var remember = parentFunction("remembers me");
console.log(remember);
