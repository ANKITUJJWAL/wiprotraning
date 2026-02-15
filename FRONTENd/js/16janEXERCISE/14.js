const names2 = ["Ravi", "Ankit", "Priya", "Sonu"];
const sortedByLength = names2.sort((a, b) => a.length - b.length);
const withLength = sortedByLength.map(n => `${n} (${n.length})`);
console.log(withLength);