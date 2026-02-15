let num = parseInt(prompt("Enter an integer:"));
let count = 0;
let temp = Math.abs(num);

while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++;
}

console.log("Number of digits in " + num + " is " + count);
