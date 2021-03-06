const findLongestWord = function (string) {

  // Get all words
    const words = string.split(" ");
    let longestWord = '';

    // Get all digits from word
    for (let i = 0; i < words.length; i += 1) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force'