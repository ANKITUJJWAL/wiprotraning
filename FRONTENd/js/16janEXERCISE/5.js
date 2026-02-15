const words = ["Hello", "World", "JS", "Programming", "Code"];
const lowerWords = words.map(w => w.toLowerCase());
const longWords = lowerWords.filter(w => w.length > 4);
const totalChars = longWords.reduce((sum, w) => sum + w.length, 0);
console.log("Long Words:", longWords);
console.log("Total Characters:", totalChars);