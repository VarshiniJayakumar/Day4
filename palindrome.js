const words = ["racecar", "hello", "madam", "world"];

const palindromes = (function () {
  function isPalindrome(str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
  }

  const palindromeArray = [];
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      palindromeArray.push(words[i]);
    }
  }
  return palindromeArray;
})();

console.log(palindromes);
