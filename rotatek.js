const numbers = [1, 2, 3, 4, 5];
const k = 2;

const rotatedArray = (function () {
  const kTimes = k % numbers.length;
  const rotated = [...numbers.slice(kTimes), ...numbers.slice(0, kTimes)];
  return rotated;
})();

console.log(rotatedArray);
