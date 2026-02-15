const nums = [1, 2, 3, 2, 4, 1, 5];
const unique = nums.filter((num, idx) => nums.indexOf(num) === idx);
const sortedUnique = unique.sort((a, b) => a - b);
console.log(sortedUnique);