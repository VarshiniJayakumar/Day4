const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  
  const getPalindromes = (arr) => arr.filter(str => isPalindrome(str));
  