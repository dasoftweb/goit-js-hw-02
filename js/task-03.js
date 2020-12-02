const findLongestWord = function (string) {
  for (let i = 0; i < string.length; i += 1) {
    const words = string.split(" ");
    let longestLength = 0;
    let longestWord = "";

    for (let w = 0; w < words.length; w += 1) {
      if (words[w].length > longestLength) {
        longestLength = words[w].length;
        longestWord = words[w];
      }
    }
    return longestWord;
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'