function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let  number= 4;
console.log("Factorial of", number, "is", factorial(number));
