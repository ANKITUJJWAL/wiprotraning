let choice = prompt("Type 'C' to convert Celsius → Fahrenheit OR 'F' to convert Fahrenheit → Celsius");
let temp = parseInt(prompt("Enter the temperature value:"));
if (choice.toUpperCase() === "C") {
    let fahrenheit = (temp * 9/5) + 32;
    alert(temp + "°C = " + fahrenheit + "°F");
} else if (choice.toUpperCase() === "F") {
    let celsius = (5/9) * (temp - 32);
    alert(temp + "°F = " + celsius.toFixed(2) + "°C");
} else {
    alert("Invalid choice! Please type 'C' or 'F'.");
}