// Generic function that returns the same type it receives
function identity<T>(value: T): T {
  return value;
}

// Using the generic function with different types
let numResult = identity<number>(100);
let strResult = identity<string>("TypeScript");
let boolResult = identity<boolean>(true);

console.log(numResult);        // 100
console.log(strResult);        // TypeScript
console.log(boolResult);       // true


// Generic class that can hold any type of value
class Box<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }
}

// Using the generic class with different types
let numberBox = new Box<number>(123);
let stringBox = new Box<string>("Angular");
let objectBox = new Box<{ id: number; name: string }>({
  id: 1,
  name: "Ravi"
});

console.log("\nGeneric Class Results:");
console.log(numberBox.getValue()); // 123
console.log(stringBox.getValue()); // Angular
console.log(objectBox.getValue()); // { id: 1, name: 'Ravi' }
function greet<T>(name: T, msg?: T): void {
  console.log(`Hello ${name}, ${msg ? msg : "Welcome!"}`);
}

greet<string>("Ravi"); 
greet<string>("Srinivas", "Good Morning!"); 

