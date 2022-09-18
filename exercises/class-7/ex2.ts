function parentFunction(x: string): string {
    function closure() {
      // Closure is declared here.
      return x;
    };
    return closure();
  }
  
const remember = parentFunction("remembers me");
console.log(remember);
