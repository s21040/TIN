function fibonacci(n) {
    let first = 0;
    let second = 1;
    let number = 0;

    for(let i = 0; i <= n; i++){
        number = first + second;
        first = second;
        second = number;
    }
    return number;
}
console.log("Fibonacci number of " + n + " is " + fibonacci(n));