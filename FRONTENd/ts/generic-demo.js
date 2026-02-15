"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic function that returns the same type it receives
function identity(value) {
    return value;
}
// Using the generic function with different types
let numResult = identity(100);
let strResult = identity("TypeScript");
let boolResult = identity(true);
console.log(numResult); // 100
console.log(strResult); // TypeScript
console.log(boolResult); // true
// Generic class that can hold any type of value
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
// Using the generic class with different types
let numberBox = new Box(123);
let stringBox = new Box("Angular");
let objectBox = new Box({
    id: 1,
    name: "Ravi"
});
console.log("\nGeneric Class Results:");
console.log(numberBox.getValue()); // 123
console.log(stringBox.getValue()); // Angular
console.log(objectBox.getValue()); // { id: 1, name: 'Ravi' }
function greet(name, msg) {
    console.log(`Hello ${name}, ${msg ? msg : "Welcome!"}`);
}
greet("Ravi");
greet("Srinivas", "Good Morning!");
//# sourceMappingURL=generic-demo.js.map