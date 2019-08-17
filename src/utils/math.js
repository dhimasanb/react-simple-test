// • Sum X & Y, and print the result
// • Input : 1, 2
// • Output : 3
export const addition = value => {
  let input = value.toString().split(",");

  let i;
  for (i = 0; i < input.length; i++) {
    input[i] = parseInt(input[i]);
  }

  let result = input.reduce(function(total, num) {
    return total + num;
  });

  return result;
};

// • Multiply X & Y, and print the result
// • Input : 1, 2
// • Output : 2
export const multiplication = value => {
  let input = value.toString().split(",");

  let i;
  for (i = 0; i < input.length; i++) {
    input[i] = parseInt(input[i]);
  }

  let result = input.reduce(function(total, num) {
    return total * num;
  });

  return result;
};

// Find first N prime number, and print the result
// • Input : 4
// • Output : 2, 3, 5, 7
export const sieveOfEratosthenes = n => {
  let primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = 2; j * i <= n; j++) {
      primes[i * j] = false;
    }
  }

  let result = [];
  for (let i = 0; i < primes.length; i++) {
    if (primes[i]) result.push(i);
  }

  return result;
};

function isPrime(number) {
  let root = Math.sqrt(number);

  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= root; i++) {
    if (number % parseInt(i) === parseInt(0)) {
      return false;
    }
  }

  return true;
}

export const findPrime = input => {
  let primes = [];
  let count = 0;
  let number = 1;

  while (parseInt(count) !== parseInt(input)) {
    if (isPrime(number)) {
      primes.push(number);
      count += 1;
    }
    number += 1;
  }

  return primes;
};

// Find first N Fibonacci sequence, and print the result
// • Input : 4
// • Output : 0, 1, 1, 2
export const fibonacciSequence = n => {
  console.log("n", n);
  if (n === 1) {
    return [0, 1];
  } else {
    let s = fibonacciSequence(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
