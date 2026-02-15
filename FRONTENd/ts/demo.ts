let data: any;
data = 10;
console.log(data);
data = "text";
console.log(data);
data = true;
console.log(data);

let value: unknown;

value = "Ravi"; // Type is unknown, No Type inference
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
value = 100;
console.log(value);
