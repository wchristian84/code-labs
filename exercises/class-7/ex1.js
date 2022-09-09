function redundantReturn(str) {
    function returnStr() {
        return str;
    }
    return returnStr();
}