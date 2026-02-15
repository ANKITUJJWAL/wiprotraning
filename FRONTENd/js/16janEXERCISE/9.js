const sentence = "Hello world from JavaScript";
const wordsArr = sentence.split(" ");
const reversed = wordsArr.map(w => w.split("").reverse().join(""));
reversed.forEach(w => console.log(w));