//greet() function may or maynot receive second argument
function greet(name: string, msg?: string) {
  console.log(name, msg);
}
greet("Ravi");
greet("Srinivas", "Welcome to TypeScript");

//greet(1001); //Compilation ERROR

