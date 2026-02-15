let num = parseInt(prompt("Enter an integer:"));
let reversed = 0;
let temp = Math.abs(num);

while (temp > 0) {
    let digit = temp % 10;
    reversed = (reversed * 10) + digit;
    temp = Math.floor(temp / 10);
}

if (num < 0) {
    reversed = -reversed;
}

console.log("Reversed number: " + reversed);