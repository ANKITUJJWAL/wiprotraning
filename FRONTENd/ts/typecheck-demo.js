"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let username = "Ravi";
console.log(typeof username); //string
let age = 30;
console.log(typeof age); //number
let isAdmin = true;
console.log(typeof isAdmin); //boolean
//age = "Twenty"; //Compilation ERROR
//console.log(typeof age);
let skills = ["JavaScript", "TypeScript", "Angular"];
console.log(typeof skills); //object
let country;
let city = "Bangalore"; // Type inference
console.log(typeof city); //string
//city=100; //compilation ERROR
let pincode = 500032; // Type inference
console.log(typeof pincode); //number
//# sourceMappingURL=typecheck-demo.js.map