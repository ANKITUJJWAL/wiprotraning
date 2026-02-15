
// 6. Reverse Each Word
let sentence2 = "Hello World";
let words2 = sentence2.split(" ");
let reversedWords = [];
for (let i = 0; i < words2.length; i++) {
  reversedWords.push(words2[i].split("").reverse().join(""));
}
console.log(reversedWords.join(" "));


