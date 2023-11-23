// Fibonacci sequence
function fibonacci(n) {
  let fib = [0,1]
  for(i = 2; i < n; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib;
}

return console.log(fibonacci(5))

// Factorial
function factorial(n) {
  let res = 1;
  for(i = 2; i<= n; i++) {
    res = res * i
  }
  return res;
}

console.log(factorial(6))

// Prime number
function isPrime(n) {
  if(n < 2){
    return false;
  }
  for(i = 2; i < n;i++){
    if(n%i === 0) {
      return false
    }
  }
return true
}

console.log(isPrime(1)) //false
console.log(isPrime(2))// true
console.log(isPrime(4)) //false

// Power of Two
function isPowerOfTwo(n){
  if(n < 1) {
    return false;
  }
  while(n > 1) {
    if(n%2 !== 0) {
      return false;
    }
    else {
      n = n/2
    }
  }
  return true
}

console.log(isPowerOfTwo(1)) //true
console.log(isPowerOfTwo(2)) //true
console.log(isPowerOfTwo(5)) //false

// Big-0 = O(logn) =>  because it is divided by half

// Recursive Fibonacci Sequence
// F which stands for function, then
// F(n) = F(n - 1) + F(n - 2)
// Base case F(0) = 0 & F(1) = 1
function recursiveFibonacci(n) {
 if(n < 2){
   return n;
 }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(7)) //0,1,1,2,3,5,8,13

// Recursive Factorial of a number
function recursiveFactorial(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(5))