const numbers = [1, 2, 3, 4, 5];

(function () {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
})();
