const strings = ["hello", "world", "javascript"];

(function () {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
  }
  console.log(strings);
})();
