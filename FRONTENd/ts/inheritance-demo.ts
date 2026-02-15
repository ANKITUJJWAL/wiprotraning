
class Person {
  // constructor(protected adharCard:number){
  // this.adharCard:number = adharCard;
  // }

  constructor(protected adharCard: number) {}
}

class Employee extends Person {
  constructor(
    adharCard: number,
    private salary: number,
  ) {
    super(adharCard);
  }
}
let emp = new Employee(1234567890, 50000);
console.log(emp);
//console.log(emp.adharCard);//Compilation ERROR
