



let sentence3 = "i love javascript";
let words3 = sentence3.split(" ");
let capitalized = [];
for (let i = 0; i < words3.length; i++) {
  capitalized.push(words3[i].charAt(0).toUpperCase() + words3[i].slice(1));
}
console.log(capitalized.join(" "));

 