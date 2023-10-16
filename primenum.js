const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

const primeNumbers = (function () {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  }

  const primeArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeArray.push(numbers[i]);
    }
  }
  return primeArray;
})();

console.log(primeNumbers);
