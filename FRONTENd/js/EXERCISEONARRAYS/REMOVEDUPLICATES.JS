
// 4. Remove Duplicate Values
let numbers = [1, 2, 3, 2, 4, 1, 5];
let unique = [];
for (let i = 0; i < numbers.length; i++) {
  if (unique.indexOf(numbers[i]) === -1) {
    unique.push(numbers[i]);
  }
}
console.log(unique);


