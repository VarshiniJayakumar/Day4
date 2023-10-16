const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

const uniqueNumbers = (function () {
  return [...new Set(numbers)];
})();

console.log(uniqueNumbers);
