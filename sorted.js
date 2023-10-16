const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const median = (function () {
  const combined = arr1.concat(arr2);
  const sorted = combined.sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
})();

console.log(median);
