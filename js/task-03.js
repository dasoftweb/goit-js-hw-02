const findLongestWord = function (string) {

  // Get all words
  for (let w = 0; w < string.length; w += 1) {
    const words = string.split(" ");
    let longestLength = 0;
    let longestWord = "";

    // Get all digits from word
    for (let d = 0; d < words.length; d += 1) {
      if (words[d].length > longestLength) {
        longestLength = words[d].length;
        longestWord = words[d];
      }
    }
    return longestWord;
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'