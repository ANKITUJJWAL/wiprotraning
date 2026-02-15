let add = (a: number, b: number): void => {
  console.log(a + b);
};

add(10, 20);

function substract(a: number, b: number): number {
  return a - b;
}

let result = substract(50, 20);
console.log(result);

function list(): number[] {
  return [10, 20, 30];
}

console.log(list());

function userdetails(): [number, string, string] {
  return [1001, "Ravi", "Ravi@123"];
}

console.log(userdetails);

let printUser = (id: number, name: string): void => {
  console.log(`ID: ${id}, Name: ${name}`);
};

printUser(101, "Ravi");
//printUser("102", "Srinivas"); compilation ERROR
