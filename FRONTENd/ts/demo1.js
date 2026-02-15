"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let add = (a, b) => {
    console.log(a + b);
};
add(10, 20);
function substract(a, b) {
    return a - b;
}
let result = substract(50, 20);
console.log(result);
function list() {
    return [10, 20, 30];
}
console.log(list());
function userdetails() {
    return [1001, "Ravi", "Ravi@123"];
}
console.log(userdetails);
let printUser = (id, name) => {
    console.log(`ID: ${id}, Name: ${name}`);
};
printUser(101, "Ravi");
//printUser("102", "Srinivas"); compilation ERROR
//# sourceMappingURL=demo1.js.map