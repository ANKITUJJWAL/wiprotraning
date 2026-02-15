"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    adharCard;
    // constructor(protected adharCard:number){
    // this.adharCard:number = adharCard;
    // }
    constructor(adharCard) {
        this.adharCard = adharCard;
    }
}
class Employee extends Person {
    salary;
    constructor(adharCard, salary) {
        super(adharCard);
        this.salary = salary;
    }
}
let emp = new Employee(1234567890, 50000);
console.log(emp);
//console.log(emp.adharCard);//Compilation ERROR
//# sourceMappingURL=inheritance-demo.js.map