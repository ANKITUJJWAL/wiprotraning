const ages = [12, 18, 25, 16, 40];
const eligible = ages.filter(a => a >= 18);
const count = eligible.reduce((sum, a) => sum + 1, 0);
eligible.forEach(a => console.log(a));
console.log("Eligible Voters:", count);