
let name = "Srinivas";
let message = 'Welcome to JavaScript!';
//Using Template literal
let greeting = `Hello, ${name}!`; // Template literal
//Old method:
greeting = "Hello,"+name;
console.log(greeting); // Hello, Srinivas!
let person={
 firstName: "Steve",     
lastName: "Smith",
 age: 67
};
//old  method
console.log("Hello," +person.firstName+" "+person.lastName);
//template literal-using backticks
console.log(`Hello, ${person.firstName}  ${person.lastName}`);
console.log(typeof greeting);
let isActive=true;
console.log(`${isActive} :  ${typeof isActive}`);

