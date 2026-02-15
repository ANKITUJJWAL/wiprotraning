
let part: number | string;
part = 101;
console.log(part);
part = "Smith";
console.log(part);

//union type allows multiple types for a variable
type ID = number | string;

let userid: ID;

userid = 101;
console.log(userid);
userid = "Smith";
console.log(userid);

let customerid: ID = 1001;
console.log(customerid);
customerid = "Ravi";
console.log(customerid);
