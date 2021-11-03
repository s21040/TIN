function factorialIterative(n){
    let result = 1;
    if (n === 0 || n === 1){
        return result;
    }else{
        for(let i = n; i >= 1; i--){
            result *= i;
        }
        return result;
    }
}
let n = 6;
answer = factorialIterative(n);
console.log("Iterative factorial of " + n + " is " + answer);

function factorialRecursive(a){
    if(a === 0 || a === 1){
        return 1;
    }else{
        return a * factorialRecursive(a-1);
    }
}
let a = 6;
answer = factorialRecursive(a);
console.log("Recursive factorial of " + a + " is " + answer);
