let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let c = parseInt(prompt("Enter third number:"));

if (a > b && a > c) {
    console.log(a + " is the largest number");
} else if (b > a && b > c) {
    console.log(b + " is the largest number");
} else {
    console.log(c + " is the largest number");
}