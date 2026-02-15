let n = parseInt(prompt("Enter a positive integer:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("The sum of numbers from 1 to " + n + " is " + sum);